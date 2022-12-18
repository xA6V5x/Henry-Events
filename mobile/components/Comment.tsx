import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from './User';

type commentProps = { name: string; comment: string };

export function Comment({ name, comment }: commentProps) {
     return (
          <View style={styles.comment}>
               <User name={name} />
               <View style={styles.comment_text}>
                    <Text style={styles.description}>{comment}</Text>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     comments_container: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
     },
     comment: {
          padding: 15,
          backgroundColor: '#ECECEC',
          width: '90%',
          marginTop: 15,
     },
     comment_text: {
          backgroundColor: '#ECECEC',
          marginLeft: 45,
     },
     description: {
          fontSize: 15,
     },
});
