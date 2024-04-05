import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="active" component={HomeScreen} />
      <Tab.Screen name="recent" component={HomeScreen} />
      <Tab.Screen name="cancelled" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;