import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TitleApp from '../img/GoTruckTitle.png';

class Profile extends Component {
  render() {
    const screenHeigth = Math.round(Dimensions.get('window').height);
    return (
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.titleContainer} />
          <View style={styles.titleWrapper}>
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
              width: '100%',
              height: 40,
              backgroundColor: '#c49d49',
              position: 'absolute',
              top: 100,
              right: 0,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              paddingTop: 30,
              borderTopRightRadius: 40,
              height: screenHeigth,
            }}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>First name</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="Renaldy Louis"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Last name</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="Luntungan"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Country</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="Indonesia"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Province</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="Sulawesi Utara"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>City</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="Bitung"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Phone</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="081243467912"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputContent}>Email</Text>
              <TextInput
                style={styles.inputText}
                autoCorrect={false}
                keyboardType="visible-password"
                defaultValue="renaldy@gmail.com"
              />
            </View>

            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.buttonSignup} disabled={false}>
                <Text style={styles.colorSignup}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  greenCircle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#c49d49',
    position: 'absolute',
  },

  titleContainer: {
    width: '100%',
    height: 100,
  },
  titleWrapper: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    backgroundColor: '#c49d49',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomLeftRadius: 40,
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingTop: 30,
    borderTopRightRadius: 40,
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
    color: 'blue',
  },
});
