import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import Doremon from '../../assets/profile.jpg'
 const Employee = () =>{
  const data = [
    { key: 'A' },
    { key: 'B' },
    { key: 'C' },
    { key: 'D' },
    { key: 'E' },
    { key: 'F' },
    { key: 'G' },
    { key: 'H' },
    { key: 'I' },
    { key: 'A' },
    { key: 'B' },
    { key: 'C' },
    { key: 'D' },
    { key: 'E' },
    { key: 'F' },
    { key: 'G' },
    { key: 'H' },
    { key: 'I' }
  ];

 const chatListItemView = (item, index) => {
    return (
      <TouchableWithoutFeedback
       >
        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View >
              <Image
                source={Doremon}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 40,
                }}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                {'itechinsiders'}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}>
                  {'itechinsiders'}
                </Text>
              </View>
            </View>
          </View>
          {/* <View
            style={{
              height: 25,
              backgroundColor: "pink",
              borderWidth: 0,
              width: 25,
              marginLeft: -26,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Text style={{color:"white"}}>
              {item.unread_messages_count}
            </Text>
          </View> */}
        </View>
      </TouchableWithoutFeedback>
    );
          }
    return (
        <View>
            <FlatList
  data={data}
  numColumns={2}
  keyExtractor={(item, index) => index}
  ListHeaderComponent={
    <View style={{width: '100%', height:40}}/>
   }
  ListFooterComponent={
    <View style={{width: '100%', height:40}}/>
  }
  renderItem={({item,index}) => 
  chatListItemView(item,index)
  }
/>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
      // backgroundColor:"black",
      height:"100%",
      width:"100%"
    },
    cardview:{
      marginHorizontal:30,
      color:"black",
      // backgroundColor:"white"
    },
    text:{
      // backgroundColor:"red",
      color:"white"
    },
    container: {
      flex: 1,
      backgroundColor:"white",
    },
    mainCardView: {
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
      borderRadius: 15,
      shadowColor: "#996666",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: "#DDDDDD",
      borderColor:"#996666",
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
})
export default Employee