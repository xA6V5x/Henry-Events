import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import { NavBar } from './NavBar';
// import { View } from '../components/Themed';
import { TitleDivision } from './TitleDivision';
import axios from 'axios';

type DatesContainerProps = {
     nameDivision: string;
     endpoint: string;
     navigation: any;
};

type DataPost = {
     id: string;
     title: string;
     date: string;
     type: string;
}[];

export function DatesContainer({ nameDivision, endpoint, navigation }: DatesContainerProps) {
     const [dataPost, setDataPost] = useState<DataPost>();

     useEffect(() => {
          (async () => {
               const dataPost: DataPost = await axios.get(endpoint).then((json) => json.data);
               setDataPost(dataPost);
          })();
     }, []);

     return (
          <View style={styles.container}>
               <NavBar navigation={navigation} nameDivision={nameDivision} />
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.cards_container}>
                              <View style={{ height: Constants.statusBarHeight }}></View>
                              <TitleDivision title={nameDivision} />
                              {dataPost?.map((data) => {
                                   return (
                                        <Card
                                             navigation={navigation}
                                             key={data.id}
                                             idPost={data.id}
                                             date={data.date}
                                             title={data.title}
                                             type={data.type}
                                             favorites={true}
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
          backgroundColor: '#ffff',
     },
});
