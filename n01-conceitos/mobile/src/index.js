import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

import api from './services/api';

export default function App() {
    const [ projects, setProjects ] = useState([]);

    useEffect( () => {
        api.get('projects').then( response => {

            setProjects(response.data);
        });
    }, []);

    return ( 
        <>
            <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
            {/* <View style={styles.container}>
                {projects.map( project => (
                    <Text style={styles.projectList} key={project.id}>{project.title}</Text>
                ))}
            </View> */}
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={ project => project.id }
                    renderItem={ ({ item: project }) => (
                        <Text style={styles.projectList}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        // justifyContent: "center",
        // alignItems: "center"
    },
    projectList: {
        color: '#fdfdfd',
        fontSize: 32,
    }
});