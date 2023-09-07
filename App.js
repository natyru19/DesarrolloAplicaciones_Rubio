import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
  };

  const renderListItem = ({item}) => (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.value}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nuevo Item"
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="Agregar" onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={ renderListItem }
          keyExtractor={item => item.id}         
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,    
    padding: 30,    
    backgroundColor: "#D8C4B6",
    height: "100%",
    
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,    
    width: 200,
    fontSize: 20,
    paddingLeft: 12,
  },
  listContainer: {      
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4F709C",    
    borderWidth: 5,
    borderRadius: 15,    
  },
  textContainer: {    
    borderColor: "#213555",
    backgroundColor: "#4F709C",
    borderWidth: 5,
    margin: 10,
    width: "90%",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,    
  },
  text: {    
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
