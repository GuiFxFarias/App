import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Animatable from "react-native-animatable";

export default function Movements({ data }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
          <Text  style={styles.label}>{data.label}</Text>
          {show === true ? (
            <Animatable.Text animation='lightSpeedIn' style={data.type === 1 ? styles.value : styles.expanse}>
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </Animatable.Text>
          ) : (
            <Animatable.View animation='lightSpeedIn' style={styles.skeleton}></Animatable.View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold",
  },
  expanse: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 15,
    backgroundColor: "#DADADA",
    borderRadius: 8,
  },
});
