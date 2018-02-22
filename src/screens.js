import {StackNavigator} from 'react-navigation';
import HomePage from './screens/Home';
import TodoListPage from './screens/TodoList';

export default ScreensComponent = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    TodoListPage: {
        screen: TodoListPage
    }
});