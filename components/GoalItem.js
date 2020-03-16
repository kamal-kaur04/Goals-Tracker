import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}>
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#cccc',
        borderColor: 'black',
        borderWidth: 1,
      },
})

export default GoalItem;