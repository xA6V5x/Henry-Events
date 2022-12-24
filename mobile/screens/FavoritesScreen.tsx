// import axios from 'axios';
// import { useEffect } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
// import { View } from '../components/Themed';
import CardFavorites from '../components/CardFavorites';
import { NavBar } from '../components/NavBar';
import { TitleDivision } from '../components/TitleDivision';
import { RootStackScreenProps } from '../types';
import infoHenry from '../constants/infoHenryPosts';

export default function FavoritesScreen({ navigation }: RootStackScreenProps<'Favorites'>) {
     //  useEffect(() => {
     //       axios.get(endpoint);
     //  });

     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision={'Favorites'} />
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.cards_container}>
                              <View style={{ height: Constants.statusBarHeight }}></View>
                              <TitleDivision title="Favorites" />
                              {infoHenry.map((data) => {
                                   return (
                                        <CardFavorites
                                             key={data.id}
                                             navigation={navigation}
                                             date={data.date}
                                             mounth={data.mounth}
                                             title={data.title}
                                             idPost={data.id}
                                             favorite={data.favorites}
                                        />
                                   );
                              })}
                         </View>
                    </ScrollView>
               </SafeAreaView>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#ffff',
     },
     scroll_container: {
          flex: 1,
          backgroundColor: '#ffff',
     },
     scroll: {
          width: '100%',
          backgroundColor: '#ffff',
     },
     cards_container: {
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#ffff',
     },
});
