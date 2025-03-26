import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'; // Eye icon
import Icons from 'react-native-vector-icons/AntDesign'; // Back arrow icon

const SignInScreen = ({ navigation }) => {
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
                <Text style={styles.title}>SIGN IN</Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email" 
                        placeholderTextColor="gray" 
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            placeholder="Password"
                            placeholderTextColor="gray"
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Icon name={passwordVisible ? "eye" : "eye-with-line"} size={22} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Forgot Password (Closer to Password Input) */}
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotText}>Forgotten your password?</Text>
                </TouchableOpacity>

                {/* Sign In Button */}
                <TouchableOpacity style={styles.signinButton}>
                    <Text style={styles.signinText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            {/* Sign Up Navigation (Moved to Bottom) */}
            <TouchableOpacity style={styles.signupNavigation}>
                <Text style={styles.signupText}>Don't have an account?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
        bottom:-30,
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
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 40,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 50, // Reduce space between inputs
    },
    label: {
        fontSize: 16, // Slightly bigger
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 15, // Less space between label and input
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
    forgotPassword: {
        alignSelf: 'flex-start',
        marginTop: -30, // Closer to password input
    },
    forgotText: {
        color: '#FFF',
        fontSize: 14,
    },
    signinButton: {
        backgroundColor: '#FEDC62',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginTop:50,
    },
    signinText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#184F78',
    },
    signupNavigation: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        width: '80%',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: 100, // Moves to the bottom
    },
    signupText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default SignInScreen;
