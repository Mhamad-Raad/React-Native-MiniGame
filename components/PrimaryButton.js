import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('PrimaryButton pressed');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    margin: 4,
    borderRadius: 8,
  },
  buttonInnerContainer: {
    backgroundColor: '#4e0329',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
