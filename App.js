import React from "react";
import {StyleSheet,Text,View,ScrollView,ImageBackground,TouchableOpacity,ToastAndroid,Dimensions,Platform,ActionSheetIOS,Alert,} from "react-native";

const items = {
  items: ["Корги","Акита ину","Сиба ину",],
  uri: ["https://ferret-pet.ru/wp-content/uploads/8/9/4/8949f91c9c9c7eb922e85222aacd4c5a.jpeg","https://ferret-pet.ru/wp-content/uploads/5/9/1/5917f1fe183734bb454f0231b30ea492.jpeg","https://bugaga.ru/uploads/posts/2017-04/1492109033_siba-inu-ryudzi-15.jpg", ],
};

export default class App extends React.Component {
  handlePlatform(text) {
    if (Platform.OS === "android") {
      this.handlePressAndroidToast(text);
    } else if (Platform.OS === "ios") {
      this.handlePressIOS(text);
    }
  }

  handlePressAndroidToast(text) {
    ToastAndroid.show(text, ToastAndroid.LONG);
  }

  handlePressIOS(text) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Закрыть", "Погладить собаку"],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
        } 
        else if (buttonIndex === 1) {
          Alert.alert("Вы погладили " + text);
        }
      }
    );
  }

  render() {
    const renderItems = () => {
      return items["items"].map((item, id) => {
        return (
          <TouchableOpacity
            style={styles.item}
            key={id}
            onPress={() => this.handlePlatform(item)}
          >
            <ImageBackground
              style={styles.image}
              source={{ uri: items["uri"][id] }}
            />
            <Text style={styles.text}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      });
    };

    return (
      <View style={styles.container}>
        <ScrollView>{renderItems()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    backgroundColor: "pink",
    borderRadius: 15,
  },
  image: {
    width: 150,
    height: 150,
  },
  text:{
    fontSize: 18,
    marginStart: 50,
  }
});
