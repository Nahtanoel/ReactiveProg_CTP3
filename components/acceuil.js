import React from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableNativeFeedbackBase } from 'react-native';
import Button from './button.jsx'


class Acceuil extends React.Component {




    render() {
        return (
            <View style={styles.view}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../assets/logo.jpg')} />
                </View>
                <View style={styles.container}>
                    <View style={styles.SignIn}>
                        <TextInput style={styles.textinput} placeholder="Votre nom" />
                        <Button color='red' title='SIGN UP' onPress={() => { }} />
                    </View>
                    <View style={styles.Search}>
                        <Button color='blue' title='SEARCH' onPress={() => { }} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text>ESGI M1 2023-2024</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%',
        resizeMode: "contain",

    },
    footer: {
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    textinput: {
        marginLeft: 'auto',
        borderColor: 'black',
        borderRadius: 10,
        marginRight: 'auto',
        borderWidth: 3,
        height: 50,
        width: '70%',
        backgroundColor: '#FFF',
        textAlign: 'center',
    },
    view: {
        backgroundColor: '#FFF',

    },
});

export default Acceuil;