
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,

} from "react-native";
import { BlurView } from "expo-blur";
import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#121214"} barStyle="ligth-content" />
      <View style={styles.header}>
      <Text
          style={{
            color: "#4C4C4E",
            textAlign: "right",
            marginTop: 25,
            marginRight: 20,
          }}
        >
          Dec 13
        </Text>

      <LottieView
        autoPlay
        source={require('./assets/moon.json')}
        speed={0.5} 
        style={{
          width: "100%",
          height: "100%",
          

        }}/>

     
        
      </View>

      <View style={styles.body}>
        <Text style={{ color: "#4C4C4E", fontSize: 25, marginLeft: 10 }}>
        
          Bengaluru
        </Text>
        <Text style={{ color: "#C3C3C4", fontSize: 50 }}> 21° C</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            marginTop: 15,
            marginLeft: 20,
          }}
        >
          <View>
            <Text style={{ color: "#4C4C4E", fontSize: 12 }}>Wind Speed</Text>
            <Text style={{ color: "#888889", fontSize: 15 }}>6 hm/h</Text>
          </View>
          <View>
            <Text style={{ color: "#4C4C4E", fontSize: 12 }}>Humidity</Text>
            <Text style={{ color: "#888889", fontSize: 15 }}>69%</Text>
          </View>
          <View>
            <Text style={{ color: "#4C4C4E", fontSize: 12 }}>Weather</Text>
            <Text style={{ color: "#888889", fontSize: 15 }}>Sunny</Text>
          </View>
        </View>
     
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 50,
            }}
          >
            <Text style={{ color: "#4C4C4E" }}>Today</Text>

            <Text style={{ color: "#888889" , fontWeight:'bold'}}>Tomorrow</Text>

            <Text style={{ color: "#4C4C4E" }}>This Week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#111113",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flex: 1,

    marginTop: 10,
  },
  body: {
    flex: 1,
    width: "100%",
  },
});
