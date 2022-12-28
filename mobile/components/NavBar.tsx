import Constants from 'expo-constants';
import { Image, Pressable, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { SvgXml } from 'react-native-svg';
import infoNav from '../constants/NavBar.js';

type NavBarProps = {
     navigation: any;
     nameDivision: string;
};

type NameRoute = { name: string };

export function NavBar({ navigation, nameDivision }: NavBarProps) {
     const handleClick = ({ name }: NameRoute) => {
          nameDivision != name ? navigation.push(name) : null;
     };

     const xml = `<svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M1.885 12.048H8.41V19.994H14.587V12.048H21.141V32H14.587V24.17H8.41V32H1.885V12.048ZM24.9094 12.048H38.9164V16.456H31.9564V20.081H38.3074V23.735H31.9564V27.592H38.9164V32H24.9094V12.048Z" fill="black"/>
     <path d="M1 20H8.40944V19H14.5795V20H20.7808H31.9609V19.5H39V20V21.4118L31 22L27.5 22.5L24 23L20.5 23.5L17 24L13.5 24.5L10 25L6 26L1 28V20Z" fill="#FFFF01"/>
     </svg>
     `;

     return (
          <View style={styles.container}>
               <View style={{ height: Constants.statusBarHeight }}></View>
               <SvgXml xml={xml} width="100%" height="7%" style={styles.iconCompany} />
               {infoNav.map((data) => {
                    return (
                         <Pressable
                              key={data.name}
                              onPress={() => handleClick(data)}
                              style={styles.icon}
                         >
                              {data.name === 'Home' && (
                                   <Image
                                        source={
                                             data.name === nameDivision
                                                  ? require('../assets/navIcons/onHome.png')
                                                  : require('../assets/navIcons/offHome.png')
                                        }
                                        style={styles.iconHome}
                                   />
                              )}
                              {data.name === 'Talks' && (
                                   <Image
                                        source={
                                             data.name === nameDivision
                                                  ? require('../assets/navIcons/onTalks.png')
                                                  : require('../assets/navIcons/offTalks.png')
                                        }
                                        style={styles.iconTalks}
                                   />
                              )}
                              {data.name === 'Meetings' && (
                                   <Image
                                        source={
                                             data.name === nameDivision
                                                  ? require('../assets/navIcons/onMeetings.png')
                                                  : require('../assets/navIcons/offMeetings.png')
                                        }
                                        style={styles.iconMeetings}
                                   />
                              )}
                              {data.name === 'Favorites' && (
                                   <Image
                                        source={
                                             data.name === nameDivision
                                                  ? require('../assets/navIcons/onFavs.png')
                                                  : require('../assets/navIcons/offFavs.png')
                                        }
                                        style={styles.iconFavs}
                                   />
                              )}
                              {data.name === 'Settings' && (
                                   <Image
                                        source={
                                             data.name === nameDivision
                                                  ? require('../assets/navIcons/onSettings.png')
                                                  : require('../assets/navIcons/offSettings.png')
                                        }
                                        style={styles.iconSettings}
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
          paddingTop: '4%',
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
     iconHome: { width: 35, height: 35, marginTop: '15%' },
     iconTalks: { width: 50, height: 50, marginTop: '15%' },
     iconMeetings: { width: 45, height: 45, marginTop: '10%' },
     iconFavs: { width: 35, height: 35, marginTop: '20%' },
     iconSettings: { width: 37, height: 37, marginTop: '28%' },
});
