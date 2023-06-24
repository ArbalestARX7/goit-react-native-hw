import { Text, View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const RegisterForm = () => {
  return (
    <View style={styles.inputForm}>
      <TextInput
        autoComplete="username"
        style={styles.input}
        placeholder="Логін"
      ></TextInput>
      <TextInput
        autoComplete="email"
        style={styles.input}
        placeholder="Адреса електронної пошти"
      ></TextInput>
      <TextInput
        autoComplete="password"
        style={styles.input}
        placeholder="Пароль"
      ></TextInput>
      <PrimaryButton title={"Зареєстуватися"} />
      <Text style={{ textAlign: "center", fontSize: 16 }}>
        Вже є акаунт? <Text>Увійти</Text>
      </Text>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  inputForm: {
    flex: 1,
    gap: 16,
    marginTop: 32,
    width: "100%",
  },

  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
  },
});
