import { Pressable, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { Text, View } from '../components/Themed';

export default function Meetings() {
     const infoHenry = [
          { id: '1213', date: '7', mounth: 'marzo', title: 'Se gradua la cohorte 350b' },
          {
               id: '1asd213',
               date: '27',
               mounth: 'febrero',
               title: 'Exposicion de proyectos finales',
          },
          { id: '12asda13', date: '12', mounth: 'diciembre', title: 'Ciberseguridad con Midudev' },
          { id: '12asds13', date: '12', mounth: 'diciembre', title: 'Ciberseguridad con Midudev' },
          { id: '12asd1f3', date: '12', mounth: 'diciembre', title: 'Ciberseguridad con Midudev' },
          { id: '12asd1b3', date: '12', mounth: 'diciembre', title: 'Ciberseguridad con Midudev' },
     ];

     return (
          <View style={styles.container}>
               <NavBar />
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.cards_container}>
                              <Text style={styles.title}>Meetings</Text>
                              {infoHenry.map((data) => {
                                   return (
                                        <Card
                                             key={data.id}
                                             date={data.date}
                                             mounth={data.mounth}
                                             title={data.title}
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
     title: {
          margin: 30,
          marginBottom: 23,
          fontSize: 28,
          fontWeight: 'bold',
     },
     separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
     },
});
