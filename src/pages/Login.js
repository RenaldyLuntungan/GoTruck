import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleApp from '../img/GoTruckTitle.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: false});
    }, 4000);
  }
  componentWillUnmount() {
    console.log('==> component will unmount');
  }
  LoginFormFunction = () => {
    this.props.navigation.navigate('MyTabs');
  };
  RegistrationFormFunction = () => {
    this.props.navigation.navigate('Registration');
  };
  render() {
    const screenHeigth = Math.round(Dimensions.get('window').height);
    if (this.state.splash) {
      return (
        <View style={styles.splashComponent}>
          <Image source={TitleApp} style={styles.imageContainer} />
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={{height: screenHeigth}}>
          <View style={styles.topComponent} />
          <View style={styles.titleContainer}>
            <Image source={TitleApp} style={styles.imageContainer} />
          </View>

          <View style={styles.bottomComponent} />
          <View style={styles.contentWrapper}>
            <View style={styles.contentSpace} />
            <View style={styles.contentContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Username"
                  autoCorrect={false}
                  keyboardType="visible-password"
                />
                <Icon
                  name="user-o"
                  size={20}
                  color={'grey'}
                  style={styles.iconContainer}
                />
              </View>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCorrect={false}
                />
                <Icon
                  name="lock"
                  size={20}
                  color={'grey'}
                  style={styles.iconContainer}
                />
              </View>
            </View>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.buttonSignin}
                onPress={this.LoginFormFunction}>
                <Text style={styles.colorSignin}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.RegistrationFormFunction}>
                <Text>
                  New to GoTruck?{' '}
                  <Text style={styles.colorSignup}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  splashComponent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#c49d49',
  },
  topComponent: {
    width: '50%',
    height: '50%',
    backgroundColor: '#dbbb76',
    position: 'absolute',
    right: 0,
  },
  bottomComponent: {
    width: '50%',
    height: '50%',
    backgroundColor: '#c49d49',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },

  titleContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 100,
    backgroundColor: '#c49d49',
  },
  imageContainer: {
    width: 130,
    height: 30,
  },
  contentWrapper: {
    height: '50%',
    backgroundColor: '#dbbb76',
    borderTopLeftRadius: 100,
  },
  contentSpace: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  inputContainer: {
    height: 50,
    width: '70%',
  },
  textInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'grey',
    paddingLeft: 50,
    backgroundColor: '#f5f1e9',
  },
  iconContainer: {
    position: 'absolute',
    left: 20,
    top: 15,
  },
  buttonWrapper: {
    width: '100%',
    backgroundColor: '#dbbb76',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonSignin: {
    height: 50,
    width: '70%',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#c1912a',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1912a',
    marginBottom: 20,
  },
  colorSignin: {
    color: 'white',
    fontSize: 16,
  },
  colorSignup: {
    fontWeight: 'bold',
    color: '#c1912a',
  },
});
