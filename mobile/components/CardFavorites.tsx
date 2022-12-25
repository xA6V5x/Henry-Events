import axios from 'axios';
import { useState } from 'react';
import { Pressable, StyleSheet, Image, View } from 'react-native';
import { CenterContainer } from './CenterContainer';
import { Date } from './Date';
import { TitlePost } from './TitlePost';

type CardProps = {
     navigation: any;
     idPost: string;
     title: string;
     date: number | string;
     mounth: string;
     favorite: boolean;
};

export default function CardFavorites({
     navigation,
     idPost,
     title,
     date,
     mounth,
     favorite,
}: CardProps) {
     const [isFavorite, setFavorite] = useState(favorite);

     const handleFavorite = (boolean: boolean) => {
          setFavorite(boolean);
          // axios.put('')
     };

     return (
          <Pressable
               onPress={() =>
                    navigation.push('ModalPost', {
                         idPost,
                         favoriteInicial: isFavorite,
                    })
               }
               style={({ pressed }) => ({
                    ...styles.container,
                    transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
               })}
          >
               <Date number={date} mounth={mounth} margin={15} marginRight={0} />
               <CenterContainer component={<TitlePost title={title} width="56.3%" />} />
               <Pressable
                    onPress={() => handleFavorite(isFavorite ? false : true)}
                    style={styles.favorite_button}
               >
                    {isFavorite === false ? (
                         <Image
                              source={require('../assets/modalIcons/offFavorite.png')}
                              style={styles.favorite_img}
                         />
                    ) : (
                         <Image
                              source={require('../assets/modalIcons/onFavorite.png')}
                              style={styles.favorite_img}
                         />
                    )}
               </Pressable>
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
