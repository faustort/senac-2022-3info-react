import { StyleSheet, Text, View } from "react-native";
import { styles } from "../lib/style";
export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>👼Aqui é o Login</Text>
      <Text style={styles.h1}>👼Aqui é o Login</Text>
      <Text style={styles.h1}>👼Aqui é o Login</Text>
      <Text style={styles.h1}>👼Aqui é o Login</Text>
      <Text style={{ ...styles.h1, ...styles.red }}>👼Aqui é o Login</Text>
    </View>
  );
};
