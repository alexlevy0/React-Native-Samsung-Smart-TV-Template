import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Components
import Button from './components/Button';

// Modules
import SpatialNavigation from 'react-js-spatial-navigation';

function App() {
  const [keyCode, setKeyCode] = useState('');

  const keyHandler = (key) => {
    console.log(key.keyCode);
    setKeyCode(key.keyCode);
  };

  // this is just a test to render more buttons
  const renderItems = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(<Button key={index} />);
    }
    return array;
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your 'Samsung Smart TV' app!
      </Text>
      <Text style={styles.text}>
        Use the remote buttons to see the keycode: {keyCode}
      </Text>
      <View style={styles.subContainer}>
        <SpatialNavigation />
        {renderItems()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  subContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25,
  },
  text: {
    fontSize: 25,
  },
});

export default App;
