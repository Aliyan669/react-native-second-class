import React from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from "axios";

export default function Api_Data() {
  const [Data, setData] = useState([])
  
  let getData = () => {
      axios.get("https://fakestoreapi.com/products")
      .then((success) => {console.log(success)})
      .catch((error) => { console.log(error) })
  }
  useEffect(() => {
      getData()
  }, [])
  return (
    <>
    </>
  )
}
