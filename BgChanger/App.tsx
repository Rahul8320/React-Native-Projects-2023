import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [rectOne, setRectOne] = useState('#FF6666');
  const [rectTwo, setRectTwo] = useState('#8D3DAF');
  const [rectThree, setRectThree] = useState('#35BDD0');
  const [rectFourth, setRectFourth] = useState('#5A20CB');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleChanges = () => {
    const bgColor = generateColor();
    setRandomBackground(bgColor);
    const rect1Color = generateColor();
    setRectOne(rect1Color);
    const rect2Color = generateColor();
    setRectTwo(rect2Color);
    const rect3Color = generateColor();
    setRectThree(rect3Color);
    const rect4Color = generateColor();
    setRectFourth(rect4Color);

    Snackbar.show({
      text: 'Color Changed',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        {/* 1st rect */}
        <View
          style={[styles.rect, styles.rectOne, {backgroundColor: rectOne}]}
        />

        {/* 2nd rect  */}
        <View
          style={[styles.rect, styles.rectTwo, {backgroundColor: rectTwo}]}
        />

        {/* 3rd rect */}
        <View
          style={[styles.rect, styles.rectThree, {backgroundColor: rectThree}]}
        />

        {/* 1st circle */}
        <View
          style={[
            styles.circle,
            styles.circleOne,
            {backgroundColor: randomBackground},
          ]}
        />

        <TouchableOpacity onPress={handleChanges}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>

        {/* 4th rect  */}
        <View
          style={[
            styles.rect,
            styles.rectFourth,
            {backgroundColor: rectFourth},
          ]}
        />

        {/* 2nd circle  */}
        <View
          style={[
            styles.circle,
            styles.circleTwo,
            {backgroundColor: randomBackground},
          ]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6a1b4d',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionBtnTxt: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  circleOne: {
    position: 'absolute',
    top: 90,
    left: 125,
  },
  circleTwo: {
    position: 'absolute',
    bottom: 115,
    left: 115,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect: {
    width: 100,
    height: 100,
    margin: 5,
    elevation: 5,
  },
  rectFourth: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: 110,
    left: 110,
  },
  rectOne: {
    position: 'absolute',
    top: 50,
    left: 35,
  },
  rectThree: {
    position: 'absolute',
    top: 165,
    left: 105,
  },
  rectTwo: {
    position: 'absolute',
    top: 30,
    right: 45,
  },
});

export default App;
