import { Image, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
// import { Text, View } from './Themed';

type InputCommentProps = {
     commentMessage: string;
     setCommentMessage: (n: string) => void;
     handleChange: (n: string) => void;
};

export function InputComment({
     commentMessage,
     setCommentMessage,
     handleChange,
}: InputCommentProps) {
     return (
          <View style={styles.container}>
               <TextInput
                    placeholder="Comment"
                    autoCorrect={false}
                    value={commentMessage}
                    onChangeText={(e) => handleChange(e)}
                    multiline={true}
                    style={styles.input}
               />
               <TouchableWithoutFeedback
                    onPress={(e) => {
                         setCommentMessage('');
                    }}
               >
                    <Image
                         source={require('../assets/modalIcons/send.png')}
                         style={styles.send_icon}
                    />
               </TouchableWithoutFeedback>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          backgroundColor: '#ffffff',
     },
     input: {
          width: '85%',
          fontSize: 15,
          paddingLeft: 20,
          paddingRight: 19,
          minHeight: 45,
          maxHeight: 100,
          borderWidth: 1,
          borderRadius: 12,
          backgroundColor: '#ffff',
     },
     send_icon: {
          marginLeft: 10,
          width: 35,
          height: 35,
     },
});
