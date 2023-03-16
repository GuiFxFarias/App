import { StatusBar, StyleSheet, Text, View, FlatList } from "react-native";
import Actions from "../../layout/Actions";
import Balance from "../../layout/Balance";
import Header from "../../layout/Header";
import Movements from "../../layout/Movements";

const list = [
  {
    id: 1,
    label: "Boleto de luz",
    value: "300.40",
    date: "15/03/2023",
    type: 0, // Despesas
  },
  {
    id: 2,
    label: "Fone Bluetooth",
    value: "140.90",
    date: "11/03/2023",
    type: 0, // Despesas
  },
  {
    id: 3,
    label: "Salário",
    value: "5.500,00",
    date: "05/03/2023",
    type: 1, // Receitas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={"Guilherme Farias"} />

      <Balance saldo="9,323.70" gastos="442.10" />

      <Actions />

      <Text style={styles.tittle}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  tittle: {
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DADADA",
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  list: {
    marginLeft: 14,
    marginRight: 14,
  },
});
