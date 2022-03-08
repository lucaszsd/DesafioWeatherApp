//Importações Externas
import { 
    Icon, 
    StyleService,
    useStyleSheet,
    TopNavigation,
    IconProps,
    TopNavigationAction,
    OverflowMenu,
    MenuItem,
    Text, 
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

const BackIcon = (props: IconProps) => <Icon {...props} name="plus-outline" />;


const cidades = [
    'Recife',
    'São Paulo',
    'Rio de Janeiro',
    'Salvador',
    'Porto Alegre'
]

 
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
 
   
    const UpdateAction = () => {
        const dispatch = useDispatch()
        
        return(
            <TopNavigationAction icon={UpdateIcon} onPress={() => dispatch(ControlActions.setLoading(true))} /> 
        )
        
    };

const TopNavigationHeader = (props: TopNavigationHeaderProps) => { 

    const dispatch = useDispatch()


    const [menuVisible, setMenuVisible] = React.useState(false);

    const control = useAppSelector(state => state.controlReducer)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const titulo = () =>{
        return(
            <Text>{control.cidade}</Text>
        )
    }

    const renderBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={toggleMenu}/>
    );
 
    const renderLeftActions = () => (
        <React.Fragment> 
          <OverflowMenu
            anchor={renderBackAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}>
                {
                    cidades.map(( item, index) => (
                        <MenuItem key = {index} title = {item} onPress = {() => dispatch(ControlActions.setCidade(item))}/>
                    ))
                } 
          </OverflowMenu> 
        </React.Fragment>
      );

    return(
        <TopNavigation
            title={props.title}
            alignment="center"
            accessoryLeft={renderLeftActions} 
            accessoryRight={UpdateAction} 
        /> 
    ) 
}

export default TopNavigationHeader;