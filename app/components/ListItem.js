import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

export default function ListItem({title, subTitle, image}) {
    return (<View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    detailsContainer: {

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});