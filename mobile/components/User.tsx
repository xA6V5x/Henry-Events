import { Image, StyleSheet, Text, View } from 'react-native';

type UserProps = {
     name: string;
     img?: string;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function User({
     name,
     img,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: UserProps) {
     return (
          <View
               style={{
                    ...styles.container,
                    margin,
                    marginTop,
                    marginLeft,
                    marginRight,
                    marginBottom,
               }}
          >
               <Image
                    source={img ? { uri: img } : require('../assets/modalIcons/user.png')}
                    style={styles.user_img}
               />

               <Text style={styles.user_name}>{name}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          alignItems: 'center',
          backgroundColor: '#ECECEC',
          flexDirection: 'row',
     },
     user_img: { width: 35, height: 35 },
     user_name: {
          marginTop: 3,
          marginLeft: 10,
          fontSize: 16.5,
          fontWeight: '500',
     },
});
