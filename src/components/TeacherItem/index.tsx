import React from 'react';
import {Image, Text, View} from 'react-native';
import {RectButton} from "react-native-gesture-handler";

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
           <View style={styles.profile}>
               <Image
                   style={styles.avatar}
                   source={{uri: 'https://avatars2.githubusercontent.com/u/60220411?s=460&u=7a872a16b49a99ae43d93cb8400c103a7022ec6c&v=4'}}
               />
               <View style={styles.profileInfo}>
                  <Text style={styles.name}>Wag</Text>
                  <Text style={styles.subject}>Info</Text>
               </View>
           </View>
           <Text style={styles.bio}>Test</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>Price/hour {'    '}
                    <Text style={styles.priceValue}>€ 666</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Contact</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    );
}

export default TeacherItem;