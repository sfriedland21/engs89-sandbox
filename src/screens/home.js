import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { scale, moderateScale, verticalScale } from '../scale-util';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fun!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Place call</Text>
      </TouchableOpacity>
    </View>
  );
};

// borrowed or adapted from AccesSOS text-911-mobile-app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: scale(26),
    fontWeight: '700',
    paddingTop: verticalScale(110),
    paddingBottom: verticalScale(30),
    paddingHorizontal: moderateScale(24),
  },
  button: {
    marginBottom: verticalScale(152),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(8),
    height: verticalScale(52),
    width: moderateScale(150, 1.5),
    backgroundColor: '#DF4154',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Avenir Next',
    fontSize: scale(15),
  },
});

export default Home;
