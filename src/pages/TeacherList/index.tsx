import React, {useState} from 'react';
import {ScrollView, Text, TextInput
    , View} from 'react-native';
import {Feather} from '@expo/vector-icons';

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import styles from './styles';
import {BorderlessButton, RectButton} from "react-native-gesture-handler";

const TeacherList: React.FC = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    
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
                            placeholder="Choose discipline"
                            placeholderTextColor='#c1bcc'
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Day of the week</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Choose day"
                                    placeholderTextColor='#c1bcc'
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Schedule</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Choose schedule"
                                    placeholderTextColor='#c1bcc'
                                />
                            </View>
                        </View>
                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>

    );
}

export default TeacherList;