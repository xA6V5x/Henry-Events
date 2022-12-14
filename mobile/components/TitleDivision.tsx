import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

type datesContainerProps = {
     title: string;
};

export function TitleDivision({ title }: datesContainerProps) {
     return (
          <View style={styles.container}>
               <Text style={styles.title}>{title}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          position: 'relative',
          margin: 20,
          alignItems: 'center',
          width: '100%',
     },
     title: {
          width: '100%',
          textAlign: 'center',
          color: '#FFFF01',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -4, height: 0 },
          textShadowRadius: 1,
          fontWeight: '800',
          fontSize: 35,
          letterSpacing: 6.5,
     },
});
