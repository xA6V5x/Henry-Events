import { StyleSheet, View, Text } from 'react-native';
import { User } from './User';

type DescriptionPostProps = {
     name: string;
     img?: string;
     description: string;
};

export function DescriptionPost({ name, img, description }: DescriptionPostProps) {
     return (
          <View style={styles.description_container}>
               <User name={name} img={img} marginBottom={5} />
               <Text style={styles.description}>{description}</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     description_container: { backgroundColor: '#ECECEC', width: '84%' },
     description: {
          fontSize: 15,
     },
});
