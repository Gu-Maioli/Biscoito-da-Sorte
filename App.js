import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: true,
      frase: frases[0],
      btnTxt: "Quebrar Biscoito!",
    };
  }

  chooseRandom() {
    return frases[Math.floor(Math.random() * (frases.length - 1 + 1)) + 1];
  }

  clickButton() {
    this.setState({
      valor: this.state.valor ? false : true,
      frase: this.state.frase == "" ? this.chooseRandom() : "",
      btnTxt:
        this.state.btnTxt == "Quebrar Biscoito!"
          ? "Desquebrar!"
          : "Quebrar Biscoito!",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.valor ? (
          <Image
            source={require("./assets/biscoito.png")}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("./assets/biscoitoQuebrado.png")}
            style={styles.image}
          />
        )}
        <TouchableOpacity
          onPress={() => this.clickButton()}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>{this.state.btnTxt}</Text>
        </TouchableOpacity>
        <Text style={styles.textoGeral}>{this.state.frase}</Text>
      </View>
    );
  }
}

const frases = [
  "",
  "A vida trará coisas boas se tiver paciência",
  "A maior de todas as torres começa no solo",
  "Não há que ser forte. Há que ser flexível",
  "A juventude não é uma época da vida, é um estado de espírito",
  "O bom-senso vale mais do que muito conhecimento",
];

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginTop: 20,
  },
  imageHidden: {
    display: "none",
    width: 350,
    height: 350,
    marginTop: 20,
  },
  container: {
    marginTop: 40,
  },
  textoGeral: {
    fontSize: 20,
    color: "#00FF7F",
    textAlign: "center",
    fontWeight: "bold",
  },
  botao: {
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: "#F5DEB3",
    alignItems: "center",
    margin: 20,
    justifyContent: "center",
    height: 50,
    borderColor: "#F4A460",
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
