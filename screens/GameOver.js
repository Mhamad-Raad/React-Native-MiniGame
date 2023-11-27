import { View, Text, StyleSheet, Image } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from './../components/ui/PrimaryButton';

import Colors from '../constants/colors';

const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over!</Title>
      <View style={styles.iamgeContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iamgeContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOver;
