import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
// import { View } from '../components/Themed';
import { BackArrow } from '../components/BackArrow';
import { InputComment } from '../components/InputComment';
import Constants from 'expo-constants';
import inicialDataPost from '../constants/inicialDataPost';
import infoPost from '../constants/infoPost';
import { CommentsContainer } from '../components/CommentsContainer';
import { Separator } from '../components/Separator';
import { HeaderPost } from '../components/HeaderPost';
import { DescriptionPost } from '../components/DescriptionPost';
import { PeopleAssistPost } from '../components/PeopleAssistPost';

type ModalProps = {
     navigation: any;

     route: {
          params: {
               idPost: string;
               type: string;
               favoriteInicial: boolean;
          };
     };
};

type DataPost = {
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

export default function ModalPostScreen({ navigation, route }: ModalProps) {
     const { idPost, type, favoriteInicial } = route.params;

     const [dataPost, setDataPost] = useState<DataPost>(inicialDataPost);

     const { title, date, mounth, description, link, author, people, comments }: DataPost =
          dataPost;

     const [isAssist, setAssist] = useState(false);

     const [isFavorite, setFavorite] = useState(favoriteInicial);

     const [commentMessage, setCommentMessage] = useState('');

     const typePedido = { type: type };

     useEffect(() => {
          (async () => {
               // const dataPost: DataPost = await axios
               //      .get(`https://henryevent.onrender.com/home/${idPost}`, typePedido)
               //      .then((json) => json.data);
               // setDataPost(dataPost);
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
                         <DescriptionPost
                              name={author.name}
                              img={author.img}
                              description={description}
                         />
                         <PeopleAssistPost
                              navigation={navigation}
                              people={people}
                              total={isAssist ? people.length + 1 : people.length}
                              isAssist={isAssist}
                              setAssist={handleSetAssist}
                         />
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
});
