import { StyleSheet, View } from 'react-native';

export function Separator() {
     return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
     separator: {
          height: 2,
          width: '100%',
          backgroundColor: '#A6A6A6',
     },
});
