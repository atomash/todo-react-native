import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const TaskList = ({task, removeTask}) => {
    return (
        <View >
            <Text 
                style={styles.task} 
                >Title: { task.title },
                <Text> Priority: {task.priority}</Text> 
                <Text 
                style={{color: 'red'}} 
                onPress={removeTask(task._id)}
                > &#x2612;</Text> 
                </Text>  
        </View>

    )
}

const styles = StyleSheet.create({
    task: {
        borderWidth: 0.5,
        fontSize: 30,
        padding: 10,
        textAlign: 'center', 
    },
});

export default TaskList
