import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../app/config/colors";

export default function AddList({ submitHandler }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textbox}
        onChangeText={(value) => setText(value)}
        placeholder="Add Item"
      />
      <TouchableOpacity onPress={() => submitHandler(text)}>
        <Ionicons name="add-circle-sharp" style={styles.addListIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:20,
  },

  addListIcon: {
    fontSize: 70,
    color: colors.secondary,
  },

  textbox: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
    fontSize: 20,
    width: "80%",
    height: 50,
    paddingLeft: 20,
  },
});
