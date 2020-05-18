import React from 'react';

import {View ,Text,StyleSheet} from 'react-native';
import {UserInput , PrimaryButton , Heading} from '../Components';

export default SignIn = ({navigetion}) =>{
    return(
        <View style={Style.contanier}>
            <Heading
                text="Prattle"
            />

            <UserInput
               placeholder = "UserName"
               
               onChange = {() => {}}
            />
             <UserInput
               placeholder = "Password"
               onChange = {() => {}}
               password={true}
            />
            <PrimaryButton
                title = "SignIn"
                onPress = {() =>navigetion.navigate ('SignUp') }
                
            />
            <PrimaryButton
                title = "Creat Account"
                onPress = {() =>navigetion.navigate ('SignUp') }
                
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
}
);
