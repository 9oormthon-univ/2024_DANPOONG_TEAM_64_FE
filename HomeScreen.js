import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Countdown from "react-countdown";
import MainLogo from "./assets/홈스크린/주식 한입 작은버전.svg";
import GoogleLogo from "./assets/홈스크린/구글.svg";
import AppleLogo from "./assets/홈스크린/애플.svg";
import NvidiaLogo from "./assets/홈스크린/엔비디아.svg";
import MsLogo from "./assets/홈스크린/윈도우.svg";

const HomeScreen = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const stocks = [
    { id: "1", name: "애플", price: "$228.02", logo: AppleLogo },
    { id: "2", name: "엔비디아", price: "$228.02", logo: NvidiaLogo },
    { id: "3", name: "마이크로소프트", price: "$228.02", logo: MsLogo },
    { id: "4", name: "구글", price: "$228.02", logo: GoogleLogo },
  ];

  const renderer = ({ hours, minutes, seconds }) => (
    <Text style={styles.timer}>{`${hours}:${minutes}:${seconds}`}</Text>
  );

  const handleStockSelect = (id) => {
    setSelectedStock(id);
    alert(`You selected ${id}!`);
  };

  return (
    <View style={styles.container}>
      <MainLogo width={100} height={40} />
      <Text style={styles.greeting}>지니님,{"\n"}안녕하세요!</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>7 / 10</Text>
        <Countdown date={Date.now() + 6 * 60 * 60 * 1000} renderer={renderer} />
      </View>
      <Text style={styles.subTitle}>주식을 골라주세요!</Text>
      <FlatList
        data={stocks}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.stockButton}
            onPress={() => handleStockSelect(item.name)}
          >
            <item.logo width={50} height={50} />
            <Text style={styles.stockName}>{item.name}</Text>
            <Text style={styles.stockPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  greeting: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 35,
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  timer: {
    fontSize: 18,
    color: "#FF3B30",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  stockButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  stockLogo: {
    fontSize: 32,
    marginBottom: 10,
  },
  stockName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stockPrice: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
