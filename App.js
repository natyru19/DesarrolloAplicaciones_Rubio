import {
  StyleSheet,
} from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return <Home />
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 30,
    backgroundColor: "#133A7C",
    height: "100%",
  }
});
