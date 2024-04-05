import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData } from '../../../utils/Storage'

const Profile = (props) => {
    const [user, setUser] = useState({})
    useEffect(async () => {
        let user = await getData('User')
        setUser(user)
    }, [])
    return (
        <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Email: {user?.email}</Text>
        </View>
    )
}

export default Profile;