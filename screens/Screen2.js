import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from 'react-native';

const DivisionInput = ({ label, value, onChangeText, onFocus }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
      placeholder="Ingrese un número"
      onFocus={onFocus}
    />
  </View>
);

export default function Screen2() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleDivide = () => {
    Keyboard.dismiss(); // Oculta el teclado
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (num2 === 0) {
      if (num1 === 0) {
        setResult('INDETERMINACIÓN');
      } else {
        setResult('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResult((num1 / num2).toFixed(2).toString());
    }
  };

  const handleFocus = () => {
    // Si el teclado está oculto y se vuelve a enfocar el input, se muestra el teclado
    Keyboard.addListener('keyboardDidShow', () => {});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario</Text>
      <DivisionInput
        label="Campo número 1"
        value={number1}
        onChangeText={setNumber1}
        onFocus={handleFocus}
      />
      <DivisionInput
        label="Campo número 2"
        value={number2}
        onChangeText={setNumber2}
        onFocus={handleFocus}
      />
      <Button title="Dividir" onPress={handleDivide} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#555',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});
