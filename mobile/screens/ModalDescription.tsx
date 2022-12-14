import { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Assist } from '../components/Assist';
import { Date } from '../components/Date';
import { InputComment } from '../components/InputComment';
import { People } from '../components/People';
import { Text, View } from '../components/Themed';
import { TitlePost } from '../components/TitlePost';
import { User } from '../components/User';

type modalProps = {
     navigation: any;
     idPost: string;
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
     //--------------//
     isFavorite: boolean;
     setFavorite: (n: boolean) => void;
     closeModal: (n: boolean) => void;
};

export default function ModalDescription({
     navigation,
     idPost,
     title,
     date,
     mounth,
     description,
     link,
     author,
     people,
     comments,
     isFavorite,
     setFavorite,
     closeModal,
}: modalProps) {
     const [isAssist, setAssist] = useState(false);

     const [commentMessage, setCommentMessage] = useState('');

     function handleChange(e: string) {
          setCommentMessage(e);
     }

     const handleSetAssist = (boolean: boolean) => {
          // navigation.navigation('PeopleScren');
          setAssist(boolean);
          //   axios.put('https://', boolean)
     };

     return (
          <View style={styles.container}>
               <SafeAreaView style={styles.scroll_container}>
                    <ScrollView style={styles.scroll}>
                         <View style={styles.header_container}>
                              <Pressable
                                   onPress={() => closeModal(false)}
                                   style={styles.back_container}
                              >
                                   <Image
                                        source={require('../assets/back.png')}
                                        style={styles.back_img}
                                   />
                              </Pressable>
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
                                        closeModal={closeModal}
                                        people={people}
                                        total={isAssist ? people.length + 1 : people.length}
                                   />
                              </View>
                         </View>
                         <View style={styles.separator} lightColor="#A6A6A6" darkColor="#A6A6A6" />
                         <View style={styles.comments_container}>
                              {comments.map((data) => {
                                   return (
                                        <View key={data.idComment} style={styles.comment}>
                                             <User name={data.name} />
                                             <View style={styles.comment_text}>
                                                  <Text style={styles.description}>
                                                       {data.comment}
                                                  </Text>
                                             </View>
                                        </View>
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
     back_container: { position: 'absolute', top: 5, left: 10, zIndex: 100 },
     back_img: {
          width: 30,
          height: 30,
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
     },
     comment: {
          padding: 15,
          backgroundColor: '#ECECEC',
          width: '90%',
          marginTop: 15,
     },
     comment_text: {
          backgroundColor: '#ECECEC',
          marginLeft: 45,
     },
});
