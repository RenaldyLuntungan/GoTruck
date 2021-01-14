import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import TitleApp from '../img/GoTruckTitle.png';
import Pasir from '../img/pasir.png';
import Tanah from '../img/tanah.png';
import Batu from '../img/batu.png';

class Shop extends Component {
  PasirFormFunction = () => {
    this.props.navigation.navigate('PasirShop');
  };
  TanahFormFunction = () => {
    this.props.navigation.navigate('TanahShop');
  };
  BatuFormFunction = () => {
    this.props.navigation.navigate('BatuShop');
  };
  render() {
    const screenHeigth = Math.round(Dimensions.get('window').height);
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{width: '100%', height: 100}} />
          <View
            style={{
              width: '100%',
              height: 100,
              position: 'absolute',
              top: 0,
              backgroundColor: '#c49d49',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}>
            <Image
              source={TitleApp}
              style={{
                width: 110,
                height: 20,
                paddingBottom: 20,
              }}
            />
          </View>
          <View
            style={{
              height: screenHeigth,
              backgroundColor: 'white',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                marginTop: 30,
                width: '90%',
                height: 150,
                backgroundColor: '#fafafa',
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 10,
                justifyContent: 'center',
              }}
              onPress={this.PasirFormFunction}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginHorizontal: 20,
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Pasir}
                    style={{width: 115, height: 115, borderRadius: 115 / 2}}
                  />
                </View>
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pasir</Text>
                  <Text style={{fontWeight: 'bold', marginTop: 20}}>
                    Tipe Pasir:
                  </Text>
                  <Text>Pasir Halus</Text>
                  <Text>Pasir Kasar</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 30,
                width: '90%',
                height: 150,
                backgroundColor: '#fafafa',
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 10,
                justifyContent: 'center',
              }}
              onPress={this.TanahFormFunction}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginHorizontal: 20,
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Tanah}
                    style={{width: 115, height: 115, borderRadius: 115 / 2}}
                  />
                </View>
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tanah</Text>
                  <Text style={{fontWeight: 'bold', marginTop: 20}}>
                    Tipe Tanah:
                  </Text>
                  <Text>Tanah Timbun</Text>
                  <Text>Tanah Sirtu</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 30,
                width: '90%',
                height: 150,
                backgroundColor: '#fafafa',
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 10,
                justifyContent: 'center',
              }}
              onPress={this.BatuFormFunction}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    marginHorizontal: 20,
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Batu}
                    style={{width: 115, height: 115, borderRadius: 115 / 2}}
                  />
                </View>
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Batu</Text>
                  <Text style={{fontWeight: 'bold', marginTop: 20}}>
                    Tipe Batu:
                  </Text>
                  <Text>Batu Gunung</Text>
                  <Text>Batu Kali</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Shop;
