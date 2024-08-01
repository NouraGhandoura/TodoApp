
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottoomTabs from './src/navigation';



const Stack = createStackNavigator();


function App() {
 
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
     
    
           <Stack.Screen
            name="Main"
            component={BottoomTabs}
            options={{ headerShown: false }}
          />
       
     
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>

  );
}



export default App;
