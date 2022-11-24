import React from 'react';
import {ScrollView,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {styles} from './styles';

const Favorites=()=>{
return (
    <SafeAreaView>
        <ScrollView style={styles.container}>
            <Text>Favorites</Text>
        </ScrollView>
    </SafeAreaView>
)
}

export default React.memo(Favorites);