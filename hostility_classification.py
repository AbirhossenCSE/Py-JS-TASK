# -*- coding: utf-8 -*-
"""Hostility classification.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/19aF8PLWO8k3K4vyZBUGWYBinw31Y4ORW
"""

import pandas as pd
from pandas import read_excel
import numpy as np
import re
from re import sub
import multiprocessing
# from unidecode import unidecode
import os
from time import time
import tensorflow as tf
import keras
from keras.models import Sequential
from keras.layers import LSTM,Dense,Dropout,Activation,Embedding,Flatten,Bidirectional,MaxPooling2D, Conv1D, MaxPooling1D
from keras.optimizers import SGD,Adam
from keras import regularizers
from keras.preprocessing.text import Tokenizer

#from keras.utils.np_utils import to_categorical
import h5py
import csv
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.model_selection import StratifiedKFold

def text_to_word_list(text):
    text = text.split()
    return text

def replace_strings(text):
    emoji_pattern = re.compile("["
                           u"\U0001F600-\U0001F64F"  # emoticons
                           u"\U0001F300-\U0001F5FF"  # symbols & pictographs
                           u"\U0001F680-\U0001F6FF"  # transport & map symbols
                           u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           u"\U00002702-\U000027B0"
                           u"\U000024C2-\U0001F251"
                           u"\u00C0-\u017F"          #latin
                           u"\u2000-\u206F"          #generalPunctuations

                           "]+", flags=re.UNICODE)
    english_pattern=re.compile('[a-zA-Z0-9]+', flags=re.I)
    #latin_pattern=re.compile('[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*',)

    text=emoji_pattern.sub(r'', text)
    text=english_pattern.sub(r'', text)

    return text

def remove_punctuations(my_str):
    # define punctuation
    punctuations = '''````£|¢|Ñ+-*/=EROero৳০১২৩৪৫৬৭৮৯012–34567•89।!()-[]{};:'"“\’,<>./?@#$%^&*_~‘—॥”‰⚽️✌�￰৷￰'''

    no_punct = ""
    for char in my_str:
        if char not in punctuations:
            no_punct = no_punct + char

    # display the unpunctuated string
    return no_punct



def joining(text):
    out=' '.join(text)
    return out

def preprocessing(text):
    out=remove_punctuations(replace_strings(text))
    return out

df=pd.read_excel('/content/FB Comments.xlsx')
display(df)

newdf = df.dropna()

newdf

newdf['emotion'] = newdf['emotion'].str.replace(' ', '')

sns.countplot(newdf['Labels Set']);

unique_values = newdf['Labels Set'].unique()
mapping = {value: index for index, value in enumerate(unique_values)}
newdf['Labels Set'] = newdf['Labels Set'].replace(mapping)

newdf['Fbcomments'] = newdf.Fbcomments.apply(lambda x: preprocessing(str(x)))

newdf.reset_index(drop=True, inplace=True)

train1, test1 = train_test_split(newdf,random_state=69, test_size=0.2)
training_sentences = []
testing_sentences = []



train_sentences=train1['Fbcomments'].values
train_labels=train1['Labels Set'].values
for i in range(train_sentences.shape[0]):
    #print(train_sentences[i])
    x=str(train_sentences[i])
    training_sentences.append(x)

training_sentences=np.array(training_sentences)





test_sentences=test1['Fbcomments'].values
test_labels=test1['Labels Set'].values

for i in range(test_sentences.shape[0]):
    x=str(test_sentences[i])
    testing_sentences.append(x)

testing_sentences=np.array(testing_sentences)


train_labels=keras.utils.to_categorical(train_labels)


test_labels=keras.utils.to_categorical(test_labels)
print("Training Set Length: "+str(len(train1)))
print("Testing Set Length: "+str(len(test1)))
print("training_sentences shape: "+str(training_sentences.shape))
print("testing_sentences shape: "+str(testing_sentences.shape))
print("train_labels shape: "+str(train_labels.shape))
print("test_labels shape: "+str(test_labels.shape))

print(training_sentences[1])
print(train_labels[0])

vocab_size = 25000
embedding_dim = 300
max_length = 100
trunc_type='post'
oov_tok = "<OOV>"

print(training_sentences.shape)
print(train_labels.shape)

from keras.utils import pad_sequences

