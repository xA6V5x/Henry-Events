// import axios from 'axios';
// import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardFavorites from '../components/CardFavorites';
import { NavBar } from '../components/NavBar';
import { View } from '../components/Themed';
import { TitleDivision } from '../components/TitleDivision';
import { RootStackScreenProps } from '../types';

export default function Favorites({ navigation }: RootStackScreenProps<'Favorites'>) {
     const infoHenry = [
          {
               id: '1213',
               date: '5',
               mounth: 'enero',
               title: 'Buenos Aires Bar Oculto 21hs',
               favorites: true,
               description:
                    'Hola chicos, nos encontraremos el día 20/10/2022 por la noche para celebrar año nuevo',
               link: 'https://goo.gl/maps/dGWai2KJmp24dp1F6',
               author: {
                    idUser: 'asdas564',
                    name: 'Agustin Ojeda',
               },
               people: [
                    { idUser: 'asdaasdsd', name: 'Juan' },
                    { idUser: 'asdasd', name: 'Juan' },
                    { idUser: 'asdasasd', name: 'Juan' },
                    { idUser: 'asdaasdsd', name: 'Juan' },
                    { idUser: 'asdaasdsd', name: 'Juan' },
                    { idUser: 'asdaFsd', name: 'Juan' },
                    { idUser: 'asdaASsqd', name: 'Pablo' },
               ],
               comments: [
                    {
                         idComment: 'asdasdasd',
                         idUser: 'asdasdcasq1',
                         name: 'Juan',
                         comment: 'Buenisimo tilin',
                    },
                    {
                         idComment: 'asdasdadahsd',
                         idUser: 'asdasdcasq1',
                         name: 'Uli',
                         comment: 'Habrá enanos? Sino no voy',
                    },
                    {
                         idComment: 'asdgasdasasd',
                         idUser: 'asdasdcasq1',
                         name: 'Chino',
                         comment: 'okaa',
                    },
                    {
                         idComment: 'asdasdashasd',
                         idUser: 'asdasdcasq1',
                         name: 'Rebe',
                         comment: 'okii',
                    },
                    {
                         idComment: 'asdasdahsasd',
                         idUser: 'asdasdcasq1',
                         name: 'Mary',
                         comment: 'dalee, nos vemos',
                    },
               ],
          },
     ];
     //  useEffect(() => {
     //       axios.get(endpoint);
     //  });

     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} />
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.cards_container}>
                              <TitleDivision title="Favorites" />
                              {infoHenry.map((data) => {
                                   return (
                                        <CardFavorites
                                             navigation={navigation}
                                             key={data.id}
                                             date={data.date}
                                             mounth={data.mounth}
                                             title={data.title}
                                             idPost={data.id}
                                             description={data.description}
                                             link={data.link}
                                             author={data.author}
                                             people={data.people}
                                             comments={data.comments}
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
