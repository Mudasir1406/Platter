import React from  'react';
import {Text,StyleSheet} from 'react-native';
export default Heading =({Text})=>(
    <Text style={styles.Heading}>
        {Text}
    </Text>   
);


const styles = StyleSheet.create({
    Heading: {
        fontSize : 30,
        fontWeight : 'bold',
        color : 'black',
        textAlign : 'center'
    }
})