/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import SearchPage from './SearchPage';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});

class HelloWorld extends Component {
    render() {
        return <Text style={styles.text}>Hello World (Again)</Text>;
    }
}

class PropertyFinderApp extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: SearchPage,
                }}
            />
        );
    }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
