import { StyleSheet, Text, View } from "react-native";

export default function Balance({ gastos, saldo }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.itemTittle}>Saldo</Text>
          <View style={styles.content}>
            <Text style={styles.currency}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
          </View>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemTittle}>Gastos</Text>
          <View style={styles.content}>
            <Text style={styles.currency}>R$</Text>
            <Text style={styles.expanses}>-{gastos}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -18,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTittle: {
    fontSize: 20,
    color: "#DADADA",
  },
  expanses: {
    fontSize: 22,
    color: "red",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currency: {
    color: "#DADADA",
    marginRight: 5,
  },
  balance: {
    fontSize: 22,
    color: "#2ECC71",
  },
});
