import React, {useContext, useEffect    } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { EvilIcons, Entypo } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(()=> {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };
    }, [])
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem = {({ item }) => {
                    
                    return (
                        <TouchableOpacity onPress = {()=> navigation.navigate('Show', { id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                                    <EvilIcons style={styles.trashIcon} name = "trash"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    
                    );
                    
                    
                }}    
            />
        </View>
    );
};

//constumize item inside the Header
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => 
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Entypo style={styles.plusIcon} name = "plus"/>
            </TouchableOpacity>
        
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    trashIcon: {
        fontSize: 27  
    },
    plusIcon: {
        fontSize: 30,
        marginRight: 15
    }
});

export default IndexScreen;  