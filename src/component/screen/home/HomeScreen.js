import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import images from '../../../assets/images/images'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveTrip from './ActiveTrip';
import CancelledTrip from './CancelledTrip';
import RecentTrip from './RecentTrip';

const HomeScreen = () => {


  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginTop: 10 }}>
        <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 20, padding: 10, width: '20%', alignItems: 'center', justifyContent: 'center', marginRight: 10, paddingHorizontal: 15, borderColor: 'grey' }}>
          <Image source={images.search} style={{ height: 18, width: 18, marginHorizontal: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Find</Text>
        </View>
        <View style={{ flexDirection: 'row', borderWidth: 1, borderRadius: 20, padding: 10, width: '20%', alignItems: 'center', justifyContent: 'center', marginRight: 10, paddingHorizontal: 15, borderColor: 'grey' }}>
          <Image source={images.plus} style={{ height: 18, width: 18, marginHorizontal: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Post</Text>
        </View>
      </View>
      <Text style={{ fontSize: 22, fontWeight: '800', color:'black' }}>Trips</Text>
      <Tab.Navigator>
        <Tab.Screen name="Active" component={ActiveTrip} />
        <Tab.Screen name="Recent" component={RecentTrip} />
        <Tab.Screen name="Cancelled" component={CancelledTrip} />
      </Tab.Navigator>
    </View >
  )
}

export default HomeScreen