import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const EventCard = ({ event, navigation }) => (
    <TouchableOpacity 
        style={styles.card} 
        onPress={() => navigation.navigate('Details', { event })}
    >
        <Image source={event.poster} style={styles.image} />
        <View style={styles.cardContent}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.date}>{event.date}</Text>
            <Text style={styles.location}>{event.location}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        overflow: 'hidden',
        width: 200,
        marginBottom: 3,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    date: {
        fontSize: 12,
        color: '#777',
        marginTop: 5,
    },
    location: {
        fontSize: 12,
        color: '#777',
        marginTop: 3,
    },
});

export default EventCard;
