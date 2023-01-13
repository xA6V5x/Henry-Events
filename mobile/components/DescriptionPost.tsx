import { StyleSheet, View, Text, Linking } from 'react-native';
import { User } from './User';

type DescriptionPostProps = {
     type: string;
     name: string;
     img?: string;
     description: string;
     link?: string;
};

export function DescriptionPost({ type, name, img, description, link }: DescriptionPostProps) {
     const linkName = type == 'meeting' ? 'Nos reunimos aquí' : 'Link de la HenryTalk';

     return (
          <View style={styles.description_container}>
               <User name={name} img={img} marginBottom={5} />
               <Text style={styles.description}>{description}</Text>
               {link && (
                    <Text style={styles.link} onPress={() => Linking.openURL(link)}>
                         {linkName}
                    </Text>
               )}
          </View>
     );
}

const styles = StyleSheet.create({
     description_container: { backgroundColor: '#ECECEC', width: '84%' },
     description: {
          fontSize: 15,
     },
     link: {
          marginTop: 15,
          fontSize: 15,
          color: '#5eb0e7',
          textDecorationLine: 'underline',
     },
});
