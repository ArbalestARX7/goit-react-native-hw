import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "../components/RegisterForm";
import BackGroundIMG from "../components/BackGroundIMG";
import AddSVG from "../Images/add.svg";

const RegistrationScreen = () => (
  <>
    <BackGroundIMG />
    <View style={styles.container}>
      <View style={styles.registerBg}>
        <View style={styles.photoPlace}>
          <AddSVG width={25} height={25} style={styles.addSVG} />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <RegisterForm />
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
  },

  registerBg: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    flex: 0.7,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    marginTop: 92,
  },

  photoPlace: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    borderRadius: 16,
  },

  addSVG: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
  },
});

export default RegistrationScreen;
