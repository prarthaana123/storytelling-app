import * as React from 'react';
import { createDrawerNavigater } from '@react-navigation/drawer';
import TabNavigater  from './TabNavigator';
import  Profile  from '../screens/Profile';

const Drawer =createDrawerNavigater();
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="home"component={TabNavigator}/>
            <Drawer.Screen name="profile"component={TabNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator