// import axios from 'axios';
// import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { NavBar } from './NavBar';
import { View } from '../components/Themed';
import { TitleDivision } from './TitleDivision';
import infoHenry from '../info/infoHenryPosts';

type datesContainerProps = {
     nameDivision: string;
     endpoint: string;
     navigation: any;
};

export function DatesContainer({ nameDivision, endpoint, navigation }: datesContainerProps) {
     //  useEffect(() => {
     //       axios.get(endpoint);
     //  });

     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision={nameDivision} />
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.cards_container}>
                              <TitleDivision title={nameDivision} />
                              {infoHenry.map((data) => {
                                   return (
                                        <Card
                                             navigation={navigation}
                                             key={data.id}
                                             date={data.date}
                                             mounth={data.mounth}
                                             title={data.title}
                                             idPost={data.id}
                                             favorites={data.favorites}
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
