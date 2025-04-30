import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant='displayLarge'>Profile Screen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})