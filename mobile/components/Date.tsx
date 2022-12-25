import { StyleSheet, Text, View } from 'react-native';

type DateProps = {
     number: number | string;
     mounth: string;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function Date({
     number,
     mounth,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: DateProps) {
     const mounthSize = mounth.length <= 8 ? 15 : mounth.length <= 9 ? 12 : 11.5;

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
               <Text style={styles.date_number}>{number}</Text>
               <Text style={{ ...styles.date_text, fontSize: mounthSize }}>{mounth}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          width: 65,
          height: 65,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFF01',
          borderRadius: 11,
     },
     date_number: {
          fontSize: 27,
          fontWeight: 'bold',
          textAlign: 'center',
     },
     date_text: { marginTop: -5, fontWeight: 'bold', textAlign: 'center' },
});
