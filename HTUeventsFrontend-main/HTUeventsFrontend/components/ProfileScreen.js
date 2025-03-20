import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Icon library for icons

const ProfileScreen = ({ navigation }) => {
    const user = {
        name: 'Johny Boi',
        studentId: '123456',
        email: 'johndoe@htu.edu',
    };

    const handleLogout = () => {
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>

            <View style={styles.card}>
                <Text style={styles.infoTitle}>Name</Text>
                <View style={styles.infoContainer}>
                    <Ionicons name="person" size={20} color="#333" />
                    <Text style={styles.infoText}>{user.name}</Text>
                </View>

                <Text style={styles.infoTitle}>Student ID</Text>
                <View style={styles.infoContainer}>
                    <Ionicons name="card" size={20} color="#333" />
                    <Text style={styles.infoText}>{user.studentId}</Text>
                </View>

                <Text style={styles.infoTitle}>Email</Text>
                <View style={styles.infoContainer}>
                    <Ionicons name="mail" size={20} color="#333" />
                    <Text style={styles.infoText}>{user.email}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 30,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
