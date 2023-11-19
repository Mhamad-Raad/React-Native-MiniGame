import { View, Text, StyleSheet } from 'react-native';

const GameScreen = () => {
  return (
    <View>
      <Text>The Game Screen!</Text>
      {/* GUESS */}
      <View>
        <Text>Higher or Lowe?</Text>
        {/* + - */}
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})

export default GameScreen;
