import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/screen/home/HomeScreen';
import TripScreen from '../component/screen/trips/TripScreen';
import Profile from '../component/screen/account/profile';
import { Image } from 'react-native';
import images from '../assets/images/images';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={HomeScreen} options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel:false,
                tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component here like a custom Icon component if needed
                    return <Image source={images.inbox} style={{ tintColor: focused ? 'orange' : null, height: 30, width: 30}} />;
                },
            })} />
            <Tab.Screen name="trip" component={TripScreen} options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel:false,
                tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component here like a custom Icon component if needed
                    return <Image source={images.destination} style={{ tintColor: focused ? 'orange' : null, height: 30, width: 30 }} />;
                },
            })} />
            <Tab.Screen name="account" component={Profile} options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel:false,
                tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component here like a custom Icon component if needed
                    return <Image source={images.user} style={{ tintColor: focused ? 'orange' : null, height: 30, width: 30}} />;
                },
            })} />
        </Tab.Navigator>
    );
}

export default BottomTab;