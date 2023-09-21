import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EFB495',  
        shadowColor: '#EFD595',
        shadowOffset: {height: 5, width: 8},
        elevation: 8,
        shadowOpacity: 1,
        shadowRadius: 1,
    }
})