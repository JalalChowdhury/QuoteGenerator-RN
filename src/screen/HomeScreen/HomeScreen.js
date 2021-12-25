import {  Text, View , TouchableOpacity, Linking} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import react,{ useEffect, useState } from 'react';

//sound system 
// import Tts from 'react-native-tts';

// Tts.setDefaultLanguage('en-GB');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.5);
// Tts.setDefaultPitch(1.2);

const HomeScreen = () => {

    const [Quote,setQuote] = useState('loading...');
    const [Author,setAuthor] = useState('loading...');
    const [isLoading,setIsLoading] = useState(false);
  
    const randomQuote = () =>{
      setIsLoading(true);
      fetch("https://api.quotable.io/random")
        .then(res =>res.json())
        .then(result =>{
  
              setQuote(result.content);
              setAuthor(result.author);
              setIsLoading(false);
        })
    }
    useEffect( () =>{
      randomQuote();
    }, [])
  
    // Upcomming ...
  
    // const speakNow =() => {
    //   Tts.speak(Quote + ' by ' + Author);
    // }
  
    // const facebookNow = () =>{
    //   const url="http://facebook.com/intent/facebook?text" + Quote ;
    //   Linking.openURL(url);
    // }

    return (
        <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>

            <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '800', color: 'navy', marginBottom: 20 }}>Quote of the day</Text>

            <FontAwesome5 name="quote-left" style={{ fontSize: 20 }} color="#000" />
            <Text style={{
                textAlign: 'center',
                fontSize: 16,
                lineHeight: 26,
                letterSpacing: 1.1,
                fontWeight: '400',
                color: '#333',
                marginBottom: 10,
                paddingHorizontal: 30
            }}
            >
                {Quote}
            </Text>

            <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right', marginTop: -20, marginBottom: 20 }} color="#000" />


            <Text style={{ textAlign: 'right', fontWeight: '300', fontStyle: 'italic', fontSize: 16, color: '#000' }}>-- {Author}</Text>
            <TouchableOpacity onPress={randomQuote} style={{ backgroundColor: isLoading ? 'rgba(83,114,240,0.7)' : 'rgba(83,114,240,1)', padding: 20, borderRadius: 30, marginVertical: 20 }}>
                <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>{isLoading ? 'Loading...' : 'New Quote'}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {/* For Volume  */}
                <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
                    <FontAwesome name="volume-up" size={22} color="#5372F0" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
                    <FontAwesome name="copy" size={22} color="#5372F0" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
                    <FontAwesome name="facebook" size={22} color="#5372F0" />
                </TouchableOpacity>


            </View>
        </View>

    );
}

export default HomeScreen;