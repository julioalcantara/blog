import React, { useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScren = ({ navigation }) => {
    const  { state } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View> 
            <Text> {blogPost.title}</Text>
            <Text> {blogPost.content}</Text>
        </View>
    );
};

ShowScren.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => 
        <TouchableOpacity 
            onPress={()=> 
                navigation.navigate('Edit', { id: navigation.getParam('id') })
            }
        >
            <AntDesign style={styles.editIcon} name="edit"/>
        </TouchableOpacity>
        
    };
};

const styles = StyleSheet.create({
    editIcon: {
        fontSize: 30,
        marginRight: 15
    }
});

export default ShowScren;