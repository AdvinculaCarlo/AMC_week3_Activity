import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState();
  const [Age, onChangeAge] = React.useState();
  const [Address, onChangeAddress] = React.useState();
  const [School, onChangeSchool] = React.useState();
  const [Course, onChangeCourse] = React.useState();
  const [Email, onChangeEmail] = React.useState();
  const [number, onChangeNumber] = React.useState();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name: "
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={Age}
          placeholder="Age: "
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={Address}
          placeholder="Address: "
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={School}
          placeholder="School: "
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={Course}
          placeholder="Course: "
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={Email}
          placeholder="Email"
          keyboardType="Text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contact No."
          keyboardType="Text"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;