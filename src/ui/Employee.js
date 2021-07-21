import React,{useState} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight ,
  Image,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import Doremon from '../../assets/profile.jpg'
import QuestionFile from './Question'
const Employee = () => {
  const [Question,setQuestion]= useState(false)
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
      <TouchableHighlight onPress={()=>{setQuestion(true)}}>
        <View style={styles.mainCardView}>
          <View style={styles.cardView}>
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
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                {'Mr.Sojitra'}
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
                  {'Director'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight >
    );
  }
  return (
    <View style={styles.mainView}>
     {!Question && <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => { return chatListItemView(item, index) }
        }
      />}
      {Question && <QuestionFile/>}
    </View>
  )
}
const deviceWidth = Dimensions.get('window').width
  const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create(
  {
    mainView:{
      display:"flex",
      alignItems:"center"
    },
  mainCardView: {
    backgroundColor: "white",
    display:"flex",
    width:deviceWidth-250,
    justifyContent:"center",
    borderRadius: 15,
    shadowColor: "#996666",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 12,
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 6,
    marginHorizontal: 16
  },
  cardView:{
    flexDirection:"row",
    alignItems:"center",
    height:deviceHeight - 620,
  }
})
export default Employee