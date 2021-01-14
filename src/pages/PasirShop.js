import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import IconFilter from 'react-native-vector-icons/Ionicons';
import IconSort from 'react-native-vector-icons/MaterialIcons';

class PasirShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isModalVisibleSort: false,
    };
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toggleModalSort = () => {
    this.setState({isModalVisibleSort: !this.state.isModalVisibleSort});
  };
  detailFormFunction = () => {
    this.props.navigation.navigate('PasirDetail');
  };
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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.350.000</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pasir</Text>
            <Text>Pasir Halus</Text>
          </View>
          <View
            style={{
              height: 100,
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            }}>
            <Text>Penjual Ray</Text>
            <Text>Kontak - 081231412712</Text>
            <TouchableOpacity onPress={this.detailFormFunction}>
              <Text style={{color: '#d14a41', fontWeight: 'bold'}}>
                Lihat Detail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Rp.365.000</Text>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pasir</Text>
            <Text>Pasir Halus</Text>
          </View>
          <View
            style={{
              height: 100,
              alignItems: 'flex-end',
              justifyContent: 'space-around',
            }}>
            <Text>Penjual Aldy</Text>
            <Text>Kontak - 081243467912</Text>
            <TouchableOpacity>
              <Text style={{color: '#d14a41', fontWeight: 'bold'}}>
                Lihat Detail
              </Text>
            </TouchableOpacity>
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
            }}
            onPress={this.toggleModal}>
            <IconFilter name="filter" size={30} color={'white'} />
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Filter
              </Text>
              <Text style={{color: 'white'}}>Pasir Halus</Text>
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
            }}
            onPress={this.toggleModalSort}>
            <IconSort name="sort" size={30} color={'white'} />
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Urutkan
              </Text>
              <Text style={{color: 'white'}}>Termurah</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({isModalVisible: false})}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
            <View
              style={{
                height: 200,
                backgroundColor: 'white',
                paddingTop: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Filter</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 30,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    marginLeft: 10,
                    marginBottom: 10,
                    fontWeight: 'bold',
                  }}>
                  Tipe Pasir :
                </Text>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 30,
                    borderBottomWidth: 0.5,
                    marginVertical: 10,
                  }}>
                  <Text style={{marginLeft: 30, color: '#c1912a'}}>
                    Pasir Halus
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 30,
                    borderBottomWidth: 0.5,
                  }}>
                  <Text style={{marginLeft: 30}}>Pasir Kasar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isModalVisibleSort}
          onBackdropPress={() => this.setState({isModalVisibleSort: false})}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}>
          <View style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
            <View
              style={{
                height: 200,
                backgroundColor: 'white',
                paddingTop: 20,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sort</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 30,
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 30,
                    borderBottomWidth: 0.5,
                    marginVertical: 10,
                  }}>
                  <Text style={{marginLeft: 30, color: '#c1912a'}}>
                    Termurah
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: 30,
                    borderBottomWidth: 0.5,
                  }}>
                  <Text style={{marginLeft: 30}}>Termahal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
export default PasirShop;
