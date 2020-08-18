import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Modules
import {Focusable} from 'react-js-spatial-navigation';

// Css to change the style of the Focusable Component
import '../css/app.css';

function Button() {
  const focus = () => {
    console.log('focus');
  };

  const onClick = () => {
    console.log('Clicked on item! ');
  };

  return (
    <Focusable className="active" onClickEnter={onClick} onFocus={focus}>
      <View style={styles.button}>
        <Text>Look I'm a button!</Text>
      </View>
    </Focusable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    width: 200,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
