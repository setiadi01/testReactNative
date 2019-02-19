import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>What can we improve on?</Text>
        <View style={styles.imgContainer}>
          <View>
            <View style={styles.imgContent}>
              <Image
                style={styles.img}
                source={require("../assets/images/image1.png")}
              />
            </View>
            <Text style={styles.imgLabel}>Service</Text>
          </View>

          <View>
            <View style={styles.imgContent}>
              <Image
                style={styles.img}
                source={require("../assets/images/image2.png")}
              />
            </View>
            <Text style={styles.imgLabel}>Product</Text>
          </View>
          <View>
            <View style={styles.imgContent}>
              <Image
                style={styles.img}
                source={require("../assets/images/image3.png")}
              />
            </View>
            <Text style={styles.imgLabel}>Ambience</Text>
          </View>
        </View>

        <View style={styles.commentContainer}>
          <View style={styles.inputCommentContainer}>
            <TextInput
              style={styles.inputComment}
              placeholder="Leave a comment..."
              multiline={true}
              numberOfLines={10}
            />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}> Submit a Review </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 25,
    fontSize: 18,
    color: "#000",
    fontWeight: "bold"
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  imgContent: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15
  },
  img: {
    width: 35,
    height: 35
  },
  imgLabel: {
    textAlign: "center",
    fontSize: 18,
    paddingTop: 5,
    color: "#4D4C4C"
  },
  commentContainer: {
    paddingTop: 25,
    alignItems: "center"
  },
  inputCommentContainer: {
    width: "90%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  inputComment: {
    height: 150,
    textAlignVertical: "top"
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#EC3E79",
    padding: 18,
    marginTop: 15,
    marginBottom: 15,
    width: "80%",
    borderRadius: 5
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  }
});
