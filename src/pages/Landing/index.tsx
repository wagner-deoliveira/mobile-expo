import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from "react-native-gesture-handler";

import styles from './styles';

import  landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClasses from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
    const {navigate} = useNavigation();
    
    function handleNavigationToGiveClasses() {
        navigate('GiveClasses')
    }
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>What are you searching for?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>

                <RectButton
                    onPress={handleNavigationToGiveClasses}
                    style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses}/>
                    <Text style={styles.buttonText}>Give classes</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}> Total connections {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
        );
}

export default Landing;