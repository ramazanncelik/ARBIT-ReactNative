import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text style={{ color: 'black' }}>Detail Sayfasına Git</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen