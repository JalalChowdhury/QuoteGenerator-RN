import { StyleSheet,StatusBar,  View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';

//sound system upcoming ...
// import Tts from 'react-native-tts';

// Tts.setDefaultLanguage('en-GB');
// Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
// Tts.setDefaultRate(0.5);
// Tts.setDefaultPitch(1.2);

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
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
