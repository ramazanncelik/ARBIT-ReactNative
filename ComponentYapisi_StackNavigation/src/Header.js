import { View, Text } from 'react-native'
import React from 'react'

const Header = ({sayi}) => {
  return (
    <View>
      <Text>
        {sayi}
      </Text>
    </View>
  )
}

export default Header