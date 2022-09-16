import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View style={[styles.container,isDarkMode ? styles.darkMode : styles.lightMode]}>
      <TextInput 
        style={styles.input}
        value={text} 
        onChangeText={val => setText(val)} 
        placeholder="Enter Your text"
      />
      <Text>Your Input : {text}</Text>
      <TouchableHighlight 
        style={styles.button} 
      >
      <Button 
        color='black'
        title="Clear" onPress={() => setText('')} 
      />
      </TouchableHighlight>
      <Switch  
        trackColor={{ false: "#767577", true: "FA7070" }}
        thumbColor={isDarkMode ? "#000" : "#fff"}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
        value={isDarkMode}
        />
    </View>
  );
}

const styles =  StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  darkMode:{
    backgroundColor: '#181818',
  },
  lightMode:{
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 10,
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#EFEFEF',
    color: '#fff',
    borderRadius: 10,
  }
});
