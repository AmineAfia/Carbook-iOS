import React, {Component} from 'react';
import { View, Text, Image, Linking, ScrollView, MapView } from 'react-native';

import Card from '../components/card';
import CardSection from '../components/cardSection';
import Button from '../components/button1';
import ListRow from '../components/list.row';
import ListViewExample from './listview';
// App Globals
import AppStyles from '../styles';

class Profile extends Component {
    render() {
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

                <CardSection>
                    <Image 
                        style={AppStyles.imageStyle}
                        source={{ uri: 'http://lawyertechreview.com/wp-content/uploads/2011/04/map-screenshot-notes.jpg' }} 
                    />
                </CardSection>

                <CardSection>
                    <Button>
                    Reserve a Parking
                    </Button>
                </CardSection>

                <View style={styles.listContentStyle}>
                    <View>
                        <Text style={styles.headerTextStyle}>Remaining Time:</Text>
                    </View>
                    <View>
                        <Text style={[styles.headerTextStyle, { color: '#4099FF' }]}> -- </Text>
                    </View>
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
        height: 300,
        flex: 1,
        width: null
    }
};

export default Profile;
