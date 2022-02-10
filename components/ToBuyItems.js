import { StyleSheet, View } from "react-native";
import React from "react";
import ItemText from "./ItemText";
import colors from "../app/config/colors";

export default function ToBuyItems({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <ItemText>{item.text}</ItemText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  item: {
    paddingLeft: 20,
    marginTop: 20,
    backgroundColor: colors.white,
    padding: 7,
    borderRadius: 12,
    borderColor: colors.veryLightGrey,
    borderWidth: 1,
  },
});
