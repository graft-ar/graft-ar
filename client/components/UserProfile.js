import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import UserFeed from "./UserFeed";
import { signout } from "../store/userReducer";

class UserProfile extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    try {
      await this.props.handleSignout();
      this.props.navigation.navigate("LoginForm");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { navigation } = this.props;
    const { email, firstName, lastName, picture } = this.props.user;

    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.infoContainer}>
            <Image style={styles.thumbnailStyle} source={{ uri: picture }} />
            <Text style={styles.textStyle}>{firstName + " " + lastName}</Text>
            <Text style={styles.textStyle}>{email}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(`EditUserProfile`)}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={event => this.handleSubmit(event)}
            >
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.feedContainer}>
          <UserFeed userId={this.props.user.id} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  userContainer: {
    flexDirection: "row"
  },
  infoContainer: {
    width: "50%",
    height: "30%",
    padding: "2.5%",
    alignItems: "center"
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 30,
    marginBottom: 10
  },
  buttonContainer: {
    top: "15%",
    width: "50%"
  },
  button: {
    backgroundColor: "#ff5858",
    padding: 5,
    margin: 3,
    borderRadius: 5,
    width: 125
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center"
  },
  feedContainer: {
    backgroundColor: "#FFF",
    alignItems: "center",
    width: "100%",
    height: "70%"
  }
};

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSignout: () => {
      return dispatch(signout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
