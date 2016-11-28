import React, {Component} from 'react';
import { 
    View, 
    Text, 
    Image, 
    Linking, 
    ScrollView,
    TouchableHighlight
    } from 'react-native';
import MapView from 'react-native-maps';

import Card from '../components/card';
import CardSection from '../components/cardSection';
import Button from '../components/button1';
import ListRow from '../components/list.row';
import ListViewExample from './listview';

import ComingSoon from './soon';

// App Globals
import AppStyles from '../styles';

class Profile extends Component {
    render() {
    let { navigate } = this.props;

        return (
            <ScrollView>
            <Card style={[AppStyles.container]}>
                <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle} 
                        source={{ uri: 'https://pixabay.com/static/uploads/photo/2015/01/19/13/51/car-604019_1280.jpg' }} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>AUDI A4</Text>
                    <Text style={AppStyles.h3}>Parked: WED.08:56:30</Text>
                    <Text style={AppStyles.h3}>Rental ID: 7634839</Text>
                </View>
                </CardSection>    
                
                <View style={styles.headerContentStyle}>
                        <ListRow
                            title={'Position: (49.010479, 8.417035)'}
                            onPress={() => {alert('Go To Entry View')}} />
                        <ListRow 
                            title={'Private Park: FREE'}
                            onPress={() => {alert('Go To Entry View')}} />
                        <ListRow 
                            title={'Balance: 6€'}
                            onPress={() => {alert('Go To Entry View')}} />
                </View> 

                <CardSection style={styles.map}>
                <View style={styles.map}>
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
                </View>
                </CardSection>

                <CardSection>
                    <Button>
                    <Text>Reserve a Parking</Text>
                    </Button>
                </CardSection>

                <View>
                    <Text style={styles.headerTextStyle}> </Text>
                </View>

                <View style={styles.listContentStyle}>
                    <View>
                        <Text style={styles.headerTextStyle}>Remaining Time:</Text>
                    </View>
                    <View>
                        <Text style={[styles.headerTextStyle, { color: '#4099FF' }]}> 00:23 </Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.headerTextStyle}> </Text>
                </View>
            </Card>
            </ScrollView>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    listContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5
    },
    headerTextStyle: {
        fontSize: 18,
        alignSelf: 'center'
    },
    thumbnailStyle: {
        height: 100,
        width: 100
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        alignItems: 'center',
        height: 250,
        flex: 1,
        width: 250,
    },
    map: {
        alignItems: 'center',
        height: 250,
        flex: 1,
        width: 250,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
};

export default Profile;
