import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        paddingLeft: 15,
        backgroundColor: 'black',
        elevation: 1,
        alignItems: 'flex-start'
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,

    }
});

export default Header;
