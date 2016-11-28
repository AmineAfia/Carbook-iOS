import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    ScrollView, 
    DatePickerIOS, 
    TouchableWithoutFeedback,
     } from 'react-native';
import MapView from 'react-native-maps';
import DatePicker from 'react-native-datepicker';

import Card from '../components/card';
import CardSection from '../components/cardSection';
import Button from '../components/button1';
import ListRow from '../components/list.row';
// import ListViewExample from './listview';
// App Globals
import AppStyles from '../styles';

class Parking extends Component {
    static defaultProps = {
        available: 'FREE',
        notAvailable: null,
    };

    constructor(props) {
        super(props);
        this.state = { available: 'FREE' };
    }

    state = {
        date: this.props.date,
        timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    };
    onDateChange = (chosenDate) => {
        this.setState({ date: chosenDate });
    };

    onTimezoneChange = (event) => {
        var offset = parseInt(event.nativeEvent.text, 10);
        if (isNaN(offset)) {
            return;
        }
        this.setState({timeZoneOffsetInHours: offset});
    };

    datePicker() {
        return (
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
        />);
    }

    makeOccupied() {
            this.setState({ available: '' });
            this.setState({ notAvailable: 'OCCUPIED' });
    }

    makeFree() {
            this.setState({ notAvailable: '' });
            this.setState({ available: 'FREE' });
    }

    render() {
        return (
            <ScrollView>
            <Card style={[AppStyles.container]}>
                <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        style={styles.thumbnailStyle} 
                        source={{ uri: 'http://media.growsonyou.com/photos/photo/image/23105/main/Front_Garden.jpg' }} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>Rüppurrerstraße 95</Text>
                    <Text style={styles.headerTextStyle}>76137 Karlsruhe</Text>
                    <Text style={AppStyles.h3}>1,20 €/Std</Text>
                </View>
                </CardSection>

                <CardSection>
                <View style={styles.rawHeaderContentStyle}>
                    <View>
                        <Text style={styles.headerTextStyle}>                  AVAILABILITY:</Text>
                    </View>

                    <View>
                        <Text 
                            style={[styles.headerTextStyle, { color: 'red' }]}
                        > {this.state.notAvailable} </Text>
                    </View>
                    <View>
                        <Text 
                            style={[styles.headerTextStyle, { color: '#4099FF' }]}
                        > {this.state.available} </Text>
                    </View>

                </View>
                </CardSection>

                <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Text>From: </Text>
                </View>
                <View style={styles.headerContentStyle}>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>
                </CardSection>

                <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Text>To:     </Text>
                </View>
                <View style={styles.headerContentStyle}>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </View>
                </CardSection>

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
                    <Button onPress={() => this.makeOccupied()}>
                    Show
                    </Button>
                    <Button onPress={() => this.makeFree()}>
                    <Text style={{ color: 'red' }}> Hide </Text>
                    </Button>
                </CardSection>
            </Card>
            </ScrollView>
        );
    }
}

const styles = {
    buttonOutline: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'red',
    },
    rawHeaderContentStyle: {
        flexDirection: 'row',
        // justifyContent: 'flex-end',
        alignItems: 'center',
    },
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
        alignSelf: 'flex-start'
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

export default Parking;
