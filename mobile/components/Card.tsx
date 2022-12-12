import { Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';

type cardProps = {
     date: string;
     mounth: string;
     title: string;
};

export default function Card({ date, mounth, title }: cardProps) {
     const navigation = useNavigation();

     return (
          <Pressable
               onPress={() => navigation.navigate('Modal', { date, mounth, title })}
               style={({ pressed }) => ({
                    ...styles.container,
                    transform: pressed ? [{ scale: 0.97 }] : [{ scale: 1 }],
               })}
          >
               <View style={styles.date}>
                    <Text style={styles.date_number}>{date}</Text>
                    <Text style={styles.date_text}>{mounth}</Text>
               </View>
               <Text style={styles.text}>{title}</Text>
          </Pressable>
     );
}

const styles = StyleSheet.create({
     container: {
          margin: 7,
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          height: 'auto',
          backgroundColor: '#ECECEC',
          borderRadius: 12,
     },
     date: {
          margin: 20,
          width: 70,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFF01',
          borderRadius: 12,
     },
     date_number: {
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
     },
     date_text: { fontSize: 14, fontWeight: 'bold', textAlign: 'center' },

     text: {
          width: '58%',
          backgroundColor: '#ECECEC',
          fontSize: 17,
          fontWeight: '400',
          textAlign: 'center',
     },
});
