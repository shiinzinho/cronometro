import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/images/crono.png')}
      />
      <Text style={styles.timer}>00:00:00</Text>
      <View style={styles.btnArea} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTexto}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTexto}>Limpar</Text>
      </TouchableOpacity>
      <View style={styles.areaTempo}>
        <Text style={styles.textCorrida}>
          Ultimo Tempo: 00:00:00
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

  },
  areaTempo: {

  },
  textCorrida: {

  },
  timer: {

  },
  btn: {

  },
  btnTexto: {

  },
  btnArea: {

  }
});

export default App;