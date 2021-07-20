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
const Employee = () => {

  const chatListItemView = (item, index) => {
    return (
      <TouchableWithoutFeedback
      >
        <View style={styles.mainCardView}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        renderItem={({ item, index }) => { return chatListItemView(item, index) }
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  mainCardView: {
    height: 90,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#996666",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 12,
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 6,
    marginHorizontal: 16
  },
})
export default Employee