import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { View } from '../components/Themed';
import { Assist } from '../components/Assist';
import { BackArrow } from '../components/BackArrow';
import { Comment } from '../components/Comment';
import { Date } from '../components/Date';
import { InputComment } from '../components/InputComment';
import { People } from '../components/People';
import { TitlePost } from '../components/TitlePost';
import { User } from '../components/User';
import Constants from 'expo-constants';
import inicialDataPost from '../constants/inicialDataPost';
import infoPost from '../constants/infoPost';
import { CommentsContainer } from '../components/CommentsContainer';
import { Separator } from '../components/Separator';
import { HeaderPost } from '../components/HeaderPost';

type modalProps = {
     navigation: any;

     route: {
          params: {
               idPost: string;
               favoriteInicial: boolean;
          };
     };
};

type dataPost = {
     title: string;
     date: number | string;
     mounth: string;
     description: string;
     link?: string;
     author: {
          idUser: string;
          name: string;
          img?: string;
     };
     people: { idUser: string; name: string; img?: string }[];
     comments: { idComment: string; idUser: string; name: string; img?: string; comment: string }[];
};

export default function ModalScreen({ navigation, route }: modalProps) {
     const { idPost, favoriteInicial } = route.params;

     const [dataPost, setDataPost] = useState<dataPost>(inicialDataPost);

     const { title, date, mounth, description, link, author, people, comments }: dataPost =
          dataPost;

     const [isAssist, setAssist] = useState(false);

     const [isFavorite, setFavorite] = useState(favoriteInicial);

     const [commentMessage, setCommentMessage] = useState('');

     useEffect(() => {
          (async () => {
               //      const dataPost: dataPost = await axios
               //           .get(`https://${idPost}`)
               //           .then((json) => json.data);
               setDataPost(infoPost);
          })();
     }, [idPost]);

     function handleChange(e: string) {
          setCommentMessage(e);
     }

     const handleSetAssist = (boolean: boolean) => {
          setAssist(boolean);
          //   axios.put('https://', idUser)
     };

     return (
          <SafeAreaView style={styles.scroll_container}>
               <ScrollView style={styles.scroll}>
                    <View style={styles.header_container}>
                         <BackArrow navigation={navigation} />
                         <HeaderPost
                              title={title}
                              date={date}
                              mounth={mounth}
                              isFavorite={isFavorite}
                              setFavorite={setFavorite}
                         />
                         <View style={styles.description_container}>
                              <User name={author.name} img={author.img} marginBottom={5} />
                              <Text style={styles.description}>{description}</Text>
                         </View>
                         <View style={styles.people_assist}>
                              <Assist isAssist={isAssist} setAssist={handleSetAssist} />
                              <People
                                   navigation={navigation}
                                   people={people}
                                   total={isAssist ? people.length + 1 : people.length}
                              />
                         </View>
                    </View>
                    <Separator />
                    <CommentsContainer comments={comments} />
               </ScrollView>
               <InputComment
                    commentMessage={commentMessage}
                    setCommentMessage={setCommentMessage}
                    handleChange={handleChange}
               />
          </SafeAreaView>
     );
}

const styles = StyleSheet.create({
     scroll_container: {
          flex: 1,
     },
     scroll: {
          width: '100%',
     },
     // ----------------------------//
     header_container: {
          paddingTop: Constants.statusBarHeight,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          backgroundColor: '#ECECEC',
     },
     // ----------------------------//
     description_container: { backgroundColor: '#ECECEC', width: '84%' },
     description: {
          fontSize: 15,
     },
     // ----------------------------//
     people_assist: {
          marginTop: 21,
          marginBottom: 21,
          width: '85%',
          backgroundColor: '#ECECEC',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
});
