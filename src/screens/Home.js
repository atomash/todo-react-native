import React, {Component} from 'react';
import {
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button, 
    Picker
} from 'react-native';
    
const host = "https://ancient-anchorage-35735.herokuapp.com";

class HomePage extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    state = {
        title: "",
        priority: 1
    }
    addTask(){
        fetch(`${host}/api/todo`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: this.state.title,
            priority: Number(this.state.priority),
        }),
        })
    }
    render() {
        return (
            <View style={styles.container}>
            <TextInput
                placeholder="Input task name..."
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({title: text})}
                value={this.state.text}
                />
                <Text style = {{
                    top: 5,
                    fontSize: 30,
                    alignSelf: 'center',
                }}>Priority:</Text>
             <Picker
             style={{width: 100}} 
              selectedValue = {this.state.priority} 
              onValueChange = {(p) => this.setState({
                  priority: p
                  })}>
               <Picker.Item label = "Low" value = "1" />
               <Picker.Item label = "Average" value = "2" />
               <Picker.Item label = "High" value = "3" />
            </Picker>
            
        <Button
          onPress={this.addTask.bind(this)}
          title="Add task"
          color="#841584"
        />
            <Button
            
          title="View Todo-list"
          onPress={() => this.props.navigation.navigate('TodoListPage')}
        />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    inputStyle: {
        width: '70%',
        marginTop: 50, 
        height: 40, 
        borderWidth: 2, 
        borderRadius: 10
    }

});


export default HomePage