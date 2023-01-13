import moment from 'moment';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { CenterContainer } from './CenterContainer';
import { Date } from './Date';
import { TitlePost } from './TitlePost';

type CardProps = {
     navigation: any;
     idPost: string;
     title: string;
     date: string;
     type: string;
};

export default function Card({ navigation, idPost, title, date, type }: CardProps) {
     return (
          <Pressable
               onPress={() =>
                    navigation.push('ModalPost', {
                         idPost,
                         type,
                         date,
                         title,
                    })
               }
               style={({ pressed }) => ({
                    ...styles.container,
                    transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
               })}
          >
               <Date date={date} margin={15} marginRight={0} />
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
