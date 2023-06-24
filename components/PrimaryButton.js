import { Pressable, StyleSheet, Text } from "react-native";

const PrimaryButton = ({ title }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#d66613" : "#FF6C00",
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    width: "100%",
    borderRadius: 50,
    paddingTop: 16,
    paddingBottom: 16,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
