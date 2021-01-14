import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PictProfile from '../img/GoTruckRound.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleApp from '../img/GoTruckTitle.png';

class Home extends Component {
  LoginFormFunction = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    const screenHeigth = Math.round(Dimensions.get('window').height);
    return (
      <ScrollView>
        <View>
          <View
            style={{width: '100%', height: 100, backgroundColor: 'white'}}
          />
          <View
            style={{
              width: '100%',
              height: 100,
              position: 'absolute',
              top: 0,
              backgroundColor: '#c49d49',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomRightRadius: 40,
            }}>
            <Image
              source={TitleApp}
              style={{
                width: 110,
                height: 20,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#c49d49',
              position: 'absolute',
              top: 100,
              left: 0,
            }}
          />
          <View style={styles.accountContainer}>
            <View style={styles.contentContainer}>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 60,
                  borderRadius: 5,
                  backgroundColor: '#d14a41',
                  position: 'absolute',
                  right: 10,
                  bottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={this.LoginFormFunction}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                  Sign Out
                </Text>
              </TouchableOpacity>
              <View style={styles.contentWrapper}>
                <Image source={PictProfile} style={styles.imageProfil} />
                <View>
                  <Text style={styles.textMain}>Renaldy Luntungan</Text>
                  <Text style={styles.textMain}>Customer</Text>
                  <Text>Bitung</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.separatorContainer} />
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: screenHeigth,
            }}>
            <View style={styles.historyWrapper}>
              <View style={styles.historyIcon}>
                <Icon name="history" size={20} color={'grey'} />
                <Text style={styles.textHistory}>History</Text>
              </View>
            </View>
            <View style={styles.historyContent}>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: '100%',
                  borderBottomWidth: 0.5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pasir</Text>
                  <Text>Tipe Pasir Halus</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text>oleh Ray</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Rp.400.000
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: '100%',
                  borderBottomWidth: 0.5,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                }}>
                <View>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Batu</Text>
                  <Text>Tipe Batu Gunung</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text>oleh Odi</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Rp.900.000
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fffcf7',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    paddingTop: 30,
  },
  fontTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
  accountContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 180,
    justifyContent: 'center',
    borderTopLeftRadius: 40,
  },
  contentContainer: {
    width: '90%',
    height: 120,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfil: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  textMain: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textHistory: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },
  separatorContainer: {
    width: '100%',
    height: 10,
  },

  historyWrapper: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
  historyIcon: {
    width: 100,
    height: 30,
    backgroundColor: '#fafafa',
    borderTopRightRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  historyContent: {
    width: '90%',
    height: '90%',
    backgroundColor: '#fafafa',
    alignSelf: 'center',
    borderTopRightRadius: 8,
    borderWidth: 0.2,
  },
});
