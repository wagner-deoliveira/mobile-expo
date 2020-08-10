import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import AsyncStorage from "@react-native-community/async-storage";
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';


const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState([]);

    function loadFavs() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favTeachers = JSON.parse(res);
                setFavorites(favTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavs();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Favorite Proffys" />
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                {favorites.map((teacher: Teacher) => {
                    return <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favored
                    />
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;