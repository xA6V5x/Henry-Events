import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { Text } from './Themed';

type asistoProps = {
     people: { idUser: string; name: string; img?: string }[];
     total: number | string;
     closeModal?: (n: boolean) => void;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function People({
     people,
     total,
     closeModal,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: asistoProps) {
     // REPARAR ESTE ERROR, LOS PARAMETROS NO SE ESTAN ENVIANDO A PEOPLESCREEN
     const navigation = useNavigation();
     return (
          <Pressable
               onPress={() => {
                    // SACAR ESTE CARRAR MODAL, ES TEMPORAL PARA QUE NO SE ROMPA
                    closeModal ? closeModal(false) : null;
                    navigation.push('PeopleScreen', people);
               }}
               style={{
                    ...styles.container,
                    margin,
                    marginTop,
                    marginLeft,
                    marginRight,
                    marginBottom,
               }}
          >
               <Text style={styles.many}>{total}</Text>
               <Image source={require('../assets/modalIcons/people.png')} style={styles.img} />
          </Pressable>
     );
}

const styles = StyleSheet.create({
     container: {
          width: 56,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     img: {
          width: 40,
          height: 40,
     },
     many: {
          fontSize: 16,
     },
});
