import React from 'react';
import {View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';
import styles from './screens/styling';


function SingleProduct({navigation, route}) {
  console.log(route.params);
  let obj = route.params;
  return (
    <>
      <View style={[styles.bgWhite, styles.h100, styles.p2]}>
        <View style={[styles.alignItemsCenter]}>
        <Image source={{uri: obj.image}} style={{height: 400, width: '100%'}} />
        </View>
        <Text style={[styles.fs2, styles.py1, styles.textPrimary]}>
          {obj.title}
        </Text>
        <ScrollView>
          <Text style={[styles.fs6]}>{obj.description}</Text>
          <Text
            style={[
              styles.bgPrimary,
              styles.textWhite,
              styles.p2,
              styles.rounded,
              styles.fs4,
              styles.my2,
            ]}>
            {obj.category}
          </Text>
        
          <Text style={[styles.fs3, styles.textSuccess,]}>Rs: {obj.price}/-</Text>
        </ScrollView>
      </View>
    </>
  );
}
export default SingleProduct;