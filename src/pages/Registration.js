import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import TitleApp from '../img/GoTruckTitle.png';

class Registration extends Component {
  static navigationOptions = {
    title: 'Registration',
  };
  LoginFormFunction = () => {
    Alert.alert('Registrasi', 'Registrasi Berhasil', [
      {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
    ]);
  };
  render() {
    const {goBack} = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <View style={styles.titleContainer} />
          <View style={styles.titleWrapper}>
            <Image source={TitleApp} style={{width: 130, height: 30}} />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>First name *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Last name *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Country *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Province *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>City *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Phone *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Email *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Username *</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Password *</Text>
              <TextInput style={styles.inputText} secureTextEntry={true} />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.buttonSignup}
                onPress={this.LoginFormFunction}>
                <Text style={styles.colorSignup}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={(this.LoginFormFunction, () => goBack(null))}>
                <Text style={styles.colorCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Registration;

const styles = StyleSheet.create({
  greenCircle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#c49d49',
    position: 'absolute',
  },

  titleContainer: {
    width: '100%',
    height: 150,
  },
  titleWrapper: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    backgroundColor: '#c49d49',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: '#f5f1e9',
    paddingTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  inputContainer: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 10,
  },
  inputText: {
    width: '100%',
    height: 40,
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
  inputContent: {
    color: 'grey',
    marginBottom: 5,
  },
  buttonSignup: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#c1912a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1912a',
    marginTop: 40,
    marginBottom: 20,
  },
  colorSignup: {
    color: 'white',
    fontSize: 16,
  },
  buttonCancel: {
    alignItems: 'center',
    marginBottom: 40,
  },
  colorCancel: {
    color: '#d14a41',
  },
});
