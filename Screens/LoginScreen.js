import { StyleSheet, Text, View } from "react-native";
import BackGroundIMG from "../components/BackGroundIMG";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <>
      <BackGroundIMG>
        <View style={styles.container}>
          <View style={styles.registerBg}>
            <Text style={styles.title}>Увійти</Text>
            <LoginForm />
          </View>
        </View>
      </BackGroundIMG>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
  },

  registerBg: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    flex: 0.6,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },

  title: {
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
  },
});
