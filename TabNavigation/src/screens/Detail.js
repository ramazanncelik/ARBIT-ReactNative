import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Detail = () => {

    const navigation = useNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            width: '100%',
            height: 50
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ marginRight: 10 }}>
                <Text style={{ color: 'black' }}>Geri Dön</Text>
            </TouchableOpacity>
            <Text style={{ color: 'black' }}>Detail</Text>
        </View>
    )
}

export default Detail