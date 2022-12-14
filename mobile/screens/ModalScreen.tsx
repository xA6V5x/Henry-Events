import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Platform, Pressable, StyleSheet } from 'react-native';
import { Date } from '../components/Date';
import { Text, View } from '../components/Themed';
import { TitlePost } from '../components/TitlePost';
import { RootStackParamList, RootStackScreenProps } from '../types';
import Constants from 'expo-constants';

type modalProps = {
     date: number | string;
     mounth: string;
     title: string;
     isFavorite: boolean;
     setFavorite: (n: boolean) => void;
     closeModal: (n: boolean) => void;
};

type modalPropsParams = {
     route: {
          params: {
               date: number | string;
               mounth: string;
               title: string;
               description: string;
               isFavorite: boolean;
               setFavorite: (n: boolean) => void;
               closeModal: (n: boolean) => void;
          };
     };
     navigation: any;
};

export default function ModalScreen({ navigation, route }: modalPropsParams) {
     //      {
     //      date,
     //      mounth,
     //      title,
     //      isFavorite,
     //      setFavorite,
     //      closeModal,
     // }: modalProps)

     // { navigation }: RootStackScreenProps<'Modal'>

     const { date, mounth, title, description, isFavorite, setFavorite, closeModal } = route.params;

     const handleError = () => {
          navigation.navigation.replace('NotFound');
     };

     return date && mounth && title ? (
          <View style={styles.container}>
               <View
                    style={{
                         height: Constants.statusBarHeight,
                         width: '100%',
                         backgroundColor: '#ECECEC',
                    }}
               ></View>
               <View style={styles.header_container}>
                    <View style={styles.header}>
                         <Date number={date} mounth={mounth} margin={15} />
                         <TitlePost title={title} width="58%" />
                         <Pressable
                              onPress={() => setFavorite(isFavorite ? false : true)}
                              style={styles.favorite_button}
                         >
                              {isFavorite === false ? (
                                   <Image
                                        source={require('../assets/modalIcons/offFavorite.png')}
                                        style={styles.favorite_img}
                                   />
                              ) : (
                                   <Image
                                        source={require('../assets/modalIcons/onFavorite.png')}
                                        style={styles.favorite_img}
                                   />
                              )}
                         </Pressable>
                    </View>
               </View>
               <Text>{description}</Text>
               <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
               <Pressable onPress={() => closeModal(false)}>
                    <Text>Cerrar</Text>
               </Pressable>
          </View>
   
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          zIndex: 100,
     },
     header_container: {
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
          backgroundColor: '#ECECEC',
          borderRadius: 12,
     },
     header: {
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
          backgroundColor: '#ECECEC',
          borderRadius: 12,
     },
     favorite_button: {
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 100,
     },
     favorite_img: {
          width: 25,
          height: 25,
     },
     title: {
          fontSize: 20,
          fontWeight: 'bold',
     },
     separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
     },
});
