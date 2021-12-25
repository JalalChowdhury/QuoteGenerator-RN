// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,StatusBar, Text, View , TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react';


export default function App() {

  const [Quote,setQuote] = useState();
  const [Author,setAuthor] = useState();

  const randomQuote = () =>{
    fetch("https://api.quotable.io/random")
      .then(res =>res.json())
      .then(result =>{

            setQuote(result.content);
            setAuthor(result.author);
      })
  }
  console.log("hello dear");
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
        
        <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '600', color: '#333', marginBottom: 20 }}>Quote of the day</Text>
        
        <FontAwesome5 name="quote-left" style={{fontSize:20}} color="#000"/>
        <Text style={{
          textAlign: 'center',
          fontSize: 16,
          lineHeight:26,
          letterSpacing:1.1,
          fontWeight: '400',
          color: '#333',
          marginBottom: 10,
          paddingHorizontal:30
        }}
        >
         {Quote}
        </Text>

        <FontAwesome5 name="quote-right" style={{fontSize:20,textAlign:'right',marginTop:-20,marginBottom:20}} color="#000"/>


        <Text style={{textAlign:'right', fontWeight:'300',fontStyle:'italic',fontSize:16,color:'#000'}}>-- {Author}</Text>
        <TouchableOpacity onPress={randomQuote} style={{backgroundColor:'#5372F0',padding:20, borderRadius:30,marginVertical:20}}>
            <Text style={{ color:'#fff', fontSize:18, textAlign:'center'}}>New Quote</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            {/* For Volume  */}
            <TouchableOpacity onPress={()=>{}} style={{borderWidth:2,borderColor:'#5372F0',borderRadius:50, padding:15}}>
                  <FontAwesome name="volume-up" size={22} color="#5372F0"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={{borderWidth:2, borderColor:'#5372F0',borderRadius:50, padding:15}}>
                  <FontAwesome name="copy" size={22} color="#5372F0"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={{borderWidth:2, borderColor:'#5372F0',borderRadius:50, padding:15}}>
                  <FontAwesome name="facebook" size={22} color="#5372F0"/>
            </TouchableOpacity>

           
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5372F0'
  },
});
