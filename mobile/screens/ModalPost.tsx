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
import inicialDataPost from '../info/inicialDataPost';
import infoPost from '../info/infoPost';

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
          <View style={styles.container}>
               <View
                    style={{
                         height: Constants.statusBarHeight,
                         backgroundColor: '#ECECEC',
                    }}
               ></View>
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.header_container}>
                              <BackArrow navigation={navigation} />
                              <View style={styles.header}>
                                   <Date
                                        number={date}
                                        mounth={mounth}
                                        margin={15}
                                        marginRight={0}
                                   />
                                   <TitlePost
                                        title={title}
                                        width={130}
                                        marginLeft={'10%'}
                                        marginRight={'10%'}
                                   />
                                   <Pressable
                                        onPress={() => setFavorite(isFavorite ? false : true)}
                                   >
                                        <Image
                                             source={
                                                  isFavorite
                                                       ? require('../assets/modalIcons/onFavorite1.png')
                                                       : require('../assets/modalIcons/offFavorite.png')
                                             }
                                             style={styles.favorite_img}
                                        />
                                   </Pressable>
                              </View>
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
                         <View style={styles.separator} />
                         <View style={styles.comments_container}>
                              {comments.map((data) => {
                                   return (
                                        <Comment
                                             key={data.idComment}
                                             name={data.name}
                                             comment={data.comment}
                                        />
                                   );
                              })}
                         </View>
                    </ScrollView>
               </SafeAreaView>
               <InputComment
                    commentMessage={commentMessage}
                    setCommentMessage={setCommentMessage}
                    handleChange={handleChange}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          zIndex: 100,
          backgroundColor: '#ffff',
     },
     scroll_container: {
          flex: 1,
     },
     scroll: {
          width: '100%',
     },
     // ----------------------------//
     header_container: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          backgroundColor: '#ECECEC',
          borderRadius: 12,
     },
     // ----------------------------//
     header: {
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          backgroundColor: '#ECECEC',
          borderRadius: 12,
     },
     favorite_img: {
          width: 35,
          height: 35,
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
     // ----------------------------//

     separator: {
          height: 2,
          width: '100%',
     },
     // ----------------------------//
     comments_container: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#ffff',
     },
});
