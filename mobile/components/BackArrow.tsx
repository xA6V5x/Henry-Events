import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export function BackArrow({ navigation }: any) {
     return (
          <TouchableOpacity
               activeOpacity={0.5}
               onPress={() => navigation.goBack()}
               style={styles.back_container}
          >
               <Image source={require('../assets/back.png')} style={styles.back_img} />
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     back_container: {
          position: 'absolute',
          top: Constants.statusBarHeight,
          left: 10,
          zIndex: 100,
     },
     back_img: {
          width: 30,
          height: 30,
     },
});
