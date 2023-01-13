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
               title: string;
               date: string;
          };
     };
};

type DataPost = {
     type: string;
     description: string;
     link?: string;
     user_event: {
          idUser: string;
          nickName: string;
          img?: string;
     };
     people_assist: { idUser?: string; name?: string; img?: string }[];
     comments: { idComment: string; idUser: string; name: string; img?: string; comment: string }[];
};

export default function ModalPostScreen({ navigation, route }: ModalProps) {
     const { idPost, type, title, date } = route.params;

     const [dataPost, setDataPost] = useState<DataPost>(inicialDataPost);

     const { description, link, user_event, people_assist, comments }: DataPost = dataPost;

     const [isAssist, setAssist] = useState(false);

     const [isFavorite, setFavorite] = useState(false);

     const [commentMessage, setCommentMessage] = useState('');

     const payload = { type: type };

     useEffect(() => {
          (async () => {
               try {
                    const dataPost: DataPost = await axios
                         .post(`https://henryevent.onrender.com/home/${idPost}`, payload)
                         .then((json) => json.data);
                    setDataPost(dataPost);
                    // setDataPost(infoPost);
               } catch (error) {
                    console.log(error);
               }
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
                              isFavorite={isFavorite}
                              setFavorite={setFavorite}
                         />
                         <DescriptionPost
                              type={type}
                              name={user_event.nickName}
                              img={user_event.img}
                              description={description}
                              link={link}
                         />
                         <PeopleAssistPost
                              navigation={navigation}
                              people={people_assist}
                              total={isAssist ? people_assist.length + 1 : people_assist.length}
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
          backgroundColor: '#ffff',
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
