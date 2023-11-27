import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import Title from '../components/ui/Title';

import Colors from '../constants/colors';

const GameOver = () => {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over!</Title>
      <View style={styles.iamgeContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text>Your Phone needed x rounds to guess the number y.</Text>
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
});

export default GameOver;
