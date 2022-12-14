// import axios from 'axios';
// import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { NavBar } from './NavBar';
import { Text, View } from '../components/Themed';
import { TitleDivision } from './TitleDivision';
import { RootStackScreenProps } from '../types';

type datesContainerProps = {
     name: string;
     endpoint: string;
     navigation: any;
};

export function DatesContainer({ name, endpoint, navigation }: datesContainerProps) {
     const infoHenry = [
          {
               id: '1213',
               date: '5',
               mounth: 'enero',
               title: 'Buenos Aires Bar Oculto 21hs',
               favorites: false,
               description:
                    'Hola chicos, nos encontraremos el día 20/10/2022 por la noche para celebrar año nuevo',
               link: 'https://goo.gl/maps/dGWai2KJmp24dp1F6',
               author: {
                    idUser: 'asdas564',
                    name: 'Agustin Ojeda',
               },
               people: [
                    { idUser: 'asdasd', name: 'Juan' },
                    { idUser: 'asdasqd', name: 'Pablo' },
               ],
               comments: [
                    {
                         idComment: 'asdasdasd',
                         idUser: 'asdasdcasq1',
                         name: 'Juan',
                         comment: 'Buenisimo tilin',
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
                              <TitleDivision title={name} />
                              {infoHenry.map((data) => {
                                   return (
                                        <Card
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
