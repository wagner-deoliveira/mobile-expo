import React, {useState} from 'react';
import {Image, Text, View, Linking} from 'react-native';
import {RectButton} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


export interface Teacher {
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
    favored: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favored}) => {
    const [isFavored, setIsFavored] = useState(favored);

    function handleWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }
    
    async function handleToggleFav() {
        const favs = await AsyncStorage.getItem('favorites');
        let favsArray = []
        if (favs) {
            favsArray = JSON.parse(favs);
        }

        if (isFavored) {
            const favIndex = favsArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            })
            favsArray.splice(favIndex, 1);
            setIsFavored(false);
        } else {
            favsArray.push(teacher);
            setIsFavored(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favsArray));
    }

    return (
        <View style={styles.container}>
           <View style={styles.profile}>
               <Image
                   style={styles.avatar}
                   source={{uri: teacher.avatar}}
               />
               <View style={styles.profileInfo}>
                  <Text style={styles.name}>{teacher.name}</Text>
                  <Text style={styles.subject}>{teacher.subject}</Text>
               </View>
           </View>
           <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>Price/hour {'    '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFav}
                        style={[styles.favoriteButton, isFavored ? styles.favored : {}]}>
                        {isFavored ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} />}
                    </RectButton>

                    <RectButton onPress={handleWhatsApp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Contact</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    );
}

export default TeacherItem;