tf.keras.utils.pad_sequences(
    train_labels,
    maxlen=None,
    dtype='int32',
    padding='pre',
    truncating='pre',
    value=0.0
)

tokenizer = Tokenizer(num_words = vocab_size, oov_token=oov_tok)
tokenizer.fit_on_texts(training_sentences)
word_index = tokenizer.word_index
print(len(word_index))
print("Word index length:"+str(len(tokenizer.word_index)))
sequences = tokenizer.texts_to_sequences(training_sentences)
padded = pad_sequences(sequences,maxlen=max_length, truncating=trunc_type)


test_sequences = tokenizer.texts_to_sequences(testing_sentences)
testing_padded = pad_sequences(test_sequences,maxlen=max_length)

print("Sentence :--> \n")
print(training_sentences[2]+"\n")
print("Sentence Tokenized and Converted into Sequence :--> \n")
print(str(sequences[2])+"\n")
print("After Padding the Sequence with padding length 100 :--> \n")
print(padded[2])

print("Padded shape(training): "+str(padded.shape))
print("Padded shape(testing): "+str(testing_padded.shape))

with tf.device('/gpu:0'):
   embedding_dim = 8

model = Sequential()
model.add(Embedding(input_dim=vocab_size,
                           output_dim=embedding_dim,
                           input_length=100))
model.add(Bidirectional(LSTM(256, return_sequences = True)))
model.add(Bidirectional(LSTM(256)))

model.add(Dense(6, activation='sigmoid'))

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
model.summary()

x_val=testing_padded
y_val=test_labels

history=model.fit(x=padded,y=train_labels,epochs=5,batch_size=64,validation_data=(x_val,y_val))

print(history.history.keys())
loss = history.history['loss']
val_loss = history.history['val_loss']
plt.plot(loss)
plt.plot(val_loss)
plt.title('model loss')
plt.ylabel('loss')
plt.xlabel('epoch')
plt.legend(['loss', 'val_loss'])
plt.show()

accuracy = history.history['accuracy']
val_accuracy= history.history['val_accuracy']
plt.plot(accuracy)
plt.plot(val_accuracy)
plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['accuracy', 'val_accuracy'])
plt.show()

from sklearn.preprocessing import LabelBinarizer

label_binarizer = LabelBinarizer()
test_labels_binarized = label_binarizer.fit_transform(test_labels)

class_names = ['trolling', 'non-hostile', 'offensive', 'misinformation', 'hate', 'harassment']

from sklearn.metrics import classification_report

predictions = model.predict(testing_padded)

predicted_labels = (predictions > 0.5).astype(int)

print(classification_report(test_labels, predicted_labels, target_names=class_names))

from sklearn.metrics import confusion_matrix
from sklearn.metrics import precision_score, recall_score, f1_score
import matplotlib.pyplot as plt

# Calculate precision, recall, and F1-score for each class
precision = precision_score(test_labels, predicted_labels, average=None)
recall = recall_score(test_labels, predicted_labels, average=None)
f1 = f1_score(test_labels, predicted_labels, average=None)

# Plot metrics for each class
plt.figure(figsize=(10, 6))
plt.bar(np.arange(len(class_names)) - 0.2, precision, width=0.2, label='Precision')
plt.bar(np.arange(len(class_names)), recall, width=0.2, label='Recall')
plt.bar(np.arange(len(class_names)) + 0.2, f1, width=0.2, label='F1-score')
plt.xticks(np.arange(len(class_names)), class_names, rotation=45, ha='right')
plt.xlabel('Class')
plt.ylabel('Score')
plt.title('Performance Metrics for Multi-label Classification')
plt.legend()
plt.tight_layout()
plt.show()

# Calculate confusion matrices for each class
conf_matrices = []
for i in range(len(class_names)):
    conf_matrices.append(confusion_matrix(test_labels[:, i], predicted_labels[:, i]))

# Plot confusion matrices
plt.figure(figsize=(15, 8))
for i, class_name in enumerate(class_names):
    plt.subplot(2, 3, i + 1)
    sns.heatmap(conf_matrices[i], annot=True, fmt="d", cmap="Greens",
                xticklabels=['Negative', 'Positive'], yticklabels=['Negative', 'Positive'])
    plt.title(f"Confusion Matrix for {class_name}")
    plt.xlabel("Predicted Labels")
    plt.ylabel("True Labels")
plt.tight_layout()
plt.show()