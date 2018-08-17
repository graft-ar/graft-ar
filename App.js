import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import CameraView from './components/CameraView';
import UserProfile from './components/UserProfile';
import EditUserProfile from './components/EditUserProfile';
import ArtFeed from './components/ArtFeed';
import FriendProfile from './components/FriendProfile';
import ArtPostForm from './components/ArtPostForm';
import SingleArtView from './components/SingleArtView';
import SingleArtItem from './components/SingleArtItem';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';


const RootNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: `GraftAR`,
    }),
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  SignUpForm: {
    screen: SignUpForm,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  CameraView: {
    screen: CameraView,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  EditUserProfile: {
    screen: EditUserProfile,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  ArtFeed: {
    screen: ArtFeed,
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      headerLeft: null,
      title: 'ARt',
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'transparent',
      },
      headerTitleStyle: {
        color: '#ff5858',
        fontWeight: '800',
        fontSize: 24,
      },
    }),
  },
  FriendProfile: {
    screen: FriendProfile,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  ArtPostForm: {
    screen: ArtPostForm,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  SingleArtView: {
    screen: SingleArtView,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  SingleArtItem: {
    screen: SingleArtItem,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
