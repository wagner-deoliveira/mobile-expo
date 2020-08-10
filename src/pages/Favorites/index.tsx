import React from 'react';
import {ScrollView, View} from 'react-native';
import TeacherItem from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";

import styles from './styles';

const Favorites: React.FC = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Favorite Proffys" />
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

export default Favorites;