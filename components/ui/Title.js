import { Text, StyleSheet } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
