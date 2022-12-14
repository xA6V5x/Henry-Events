import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Modal } from 'react-native';
import { View } from '../components/Themed';
import ModalDescription from '../screens/ModalDescription';
import { Date } from './Date';
import { TitlePost } from './TitlePost';

type cardProps = {
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
     favorite: boolean;
};

export default function Card({
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
     favorite,
}: cardProps) {
     const [isFavorite, setFavorite] = useState(favorite);
     const [view, setView] = useState(false);

     const handleFavorite = (boolean: boolean) => {
          setFavorite(boolean);
          // axios.put('')
     };

     return (
          <View>
               <Modal transparent visible={view} animationType="slide">
                    <StatusBar backgroundColor="#ECECEC" />
                    <ModalDescription
                         navigation={navigation}
                         idPost={idPost}
                         title={title}
                         date={date}
                         mounth={mounth}
                         description={description}
                         link={link}
                         author={author}
                         people={people}
                         comments={comments}
                         // ----------------//
                         isFavorite={isFavorite}
                         setFavorite={setFavorite}
                         closeModal={setView}
                    />
               </Modal>
               <Pressable
                    onPress={
                         () => setView(true)
                         // navigation.navigate('Modal', {
                         //      idPost, isFavorite
                         // })
                    }
                    style={({ pressed }) => ({
                         ...styles.container,
                         transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
                    })}
               >
                    <Date number={date} mounth={mounth} margin={15} marginRight={0} />
                    <View
                         style={{
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#ECECEC',
                         }}
                    >
                         <TitlePost title={title} width="56.3%" />
                    </View>
               </Pressable>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          position: 'relative',
          margin: 7,
          width: '90%',
          height: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ECECEC',
          borderRadius: 11,
     },
     favorite_button: {
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex: 100,
     },
     favorite_img: {
          width: 25,
          height: 25,
     },
     text: {
          width: '58%',
          backgroundColor: '#ECECEC',
          fontSize: 17,
          fontWeight: '400',
          textAlign: 'center',
     },
});
