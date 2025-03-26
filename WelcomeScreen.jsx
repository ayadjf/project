import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.logotxt}>κουί<Text style={styles.highlight}>ζ</Text>u</Text>
            <Text style={styles.subtitle}>Test your knowledge, quiz your way to the top!</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, padding: 20, backgroundColor: '#fff', bottom: -30
    },
    logo: {
        width: 264,
        height: 273,
        alignSelf:'center',
        right:20,
    marginTop: 100,  
    marginRight:-50,
    },
   
    subtitle: {
      fontSize: 24,
      fontFamily: 'Roboto', 
      color: '#184F78', // darkblue text
      fontWeight:'semibold',
        textAlign: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'flex-end' ,
         flexDirection: 'row',    
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 120,
        marginHorizontal: 10,
        alignSelf:'center',

    },
    button: {
        backgroundColor: '#184F78',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginHorizontal: 15,
    },
    highlight: {
      color: '#FEDC62', // Yellow 'z'
    },
    logotxt: {
      fontSize: 64,
      fontFamily: 'RobotoSerif-BoldItalic', // Ensure this font is properly linked
      color: '#184F78', // darkblue text
      fontWeight:'bold',
      marginTop: 10,
      alignSelf:'center',

    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;

