import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import TaskList from '../components/task';

const host = "https://ancient-anchorage-35735.herokuapp.com";
class TodoListPage extends Component {
    static navigationOptions = {
        title: 'Todo list'
    };
    constructor(){
        super();
        this.state = {
            tasks: [],
            loading: false
        }
        this.removeTask = this.removeTask.bind(this);
    }
   
    removeTask(id){
        return () =>{
            fetch(`${host}/api/todo/${id}`, {
                method: 'DELETE'
                }).then((res) => {
                    // if(res.status === 200) {
                    //     this.setState({
                    //         tasks: this.state.tasks.filter(task => task._id !== id)
                    //       });
                    // }
                }).catch((error) => {
                    console.error(error);
            });
            this.setState({
                tasks: this.state.tasks.filter(task => task._id !== id)
              });
        }
    }
    componentDidMount(){
        this.setState({loading: true})
        fetch(`${host}/api/todo`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                tasks: [...data.todo],
                loading: false
              })
        })
        .catch((error) => {
        console.error(error);
        });
    }
    render() {
        return (
            <View style={styles.container}>
            {this.state.loading
                    ? <ActivityIndicator style={{flex: 1,justifyContent: 'center'}} size="large" />
                    :  (this.state.tasks.length === 0)
                    ? <Text style={{
                        fontSize: 30,
                        margin: 20,
                        textAlign: 'center'
                    }}>Tasks not found</Text>
                   :this.state.tasks.map((task)=>(
                      <TaskList 
                      removeTask={this.removeTask} 
                      key={task._id} 
                      task={task} />
                  )) }  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
});


export default TodoListPage