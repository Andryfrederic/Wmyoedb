import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import Login from './Login'
import Accueil from './Accueil'
import Camera from './camera'
import CategoryView from './CategoryView'
import Enregistre from './enregistre'
import Header from './header'
import VideoPlayer from './VideoPlayer'
const RootStack = createStackNavigator(
    {
      Login: Login,
      Accueil:Accueil,
      Camera:Camera,
      CategoryView:CategoryView,
      Enregistre:Enregistre,
      Header:Header,
      VideoPlayer:VideoPlayer,
    },
    {
      initialRouteName: 'Login',

    }
   )
const Demarrage = createAppContainer(RootStack);
export default Demarrage;