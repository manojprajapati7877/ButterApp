import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Checkbox, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked); // Toggle the state when checkbox is pressed
  };
  const handleLogin = () => {
    navigation.navigate("HomeTabs");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/4957136.jpg")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <TextInput
          label="Email"
          value={formData.username}
          onChangeText={(text) => handleInputChange("username", text)}
          style={[styles.input, { backgroundColor: "transparent" }]}
          autoCompleteType="email"
          mode="outlined"
          theme={{ colors: { primary: "rgba(66, 200, 183, 0.9255)" } }}
        />
        <TextInput
          label="Password"
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          style={[styles.input, { backgroundColor: "transparent" }]}
          secureTextEntry={!showPassword}
          mode="outlined"
          theme={{ colors: { primary: "rgba(66, 200, 183, 0.9255)" } }}
          right={
            <TextInput.Icon
              name={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
              icon={showPassword ? "eye" : "eye-off"}
            />
          }
        />
        <Checkbox.Item
          label="I agree to all the statements in Terms of Services."
          status={isChecked ? "checked" : "unchecked"}
          onPress={handleCheckboxToggle}
          style={styles.checkbox}
          theme={{ colors: { primary: "rgba(66, 200, 183, 0.9255)" } }}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          loading={isLoading}
          disabled={isLoading}
          style={styles.button}
          theme={{ colors: { primary: "rgba(66, 200, 183, 0.9255)" } }}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  formContainer: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: -190,
  },
  image: {
    width: 390,
    height: 390,
  },
  input: {
    marginBottom: 10,
    width: "100%",
  },
  checkbox: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    height: 50,
    padding: 5,
  },
});

export default LoginScreen;
