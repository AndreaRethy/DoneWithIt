import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

export default function ListingDetailsScreen(params) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/chair.jpg")}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>White chair for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/chair.jpg")}
                        title="Mosh"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    },
    title: {
        marginBottom: 7,
        fontSize: 24,
        fontWeight: "500",
    },
})
