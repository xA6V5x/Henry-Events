import { Image, Pressable, StyleSheet } from 'react-native';
import { Text } from './Themed';

type asistoProps = {
     isAssist: boolean;
     setAssist: (n: boolean) => void;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function Assist({
     isAssist,
     setAssist,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: asistoProps) {
     return (
          <Pressable
               onPress={() => {
                    setAssist(isAssist ? false : true);
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
               <Text style={styles.text}>Asisto</Text>

               <Image
                    source={
                         isAssist
                              ? require('../assets/modalIcons/onButton.png')
                              : require('../assets/modalIcons/offButton.png')
                    }
                    style={styles.button}
               />
          </Pressable>
     );
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          height: 35,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 10,
          backgroundColor: '#C4C4C4',
          alignItems: 'center',
          justifyContent: 'center',
     },
     text: {
          marginRight: 20,
          color: '#ffffff',
          fontSize: 16.5,
     },
     button: {
          width: 30,
          height: 30,
     },
});
