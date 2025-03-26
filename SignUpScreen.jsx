import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; // Eye icon
import Icons from 'react-native-vector-icons/AntDesign'; // Back arrow icon

const SignUpScreen = ({ navigation }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icons name="arrowleft" size={30} color="#184F78" />
            </TouchableOpacity>

            {/* Logo */}
            <Text style={styles.logoText}>κουί<Text style={styles.highlight}>ζ</Text>u</Text>

            {/* Form */}
            <View style={styles.formContainer}>
                <Text style={styles.title}>SIGN UP</Text>

                {/* Input Fields */}
                {["Name", "Email", "Group", "Promo"].map((label, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={styles.label}>{label}</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder={`Enter your ${label.toLowerCase()}`} 
                            placeholderTextColor="gray" 
                        />
                    </View>
                ))}

                {/* Password Field */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Enter your password"
                            placeholderTextColor="gray"
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Icon name={passwordVisible ? "eye" : "eye-with-line"} size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Buttons */}
                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.alreadyAccount} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.alreadyText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        bottom: -30
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
    },
    logoText: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#184F78',
        marginTop: 30,
    },
    highlight: {
        color: '#FEDC62',
    },
    formContainer: {
        width: '100%',
        backgroundColor: '#184F78',
        borderRadius: 50,
        padding: 30,
        alignItems: 'center',
        height: '100%',
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
        
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        color: 'black',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    passwordInput: {
        flex: 1,
        fontSize: 16,
        color: 'black',
    },
    signupButton: {
        backgroundColor: '#FEDC62',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        marginVertical: 10,
        alignItems: 'center',
    },
    signupText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#184F78',
    },
    alreadyAccount: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
    },
    alreadyText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default SignUpScreen;
