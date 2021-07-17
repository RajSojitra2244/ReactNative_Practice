import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button,
    Image,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
 const Employee = () =>{
    return (
        <View>
            <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
      backgroundColor:"black",
      height:"100%",
      width:"100%"
    },
})
export default Employee