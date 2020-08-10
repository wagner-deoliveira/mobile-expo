import React from 'react';
import {View} from 'react-native';

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import styles from './styles';

const TeacherList: React.FC = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Available Proffys" />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </View>

    );
}

export default TeacherList;