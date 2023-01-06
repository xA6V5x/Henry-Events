import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

type DateProps = {
     date: string;
     margin?: number | string;
     marginTop?: number | string;
     marginLeft?: number | string;
     marginRight?: number | string;
     marginBottom?: number | string;
};

export function Date({
     date,
     margin,
     marginTop,
     marginLeft,
     marginRight,
     marginBottom,
}: DateProps) {
     moment.locale('es');

     let m = moment(date, 'YYYY-MM-DD HH:mm Z').format('DD MMMM').split(' ');

     const number = m[0].replace(/^(0+)/g, '');

     const mounth = m[1];

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
               {date && (
                    <View>
                         <Text style={styles.date_number}>{number}</Text>
                         <Text style={{ ...styles.date_text, fontSize: mounthSize }}>{mounth}</Text>
                    </View>
               )}
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
