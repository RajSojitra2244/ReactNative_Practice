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
// import Employee from './src/ui/Employee.jsx'
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Continue,setContinue] = useState(false)
  return (
    <View style={styles.main} >
    <View style={styles.container}>
        <Text style={styles.title}>ScaleTeam Technologies PYT.LTD</Text>
        <Text style={styles.subtitle}>TEAM WORK GET RIGHT SOLUNTION</Text>
       <Image source={NetworkImg} style={styles.img} />
    </View>
  
    <View style={styles.button} >
    <Button
  onPress={()=>setContinue(true)}
  title="Continue"
  color="red"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
    {/* <Employee/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    backgroundColor:"black",
    height:"100%",
    width:"100%"
  },
  container: {
    paddingHorizontal: 24,
    borderRadius:10,
    display:"flex",
  },
  button:{
    width:"50%",
    height:"50%",
    borderRadius:0,
    borderRadius:20,
    marginHorizontal:100,
    marginTop:"20%"
  },
  img:{
    marginTop:100,
    height:"50%",
    width:"auto",
    display:"flex",
    justifyContent:"center"
  },
  title:{
    marginTop:"30%",
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
