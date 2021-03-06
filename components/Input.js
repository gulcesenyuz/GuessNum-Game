import React from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


const Input = props => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />

};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 15,


    }
});

export default Input;