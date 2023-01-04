import { StyleSheet } from 'react-native';
import { DatesContainer } from '../components/DatesContainer';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function TalksScreen({ navigation }: RootStackScreenProps<'Talks'>) {
     return (
          <View style={styles.container}>
               <DatesContainer
                    nameDivision="Talks"
                    endpoint="https://henryevent.onrender.com/talk"
                    navigation={navigation}
               />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});
