import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacityButton,
  Button,
} from "react-native";
import TitleImage from "./assets/로그인/주식 한입.svg";
import KakakoImage from "./assets/로그인/카카오톡.svg";
import { login, logout, getProfile } from "@react-native-seoul/kakao-login";
export default function LoginScreen({ navigation }) {
  const handleLogin = async () => {
    try {
      const result = await login();
      console.log("로그인 성공:", result);
      const profile = await getProfile();
      console.log("프로필 정보:", profile);
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert("로그아웃 완료");
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };
  return (
    <View style={styles.container}>
      <TitleImage width={200} height={125} />
      {/* 설명 */}
      <Text style={styles.subtitle}>카카오로 로그인/회원가입 하기</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <KakakoImage width={50} height={50} />
      </TouchableOpacity>
      <View>
        <Button title="카카오 로그인" onPress={handleLogin} />
        <Button title="카카오 로그아웃" onPress={handleLogout} />
      </View>
      <Text style={styles.buttonText}>카카오톡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // 배경색 흰색
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0056FF", // 파란색
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333", // 어두운 회색
    margin: 30,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",

    padding: 10,
    borderRadius: 8,
  },
  buttonImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#000", // 검정색
  },
});
