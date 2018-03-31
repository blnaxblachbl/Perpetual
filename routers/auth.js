import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/Login';
import RegistrPage from '../pages/Registrate';

export default StackNavigator({
    LoginPage: LoginPage,
    RegistrPage: RegistrPage
}, {
    initialRouteName: 'LoginPage'
});
