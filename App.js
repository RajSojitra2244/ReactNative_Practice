import React,{useState} from 'react';
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
import NetworkImg from './assets/network.png'
import Employee from './src/ui/Employee';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Continue,setContinue] = useState(false)

  return (
    <View style={styles.main} >
  { !Continue &&
    <>
    <View style={styles.container}>
        <Text style={styles.title}>ScaleTeam Technologies PYT.LTD</Text>
        <Text style={styles.subtitle}>TEAM WORK GET RIGHT SOLUNTION</Text>
    </View>
    <View style={{flex:4}}>
       <Image source={NetworkImg} style={styles.img} />
    </View>   
  
    <View style={styles.button} >
    <Button
    style={{borderRadius:50}}
  onPress={()=>setContinue(true)}
  title="Continue"
  color="red"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
      </>
    }
    {Continue && <Employee/>}
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    backgroundColor:"black",
    flex:2
  },
  container: {
    paddingHorizontal: 24,
    flex:1,
    justifyContent:"center",
    borderRadius:10,
    // display:"flex",
  },
  button:{
    flex:2,
    marginHorizontal:80,
  },
  img:{
    height:"100%",
    width:"100%",
    display:"flex",
    justifyContent:"center"
  },
  title:{
    textAlign:"center",
    justifyContent:"center",
    fontSize:20,
    color:"white"
  },
  subtitle:{
    textAlign:"center",
    color:"red"
  }
});

export default App;
