import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const instructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
  },
});

export default instructionText;
