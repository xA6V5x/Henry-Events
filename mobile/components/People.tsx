import { Image, Pressable, StyleSheet, Text } from 'react-native';

type PeopleProps = {
     navigation: any;
     people: { idUser?: string; name?: string; img?: string }[];
     total: number | string;
     closeModal?: (n: boolean) => void;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function People({
     navigation,
     people,
     total,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: PeopleProps) {
     return (
          <Pressable
               onPress={() => {
                    navigation.push('People', { people });
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
