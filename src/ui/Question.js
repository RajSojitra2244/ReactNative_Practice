import React, { useState } from 'react';
import { Text, Button,TextInput, View ,StyleSheet} from 'react-native';
export default function Question() {
    const [text, setText] = useState('');
    return (
        <View style={styles.maiinView}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
          <Button
              style={{ borderRadius: 50 }}
              title="Continue"
              color="skyblue"
              accessibilityLabel="Learn more about this purple button"
            />
      </View>
      </View>

    );

}

const styles = StyleSheet.create({
    maiinView:{
     
    },
    container:{
        padding:10,
        flexDirection:"row",
        display:'flex',
        justifyContent:"space-between"
    },
    input:{
        height:40,
        backgroundColor:"lightblue",
        color:"black",
        fontSize:20,
        fontWeight:'normal',
        borderRadius:20
    },
})