import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconHome from 'react-native-vector-icons/Feather';
import Home from './src/pages/Home';
import Shop from './src/pages/Shop';
import Profile from './src/pages/Profile';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import PasirShop from './src/pages/PasirShop';
import TanahShop from './src/pages/TanahShop';
import BatuShop from './src/pages/BatuShop';
import PasirDetail from './src/pages/PasirDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#c49d49',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IconHome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color, size}) => (
            <IconHome name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <IconHome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen
          name="PasirShop"
          component={PasirShop}
          options={{headerShown: true, title: 'Pasir'}}
        />
        <Stack.Screen
          name="TanahShop"
          component={TanahShop}
          options={{headerShown: true, title: 'Tanah'}}
        />
        <Stack.Screen
          name="BatuShop"
          component={BatuShop}
          options={{headerShown: true, title: 'Batu'}}
        />
        <Stack.Screen
          name="PasirDetail"
          component={PasirDetail}
          options={{headerShown: true, title: 'Detail Pasir'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
