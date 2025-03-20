import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import Icon component

const DetailsScreen = ({ route, navigation }) => {
    const { event } = route.params;
    const description = "This event offers a great opportunity to engage, learn, and connect with peers. Don’t miss out!";
    const rsvps = 52;

    // State to manage if RSVP has been confirmed
    const [isRSVPConfirmed, setIsRSVPConfirmed] = useState(false);

    const handleRSVP = () => {
        setIsRSVPConfirmed(true); // Disable the button after RSVP
        Alert.alert('RSVP Confirmed!');
    };

    return (
        <View style={styles.container}>
            {/* Back button with an icon */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}  // Go back to previous screen
            >
                <Icon name="arrow-back" size={25} color="#333" />
            </TouchableOpacity>

            <Text style={styles.detailsTitle}>{event.title}</Text>

            <View style={styles.card}>
                <Text style={styles.detailsText}><Text style={styles.label}>📅 Date:</Text> {event.date}</Text>
                <Text style={styles.detailsText}><Text style={styles.label}>📍 Location:</Text> {event.location}</Text>
                <Text style={styles.detailsText}><Text style={styles.label}>ℹ️ Description:</Text> {description}</Text>
                <Text style={styles.rsvpText}><Text style={styles.label}>👥 RSVP by:</Text> {rsvps} people</Text>
            </View>

            <TouchableOpacity
                style={[styles.rsvpButton, isRSVPConfirmed && styles.disabledButton]} // Apply disabled style if RSVP confirmed is pressed
                onPress={handleRSVP}
                disabled={isRSVPConfirmed} // Disable the button 
            >
                <Text style={styles.buttonText}>{isRSVPConfirmed ? 'RSVP Confirmed' : 'Confirm RSVP'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        elevation: 3,
    },
    detailsTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        elevation: 3,
        width: '100%',
        marginBottom: 20,
    },
    detailsText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    rsvpText: {
        fontSize: 16,
        color: '#e63946',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        color: 'black',
    },
    rsvpButton: {
        backgroundColor: '#e63946',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowRadius: 5,
        elevation: 5,
    },
    disabledButton: {
        backgroundColor: '#b5b5b5', // Grey color for disabled button
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default DetailsScreen;
