import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/004/431/035/non_2x/mobile-apps-lettering-on-a-phone-with-a-bundle-of-apps-icons-vector.jpg' }} // Cambia la URL a la imagen que desees
      />
      <Button
        title="Acceder"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
