import { StyleSheet } from 'react-native';
import { DatesContainer } from '../components/DatesContainer';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function Meetings({ navigation }: RootStackScreenProps<'Meetings'>) {
     return (
          <View style={styles.container}>
               <DatesContainer name="Meetings" endpoint="https://" navigation={navigation} />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});
