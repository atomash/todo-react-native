import React from 'react'
import {Text, View, Button, StyleSheet} from 'react-native'

const TaskList = ({task, removeTask}) => {
    return (
        <View style={{borderWidth: 0.5, margin: 15}} >
            <Text 
                style={styles.task} 
                >Title: { task.title },
                <Text> Priority: {task.priority}</Text>
                
                {/* <Text 
                style={{color: 'red'}} 
                onPress={removeTask(task._id)}
                > &#x2612;</Text>  */}
                
                </Text>  
                <Button
                onPress={removeTask(task._id)}
                title="Remove"
                
                />
        </View>

    )
}

const styles = StyleSheet.create({
    task: {
        fontSize: 30,
        padding: 10,
        textAlign: 'center', 
    },
});

export default TaskList
