import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("HomeStack", { screen: "Details" })} // Điều hướng đến Details trong HomeStack
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Go to details
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E0CFFF',
  },
  buttonLabel: {
    color: '#000',
  },
});

export default HomeScreen;