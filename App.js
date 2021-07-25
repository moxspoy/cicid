import type {Node} from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [counter, setCounter] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const increment = () => {
    setCounter(counter => setCounter(counter + 1));
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
            styles.title,
          ]}>
          <CustomText size={20}>
            Penghitung Jumlah Pengunjung Vaksin Covid
          </CustomText>
          <CustomText>
            {'saat ini terdapat '}
            <CustomText testID={'counter'}>{`${counter}`}</CustomText>
          </CustomText>
          <Button onPress={increment} text={'TAMBAH'} />
          <Button onPress={reset} text={'RESET'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Button = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <CustomText color={Colors.white} center>
        {text}
      </CustomText>
    </View>
  </TouchableOpacity>
);

const CustomText = ({
  children,
  size = 16,
  color = 'black',
  center,
  ...props
}) => (
  <Text
    style={[
      styles.sectionTitle,
      {
        fontSize: size,
        color,
        textAlign: center ? 'center' : 'left',
      },
    ]}
    {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#04ba5b',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    padding: 24,
    paddingTop: 80,
  },
});

export default App;
