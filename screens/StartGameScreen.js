import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from './../components/ui/Title';

const StartGameScreen = ({ onPickNumber }) => {
  const [enterNumber, setEnterNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnterNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnterNumber('');
  };

  const confirmInputHandler = () => {
    console.log(enterNumber);
    const chosenNumber = parseInt(enterNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      console.log(chosenNumber);
      Alert.alert('Invalid Number', 'Number has to be between 0 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: () => resetInputHandler,
        },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    width: '80%',
  },
  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: Colors.accent500,
    color: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    fex: 1,
  },
});

export default StartGameScreen;
