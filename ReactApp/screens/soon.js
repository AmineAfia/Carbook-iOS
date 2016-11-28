/**
 * Coming Soon
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* Setup ==================================================================== */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  TouchableHighlight
} from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from 'react-native-search-bar';
import dismissKeyboard from 'react-native-dismiss-keyboard';

// App Globals
import AppStyles from '../styles';

// Components
import Button from '../components/button1';
import Card from '../components/card';
import CardSection from '../components/cardSection';

// Screens
import FirstLoad from './first.load';

/* Component ==================================================================== */
class ComingSoon extends Component {
  static componentName = 'ComingSoon';

  constructor(props) {
    super(props);

    this.state = {
      splashScreenVisible: this.props.showSplashScreen || false,
    };
  }

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    showSplashScreen: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
  }

  /**
    * Navigates to same scene (for Demo purposes)
    */
  _navigate = (navbarTitle) => {
    this.props.navigator.push({
      title: navbarTitle, 
      component: ComingSoon, 
      index: 2
    });
  }

  blur() {
    return NativeModules.RNSearchBarManager.blur(ReactNative.findNodeHandle(this));
  }


  /**
    * Splash Screen - Skip
    */
  onSplashSkip = () => {
    this.setState({ splashScreenVisible: false })
  }

  /**
    * RENDER
    */
  render() {
    //let text = this.props.placeholder || 'renderImage';

//  <View style={[AppStyles.container, AppStyles.containerCentered]}>
//         <Text style={[AppStyles.baseText, AppStyles.p]}>
//           {text}
//         </Text>

//         <View style={[AppStyles.spacer_10]} />

//         <Button 
//           type={'outlined'}
//           text={'Tap to test the back button'}
//           onPress={() => this._navigate(text)}
//         />
        
//         <Card style={[AppStyles.container]}>
//         <CardSection>
//             <Image
//                 style={AppStyles.imageStyle}
//                 source={{ uri: 'http://lawyertechreview.com/wp-content/uploads/2011/04/map-screenshot-notes.jpg' }} 
//             />
//         </CardSection>
//         </Card>

//         <Text>hello!!!!</Text>

//         <Modal 
//           animationType={'fade'} 
//           transparent={false} 
//           visible={this.state.splashScreenVisible}
//           onRequestClose={()=>{}}>
//           <FirstLoad 
//             navigator={this.props.navigator}
//             close={this.onSplashSkip} />
//         </Modal>
//       </View>

            // <Button style={styles.changeButton}>Change</Button>
    // Done
    return (
        // <View>
        //     <MapView
        //       style={{ height: 700 }}
        //       showsUserLocation={true}
        //       followUserLocation={true}
        //     />
        // </View>
        // <View style={[AppStyles.container]}>
    
      <View style={[AppStyles.container]} onPress={() => dismissKeyboard()}>
          <MapView
            style={styles.map}
            // provider="google"
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            followsUserLocation={true}
          />
          <SearchBar
              placeholder='Search'
              // textFieldBackgroundColor='grey'
          />
          <View style={styles.thumbnailContainerStyle}>
          <Image
            source={{ uri: 'https://s17.postimg.org/anq6xcztb/carvbook.png' }}
            style={styles.logo}
          />
          </View>
      </View>
    
    );
  }
}

const styles = {
  thumbnailContainerStyle: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginLeft: 10,
      marginRight: 10
    },
  logo: {
    // position: 'absolute',
    top: 420,
    width: 80,
    height: 34,    
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  container: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    height: 700 
  },
  searchContainer: {
    height: 700 
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
    imageStyle: {
        height: 700,
        flex: 1,
        width: null
    },
    changeButton: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginTop: 5,
      padding: 3,
    },
};

/* Export Component ==================================================================== */
export default ComingSoon;
