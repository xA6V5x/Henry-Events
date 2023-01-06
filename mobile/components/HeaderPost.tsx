import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Date } from './Date';
import { TitlePost } from './TitlePost';

type HeaderPostProps = {
     title: string;
     date: string;
     isFavorite: boolean;
     setFavorite: (n: boolean) => void;
};

export function HeaderPost({ date, title, isFavorite, setFavorite }: HeaderPostProps) {
     return (
          <View style={styles.header}>
               <Date date={date} margin={15} marginRight={0} />
               <TitlePost title={title} width={130} marginLeft={'10%'} marginRight={'10%'} />
               <Pressable onPress={() => setFavorite(isFavorite ? false : true)}>
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
     );
}

const styles = StyleSheet.create({
     header: {
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          backgroundColor: '#ECECEC',
     },
     favorite_img: {
          width: 35,
          height: 35,
     },
});
