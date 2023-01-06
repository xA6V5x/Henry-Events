import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function CalendarButton(props: any) {
     return (
          <TouchableOpacity {...props}>
               <Text>{props.text}</Text>
               <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../assets/calendar.png')}
               />
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     container: {
          width: 56,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
     },
     img: {
          width: 40,
          height: 40,
     },
     many: {
          fontSize: 16,
     },
});
