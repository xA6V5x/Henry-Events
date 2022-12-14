import React, { useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { SvgXml } from 'react-native-svg';
import infoNav from '../info/NavBar.js';

type nameRoute = { name: string };

export function NavBar(navigation: any) {
     const [icon, setIcon] = useState('Home');

     const handleClick = ({ name }: nameRoute) => {
          setIcon(name);
          // navigation.navigate(name);
          navigation.navigation.push(name);
     };

     const xml = `<svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M1.885 12.048H8.41V19.994H14.587V12.048H21.141V32H14.587V24.17H8.41V32H1.885V12.048ZM24.9094 12.048H38.9164V16.456H31.9564V20.081H38.3074V23.735H31.9564V27.592H38.9164V32H24.9094V12.048Z" fill="black"/>
     <path d="M1 20H8.40944V19H14.5795V20H20.7808H31.9609V19.5H39V20V21.4118L31 22L27.5 22.5L24 23L20.5 23.5L17 24L13.5 24.5L10 25L6 26L1 28V20Z" fill="#FFFF01"/>
     </svg>
     `;

     return (
          <View style={styles.container}>
               <SvgXml xml={xml} width="100%" height="7%" style={styles.iconCompany} />
               {infoNav.map((data) => {
                    return (
                         <Pressable
                              key={data.name}
                              onPress={() => handleClick(data)}
                              style={styles.icon}
                         >
                              {/* <Text
                                   style={
                                        icon === data.name ? { color: 'blue' } : { color: 'black' }
                                   }
                              >
                                   {data.name}
                              </Text> */}
                              {data.name === 'Home' && (
                                   <Image
                                        source={require('../assets/navIcons/home.png')}
                                        style={{ width: 35, height: 35, marginTop: '15%' }}
                                   />
                              )}
                              {data.name === 'Talks' && (
                                   <Image
                                        source={require('../assets/navIcons/talks.png')}
                                        style={{ width: 50, height: 50, marginTop: '15%' }}
                                   />
                              )}
                              {data.name === 'Meetings' && (
                                   <Image
                                        source={require('../assets/navIcons/meetings.png')}
                                        style={{ width: 45, height: 45, marginTop: '10%' }}
                                   />
                              )}
                              {data.name === 'Favorites' && (
                                   <Image
                                        source={require('../assets/navIcons/favs.png')}
                                        style={{ width: 35, height: 35, marginTop: '20%' }}
                                   />
                              )}
                              {data.name === 'Settings' && (
                                   <Image
                                        source={require('../assets/navIcons/settings.png')}
                                        style={{ width: 37, height: 37, marginTop: '25%' }}
                                   />
                              )}
                         </Pressable>
                    );
               })}
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          // position: 'absolute',
          // paddingTop: '50%',
          // zIndex: 100,
          paddingTop: '5%',
          height: '100%',
          width: '16%',
          backgroundColor: '#FFFF01',
          alignItems: 'center',
     },
     iconCompany: {
          marginLeft: '3%',
     },
     icon: {
          marginTop: '16%',
          alignItems: 'center',
     },
});
