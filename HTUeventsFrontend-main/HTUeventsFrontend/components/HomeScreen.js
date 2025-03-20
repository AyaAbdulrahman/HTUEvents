import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import EventCard from './EventCard';  // Import EventCard

const eventData = {
    academicCompetitions: [
        {
            id: '1',
            title: 'Math Marathon 2025 - First Round',
            date: '2025-03-11',
            location: 'Orange Village',
            poster: require('../images/posters/2.png'),
        },
    ],
    techInnovation: [
        {
            id: '2',
            title: 'DigiSkills Project - ICT Upskilling Program',
            date: '2025-01-12',
            location: 'W-003',
            poster: require('../images/posters/8.png'),
        },
        {
            id: '3',
            title: 'AI Path: Academia to Industry',
            date: '2025-01-08',
            location: 'Auditorium',
            poster: require('../images/posters/9.png'),
        },
        {
            id: '4',
            title: 'JODDB Innovation Hub',
            date: '2024-11-25',
            location: 'Auditorium',
            poster: require('../images/posters/31.png'),
        },
        {
            id: '5',
            title: 'AI Agents & Industrial Revolution 5.0',
            date: '2024-11-25',
            location: 'Auditorium',
            poster: require('../images/posters/3.png'),
        },
    ],
    htuEvents: [
        {
            id: '6',
            title: 'Design Thinking',
            date: '2024-12-07',
            location: 'Auditorium',
            poster: require('../images/posters/25.png'),
        },
        {
            id: '7',
            title: 'Creative Competition: Voices for Gaza',
            date: '2024-12-08',
            location: 'Auditorium',
            poster: require('../images/posters/36.png'),
        },
    ],
};

const CategorySection = ({ title, data, navigation }) => (
    <View style={styles.categoryContainer}>
        <Text style={styles.header}>{title}</Text>
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <EventCard event={item} navigation={navigation} />  // Use EventCard component
            )}
        />
    </View>
);

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 70 }}>
            <CategorySection title="Academic Competitions" data={eventData.academicCompetitions} navigation={navigation} />
            <CategorySection title="Tech & Innovation" data={eventData.techInnovation} navigation={navigation} />
            <CategorySection title="HTU Events" data={eventData.htuEvents} navigation={navigation} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        paddingTop: 50,
    },
    categoryContainer: {
        marginBottom: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15,
        marginBottom: 10,
    },
});

export default HomeScreen;
