import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {global} from './globalstyle';
import logo from '../Assests/logo.jpg';
import email from '../Assests/email.jpg';
import password from '../Assests/password.jpg';

export default function Login() {
  return (
    <View style={global.container2}>
      <View style={{alignItems: 'center'}}>
        <Image source={logo} style={global.image2} />
      </View>
      <Text style={global.heading2}>Welcome Back!</Text>
      <Text style={global.heading3}>Login to your acccount</Text>
      <View style={global.bhai}>
        <View style={{flexDirection: 'row'}}>
          <View style={global.shadow}>
            <Image source={email} style={global.icon} />
          </View>
          <TextInput style={global.input3} placeholder="Email" />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={global.shadow}>
            <Image source={password} style={global.icon} />
          </View>
          <TextInput
            style={global.input3}
            placeholder="Password"
            secureTextEntry={true}
            maxLength={8}
          />
        </View>
      </View>
      <View style={{alignItems: 'flex-end', marginRight: 30, marginTop: 10}}>
        <Text style={{color: '#b0226e'}}>Forget Password</Text>
      </View>
      <View style={{marginTop: 20, width: 270, height: 90, marginTop: 25}}>
        <TouchableOpacity style={global.touch}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
              marginLeft: 37,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 100}}>
          Don't have an account ?{' '}
          <Text style={{color: '#b0226e'}}>Sign up here</Text>
        </Text>
      </View>
    </View>
  );
}
