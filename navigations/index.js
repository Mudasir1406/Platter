import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {SignIn , SignUp} from '../Screens';


const Stack = createStackNavigator();

export default AppContanier = () =>{
   return (
   <NavigationContainer>
        <Stack.Navigator>
            <Stack.screen name = "SignIn" component = {SignIn} options= {{headerShown : false}}/>
            <Stack.screen name = "SignUp" component = {SignUp} options= {{headerShown : false}}/>
            
            </Stack.Navigator>
    </NavigationContainer>
   )
}