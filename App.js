import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TextInput,
  View,
  Alert,
  
} from "react-native";

import React, { useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [getText, setText] = useState("");

  const [getName, setName] = useState("");

 viewData();

  const ui = (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.text1}>AsyncStorage API</Text>

      <View style={styles.view1}>
        <Text style={styles.text2}>Name</Text>
        <TextInput style={styles.textinput1} onChangeText={setText} />

      </View>
      
      <Text style={styles.text2}>{getName}</Text>

      <Button title="Save Data" style={styles.button1} onPress={saveData} />
    </SafeAreaView>
  );

  async function saveData() {
    // Alert.alert("name", getText);
    await AsyncStorage.setItem('name', getText);
    const t = await AsyncStorage.getItem('name');
    Alert.alert("name", t);
  }


  async function viewData() {
    const name = await AsyncStorage.getItem('name');
    setName(name);
  }

  return ui;
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353b48",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 18,
    color: "#fff",
  },
  text2: {
    fontSize: 18,
    color: "#fff",
    marginRight: 10,
  },

  textinput1: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    borderRadius: 10,
    margin: 10,
  },
  button1: {
    width: 400,
    height: 40,
    margin: 10,
  },

  view1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
