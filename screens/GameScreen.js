import { View, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>The Game Screen!</Title>
      <View>
        <Text>Higher or Lowe?</Text>
      </View>
      <Text>LOG ROUNDS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },
});

export default GameScreen;
