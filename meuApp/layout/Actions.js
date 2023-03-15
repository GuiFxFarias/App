import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/webpack-config";

export default function Actions() {
  return (
    <>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name="addFolder" size={26} color="#000"/>
            </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
