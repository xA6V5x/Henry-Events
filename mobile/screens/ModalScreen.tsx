import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

type modalProps = {
     route: {
          params: {
               date: string;
               mounth: string;
               title: string;
          };
     };
};

export default function ModalScreen({ route }: modalProps) {
     const { date, mounth, title } = route.params;

     return (
          <View style={styles.container}>
               <Text style={styles.title}>{title}</Text>
               <Text style={styles.title}>{date}</Text>
               <Text style={styles.title}>{mounth}</Text>
               <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

               {/* Use a light status bar on iOS to account for the black space above the modal */}
               <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
     },
     title: {
          fontSize: 20,
          fontWeight: 'bold',
     },
     separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
     },
});
