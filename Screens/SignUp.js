import React from 'react';

import {View ,Text,StyleSheet} from 'react-native';
import {UserInput,PrimaryButton,Heading} from '../Components';

export default SignIn = ({navigetion}) =>{
    return(
        <View style={Style.contanier}>
            <Heading
                text="Prattle"
            />

            <UserInput
               placeholder = "First Name"
               
               onChange = {() => {}}
            />
            <UserInput
               placeholder = "Last Name"
               
               onChange = {() => {}}
            />
             <UserInput
               placeholder = "Password"
               onChange = {() => {}}
               password={true}
            />
            <UserInput
               placeholder = "Confirm Password"
               onChange = {() => {}}
               password={true}
            />
            <PrimaryButton
                title = "SignUp"
                onPress = {() =>navigetion.navigate ('SignUp') }
                
            />
            <PrimaryButton
                title = "SignIn"
                onPress = {() =>navigetion.navigate ('SignIn') }
                
            />


        </View>

        
    )
}
const style = StyleSheet.create({
    contanier:{
        flex :1,
        justifyContent : 'center',
        alignItems: 'center'
    }

})