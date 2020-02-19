import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.view}> 
            <Text style={styles.lable}>Enter Title</Text>
            <TextInput 
                style={styles.input} 
                value = {title} 
                onChangeText = {(text) => setTitle(text)}
            />
            <Text style={styles.lable}>Enter Content</Text>
            <TextInput 
                style={styles.input} 
                value = {content} 
                onChangeText = {(text) => setContent(text)}
            />
            <Button 
                title = "Save Blog Post"
                onPress= {() => onSubmit(title, content)}
                />

        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 20,
        marginTop: 20
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginBottom: 10
    },
    lable: {
        fontSize: 20,
        marginBottom: 10
    }
});

export default BlogPostForm;