import React, {useEffect, useState} from 'react';
import {
    ScrollView, Text, TextInput
    , View
} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {BorderlessButton, RectButton} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../../../../web/src/services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItem";

import styles from './styles';

const TeacherList: React.FC = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    function loadFavs() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favTeachers = JSON.parse(res);
                const favTeachersIds = favTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favTeachersIds);
            }
        });
    }

    async function handleFilterSubmit() {
        loadFavs();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setIsFilterVisible(false);
        setTeachers(response.data);
    }

    function handleFilterIsVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Available Proffys" headerRight={(
                <BorderlessButton onPress={handleFilterIsVisible}>
                    <Feather name="filter" size={20} color="#FFF" />
                </BorderlessButton>
            )}>
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Disciplines</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Choose discipline"
                            placeholderTextColor='#c1bcc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Day of the week</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Choose day"
                                    placeholderTextColor='#c1bcc'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Schedule</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Choose schedule"
                                    placeholderTextColor='#c1bcc'
                                />
                            </View>
                        </View>
                        <RectButton
                            onPress={handleFilterIsVisible}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                {teachers.map(teacher => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favored={favorites.includes(teacher.id)}
                        />
                        )
                })}
            </ScrollView>
        </View>

    );
}

export default TeacherList;