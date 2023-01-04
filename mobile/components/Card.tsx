import moment from 'moment';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CenterContainer } from './CenterContainer';
// import ModalDescription from '../screens/ModalDescription';
import { Date } from './Date';
import { TitlePost } from './TitlePost';
import 'moment/locale/es';

type CardProps = {
     navigation: any;
     idPost: string;
     title: string;
     date: number | string;
     favorites: boolean;
};

export default function Card({ navigation, idPost, title, date, favorites }: CardProps) {
     const [isFavorite, setFavorite] = useState(favorites);

     moment.locale('es');

     let m = moment(date, 'YYYY-MM-DD HH:mm Z').format('DD MMMM').split(' ');

     const number = m[0].replace(/^(0+)/g, '');

     const mounth = m[1];

     return (
          <Pressable
               onPress={() =>
                    navigation.navigate('ModalPost', {
                         idPost,
                         favoriteInicial: isFavorite,
                    })
               }
               style={({ pressed }) => ({
                    ...styles.container,
                    transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
               })}
          >
               <Date number={number} mounth={mounth} margin={15} marginRight={0} />
               <CenterContainer component={<TitlePost title={title} width="56.3%" />} />
          </Pressable>
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
});
