import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function CalendarButton(props: any) {
     return (
          <TouchableOpacity {...props} activeOpacity={1} style={styles.container}>
               <Text
                    style={
                         props.text == 'Date'
                              ? { color: '#a2a2a2', fontSize: 18 }
                              : { color: '#000', fontSize: 18 }
                    }
               >
                    {props.text}
               </Text>
               <TouchableOpacity {...props} activeOpacity={0.5}>
                    <Image style={styles.img} source={require('../assets/calendar.png')} />
               </TouchableOpacity>
          </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 5,
          width: '75%',
          height: 45,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 10,
          borderWidth: 2,
          color: '#000000',
          borderColor: '#717171',
          backgroundColor: '#ffffff',
     },
     img: {
          width: 30,
          height: 30,
     },
});
