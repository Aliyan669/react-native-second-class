import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {global} from './globalstyle';
import logo from '../Assests/logo.jpg';
import email from '../Assests/email.jpg';
import password from '../Assests/password.jpg';
import profile from '../Assests/profile.jpg';

export default function Signup() {
  return (
    <View style={global.container2}>
      <View style={{alignItems: 'center'}}>
        <Image source={logo} style={global.image3} />
      </View>
      <Text style={global.heading2}>Welcome</Text>
      <Text style={global.heading3}>Create to your acccount</Text>
      <View style={global.bhai}>
        <View style={{flexDirection: 'row'}}>
          <View style={global.shadow2}>
            <Image source={profile} style={global.icon2} />
          </View>
          <TextInput style={global.input3} placeholder="Username" />
        </View>
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
          <TextInput style={global.input3} placeholder="Password" />
        </View>
      </View>
      <View style={{marginTop: 20, width: 270, height: 90, marginTop: 25}}>
        <TouchableOpacity style={global.touch}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold',marginLeft:30,marginBottom:5}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{marginTop: 60}}>
          Already have an account?
          <Text style={{color: '#b0226e'}}> Login here</Text>
        </Text>
      </View>
    </View>
  );
}
