import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type datesContainerProps = {
     title: string;
     width: number | string;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function TitlePost({
     title,
     width,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: datesContainerProps) {
     return (
          <View
               style={{
                    ...styles.container,
                    width: width,
                    margin,
                    marginTop,
                    marginLeft,
                    marginRight,
                    marginBottom,
               }}
          >
               <Text style={styles.title}>{title}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ECECEC',
     },
     title: {
          fontSize: 17,
          fontWeight: '400',
          textAlign: 'center',
     },
});