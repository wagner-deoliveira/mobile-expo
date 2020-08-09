import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import bgImage from '../../assets/images/give-classes-background.png'
import {RectButton} from "react-native-gesture-handler";

const GiveClasses: React.FC = () => {
    const {goBack} = useNavigation();
    
    function handleNavigateBack() {
        goBack();
    }
    return (
        <View style={styles.container}>
            <ImageBackground  resizeMode='contain' source={bgImage} style={styles.content}>
                <Text style={styles.title}>Do you wanna be a Proffy?</Text>
                <Text style={styles.description}>First, you need to register on our website</Text>
            </ImageBackground>
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>I understand</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;