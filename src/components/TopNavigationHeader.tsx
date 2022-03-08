//Importações Externas
import { 
    Icon, 
    StyleService,
    useStyleSheet,
    TopNavigation,
    IconProps,
    TopNavigationAction, 
  } from '@ui-kitten/components';
  import { View } from 'react-native';
  import React, { ReactText } from 'react';
  import { useAppSelector } from 'hooks/store';
import * as ControlActions from 'features/Control/controlSlice'
//Importações Internas
import { RouteNames } from '../routes/nav_types';
import NavigationService from 'routes/NavigationService';
import { useDispatch } from 'react-redux';

interface TopNavigationHeaderProps {
    title: ReactText;
    backButton?: Boolean;
}
 
const themedStyles = StyleService.create({
    cartAlert: { height: 8, width: 8, borderRadius: 8, backgroundColor: 'red', position: 'absolute', top: 2, right: 0 }, 
});

const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;
 
const UpdateIcon = (props: IconProps) => {

    

    const styles = useStyleSheet(themedStyles); 
    const cart = useAppSelector(state => state.shoppingCartReducer.shoppingCart); 
    const control = useAppSelector(state => state.controlReducer)
    return(
        <View>
            <Icon {...props} name="loader-outline" />
            {/* Só mostra o indicador caso tenha items no carrinho */}
            {cart.length > 0 && <View style = {styles.cartAlert}></View>}
        </View>
        )
    };
 
    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={() => NavigationService.goBack()}/> 
    );

    const UpdateAction = () => {
        const dispatch = useDispatch()
        
        return(
            <TopNavigationAction icon={UpdateIcon} onPress={() => dispatch(ControlActions.setLoading(true))} /> 
        )
        
    };

const TopNavigationHeader = (props: TopNavigationHeaderProps) => { 
    return(
        <TopNavigation
        title={props.title}
        alignment="center"
        accessoryLeft={props.backButton ? BackAction : undefined} 
        accessoryRight={UpdateAction} 
      /> 
    ) 
}

export default TopNavigationHeader;