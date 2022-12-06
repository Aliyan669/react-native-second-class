import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './singleProduct';
import Api_data from './screens/api_data';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={Api_data} />
        <Stack.Screen name="Detail" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
