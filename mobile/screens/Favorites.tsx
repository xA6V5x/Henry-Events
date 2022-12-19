// import axios from 'axios';
// import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardFavorites from '../components/CardFavorites';
import { NavBar } from '../components/NavBar';
import { View } from '../components/Themed';
import { TitleDivision } from '../components/TitleDivision';
import { RootStackScreenProps } from '../types';
import infoHenry from '../info/infoHenryPosts';

export default function Favorites({ navigation }: RootStackScreenProps<'Favorites'>) {
     //  useEffect(() => {
     //       axios.get(endpoint);
     //  });

     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision={'Favorites'} />
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.cards_container}>
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
     },
     scroll_container: {
          flex: 1,
     },
     scroll: {
          width: '100%',
     },
     cards_container: {
          alignItems: 'center',
          width: '100%',
     },
});
