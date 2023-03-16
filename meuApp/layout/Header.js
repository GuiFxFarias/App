import "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 15
  : 30;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animatable.Text style={styles.userName} animation="fadeInLeft">
          {name}
        </Animatable.Text>
        <Animatable.View animation="fadeInRight">
          <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
            <Feather name="user" size={30} color="white" />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    padding: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44 / 2,
  },
});
