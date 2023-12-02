import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { useState } from 'react';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from './../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
  const [enterNumber, setEnterNumber] = useState('');

  const numberInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnterNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnterNumber('');
  };
  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 440 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
