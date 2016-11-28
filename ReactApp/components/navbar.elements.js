/**
 * Navbar Elements
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

// App Globals
import AppStyles from '../styles'


/* Navbar Title Component ==================================================================== */
class NavbarTitle extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  }

  render = () => {
  // if (this.props.title == 'Home') { 
  //     return (          
  //       <View style={styles.thumbnailContainerStyle}>
  //         <Image
  //           source={{ uri: 'https://s17.postimg.org/anq6xcztb/carvbook.png' }}
  //           style={styles.logo}
  //         />
  //       </View>
  //     );
  // } 
  return (
      <Text style={[AppStyles.baseText, AppStyles.strong, styles.navbarTitle]}>{this.props.title || 'Starter Kit'}</Text>
    );
  }
}

exports.Title = NavbarTitle;


/* Navbar Left Button Component ==================================================================== */
class NavbarLeftButton extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    icon: React.PropTypes.string.isRequired,
  }

  render = () => {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7} 
        style={styles.navbarButton}
        hitSlop={{top: 7, right: 7, bottom: 7, left: 7}}>
        <Icon name={this.props.icon} size={36} color={"#FFF"} />
      </TouchableOpacity>
    );
  }
}

exports.LeftButton = NavbarLeftButton;

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
  logo: {
    // position: 'absolute',
    // top: 420,
    width: 80,
    height: 34,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarButton: {
    left: 20,
    top: 4,
  },
  navbarTitle: {
    color: '#FFFFFF',
    bottom: 6,
    fontSize: 13,
  },
});
