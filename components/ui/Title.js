import { Text, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default Title;
