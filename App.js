import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Item de la lista" style={styles.input} />
        <Button title="BOTON" />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Item 1</Text>
        </View>        
        <View style={styles.textContainer}>  
            <Text style={styles.text}>Item 2</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Item 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    borderColor: "violet",
    borderWidth: 5,
  },
  textContainer: {    
    borderColor: "pink",
    borderWidth: 5,
    margin: 10,
    width: "90%",
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontSize: 24,   
    fontWeight: "bold",     
  },
});
