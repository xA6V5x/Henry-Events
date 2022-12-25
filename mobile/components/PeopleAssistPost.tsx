import { StyleSheet, View } from 'react-native';
import { Assist } from './Assist';
import { People } from './People';

type PeopleAssistPostProps = {
     navigation: any;
     isAssist: boolean;
     setAssist: (n: boolean) => void;
     people: {
          idUser: string;
          name: string;
          img?: string | undefined;
     }[];
     total: string | number;
};

export function PeopleAssistPost({
     navigation,
     isAssist,
     setAssist,
     people,
     total,
}: PeopleAssistPostProps) {
     return (
          <View style={styles.people_assist}>
               <Assist isAssist={isAssist} setAssist={setAssist} />
               <People navigation={navigation} people={people} total={total} />
          </View>
     );
}

const styles = StyleSheet.create({
     people_assist: {
          marginTop: 21,
          marginBottom: 21,
          width: '85%',
          backgroundColor: '#ECECEC',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
});
