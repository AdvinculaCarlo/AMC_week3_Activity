import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState();
  const [Age, onChangeAge] = React.useState();
  const [Address, onChangeAddress] = React.useState();
  const [School, onChangeSchool] = React.useState();
  const [Course, onChangeCourse] = React.useState();
  const [Email, onChangeEmail] = React.useState();
  const [number, onChangeNumber] = React.useState();
  const [AboutMe, onChangeAboutMe] = React.useState();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://iconape.com/wp-content/files/kx/369859/svg/name-logo-icon-png-svg.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name: "
            keyboardType="Text"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn2.iconfinder.com/data/icons/spa-solid-icons-1/48/25-1024.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={Age}
            placeholder="Age: "
            keyboardType="Text"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://pixsector.com/cache/2102b688/av924d89f198e4e084336.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={Address}
            placeholder="Address: "
            keyboardType="Text"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.vexels.com/media/users/3/224234/isolated/preview/ff7c525c1c3e1bef640644542001e1fd-online-school-logo.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={School}
            placeholder="School: "
            keyboardType="Text"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.freeiconspng.com/thumbs/courses-icon/courses-icon-28.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={Course}
            placeholder="Course: "
            keyboardType="Text"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.logolynx.com/images/logolynx/1f/1f9a438eaaf4f20885ecd763723479e7.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={Email}
            placeholder="Email"
            keyboardType="Text"
            numberOfLines={5}
            maxLength={50}
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://webstockreview.net/images/contact-icon-png-15.png',
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Contact No."
            keyboardType="number"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://clipground.com/images/about-me-icon-png-6.png',
            }}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={AboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: '100%',
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    margin: 12,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default TextInputExample;
