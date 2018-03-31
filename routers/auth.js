import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/Login';

export default StackNavigator({
    LoginPage: LoginPage
}, {
    initialRouteName: 'LoginPage'
});
