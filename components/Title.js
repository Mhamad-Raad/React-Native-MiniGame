import { Text, StyleSheet } from 'react-native';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ddb52f',
    padding: 12,
    borderWidth: 2,
    borderColor: '#ddb52f',
  },
});

export default Title;
