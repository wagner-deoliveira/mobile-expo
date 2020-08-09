import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';
import  landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClasses from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>What are you searching for?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses}/>
                    <Text style={styles.buttonText}>Give classes</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.totalConnections}> Total connections {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
        );
}

export default Landing;