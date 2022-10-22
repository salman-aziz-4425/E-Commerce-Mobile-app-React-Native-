import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar, Text } from 'native-base';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import OrderScreen from './src/Screens/OrderScreen';
import BottomNav from './src/Navigations/BottomNav';
import SplashScreen from './src/Screens/SplashScreen';
import { Provider } from 'react-redux'
// import SideNav from './src/Navigations/SideNav';
import {store} from './src/features/store'
import 'react-native-gesture-handler';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <Provider store={store}>
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown:false, }}>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}


{/* <NavigationContainer>
        <StatusBar hidden={true}/>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: flase, }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer> */}