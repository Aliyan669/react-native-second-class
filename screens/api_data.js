import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styling';
import axios from 'axios';
import {useEffect, useState} from 'react';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function Api_data({navigation}) {
  const [productList, setProductList] = useState([]);
  let getData = () => {
    let api = 'https://fakestoreapi.com/products';
    axios
      .get(api)
      .then(res => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let move = e => {
    navigation.navigate('Detail', e);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={[styles.bgPrimary, styles.h100]}>
        <View
          style={[
            styles.bgWhite,
            styles.p2,
            styles.py3,
            {borderBottomRightRadius: 15, flex: 1},
          ]}>
          <View>
            <Text style={[styles.textPrimary, styles.fs2]}>
              Available Products
            </Text>
            <View style={[styles.flexRow, styles.py2]}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textWhite}>See More</Text>
              </TouchableOpacity>
              {/* <Icon color={styles._dark} size={30} name="calendar-today" /> */}
            </View>
          </View>
        </View>
        <View style={[{flex: 7}]}>
          <ScrollView>
            <View
              style={[
                styles.w100,
                {height: '100%'},
                styles.flexRow,
                styles.flexWrap,
                styles.justifyContentBetween,
                styles.alignItemsCenter,
                styles.p1
              ]}>
              {productList &&
                productList.map((e, i) => (
                  <TouchableOpacity
                    onPress={() => move(e)}
                    style={[
                      styles.bgWhite,
                   styles.my1,
                      styles.rounded,
                      {width: ' 31%'},
                    ]}
                    key={i}>
                    <View style={[styles.w100, styles.alignItemsCenter]}>
                      <Image
                        resizeMode="cover"
                        style={[
                          {width: '90%', height: 130},
                          styles.rounded,
                          styles.mt1,
                        ]}
                        source={{uri: e.image}}
                      />
                    </View>
                    <View style={styles.p1}>
                      <Text numberOfLines={1}>{e.title}</Text>
                      <Text style={[styles.textDanger, styles.fs6]}>
                        Rs: {e.price}/-
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
export default Api_data;
