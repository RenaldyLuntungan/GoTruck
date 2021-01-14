import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

class PasirDetail extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 60,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12}}>Tipe : Pasir</Text>
            <Text style={{fontSize: 18}}>Pasir Halus</Text>
          </View>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 60,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12}}>Harga Pasir / 5 Kubik</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.350.000</Text>
          </View>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 210,
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: 12, marginBottom: 10}}>
              Tarif Pengiriman / Kota
            </Text>
            <View
              style={{
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
              }}>
              <Text style={{fontSize: 16}}>Bitung</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.50.000</Text>
            </View>
            <View
              style={{
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16}}>Manado</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.100.000</Text>
            </View>
            <View
              style={{
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16}}>Tondano</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.100.000</Text>
            </View>
            <View
              style={{
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16}}>Tomohon</Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.150.000</Text>
            </View>
          </View>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 60,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12}}>Kontak</Text>
            <Text style={{fontSize: 16}}>Ray : 081231412712</Text>
          </View>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 60,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12}}>Kendaraan</Text>
            <Text style={{fontSize: 16}}>Toyota Dyna - Merah</Text>
          </View>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 60,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12}}>Nomor Kendaraan</Text>
            <Text style={{fontSize: 16}}>DB 8898 CY</Text>
          </View>
          <View
            style={{height: 10, width: '100%', backgroundColor: '#f5f1e8'}}
          />
          <View
            style={{
              height: 30,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12}}>Catatan</Text>
          </View>
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
              justifyContent: 'flex-start',
            }}>
            <Text>
              Kami akan menelpon kepada pembeli sebelum kami menurunkan pasir
              yang dibeli untuk konfirmasi tempat kembali
            </Text>
          </View>
          <View
            style={{height: 300, width: '100%', backgroundColor: '#f5f1e8'}}
          />
        </View>
      </ScrollView>
    );
  }
}
export default PasirDetail;
