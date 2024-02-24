import React from "react";
import { Link } from '@react-navigation/native';
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";


function BottomNav(): JSX.Element {
    return (
    <View style={styles.container}>
        <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}>
                {/* <Image source={require('../../../assets/icons/discover.png')} /> */}
                {/* <Text style={styles.tabLabel}>Home</Text> */}
                {/* <Link  style={styles.tabLabel} href="/Home">Home</Link> */}
                <Link to={{ screen: 'Home', params: { id: 'jane' } } } style={styles.tabLabel}>Home</Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Link to={{ screen: 'Detail', params: { id: 'jane' } }} style={styles.tabLabel}>Pokemon</Link>
                {/* <Image source={require('../../../assets/icons/messages.png')} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Link to={{ screen: 'Favorite', params: { id: 'jane' } }} style={styles.tabLabel}>Favorite</Link>
                {/* <Image source={require('../../../assets/icons/payment.png')} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Link to={{ screen: 'Profile', params: { id: 'jane' } }} style={styles.tabLabel}>Profile</Link>
                {/* <Image source={require('../../../assets/icons/settings.png')} /> */}
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        bottom: 0,
        position: 'absolute'
    },
    tabContainer: {
        ...Gs.flexRow,
        ...Gs.justifyBetween,
        width: '100%',
        paddingHorizontal: 10,
    },
    activeTab: {
        ...Gs.flexRow,
        ...Gs.itemsCenter,
        ...Gs.cornerXS,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: colors.secondary,
    },
    tab: {
        padding: 8,
    },
    tabLabel: {
        ...Gs.font600,
        ...Gs.textPrimary,
        marginLeft: 8,
    }
});

export default BottomNav;