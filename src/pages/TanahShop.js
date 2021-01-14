import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconFilter from 'react-native-vector-icons/Ionicons';
import IconSort from 'react-native-vector-icons/MaterialIcons';

class TanahShop extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: 100,
            width: '100%',
            backgroundColor: 'white',
            borderBottomWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              height: 100,
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.250.000</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Tanah</Text>
            <Text>Tanah Timbun</Text>
          </View>
          <View
            style={{
              height: 100,
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            }}>
            <Text>Penjual Louis</Text>
            <Text>Kontak - 081231412151</Text>
            <Text style={{color: '#d14a41', fontWeight: 'bold'}}>
              Lihat Detail
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#c49d49',
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            borderTopWidth: 1,
            borderColor: '#c49d49',
          }}>
          <TouchableOpacity
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 0.5,
              borderColor: 'white',
              flexDirection: 'row',
            }}>
            <IconFilter name="filter" size={30} color={'white'} />
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Filter
              </Text>
              <Text style={{color: 'white'}}>Tanah Timbun</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftWidth: 0.5,
              borderColor: 'white',
              flexDirection: 'row',
            }}>
            <IconSort name="sort" size={30} color={'white'} />
            <View
              style={{
                marginLeft: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Urutkan
              </Text>
              <Text style={{color: 'white'}}>Termurah</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default TanahShop;
