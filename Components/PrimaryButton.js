import React from 'react';
import {Button} from 'react-native';

export default PrimaryButton = ({title,onPress}) =>(
    <Button 
        onPress={onPress}
        title={title}
        colour= 'blue'
    />
)