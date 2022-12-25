import { StyleSheet, View } from 'react-native';
import { Comment } from './Comment';

type CommentsContainerProps = {
     comments: { idComment: string; idUser: string; name: string; img?: string; comment: string }[];
};

export function CommentsContainer({ comments }: CommentsContainerProps) {
     return (
          <View style={styles.comments_container}>
               {comments.map((data) => {
                    return <Comment key={data.idComment} name={data.name} comment={data.comment} />;
               })}
          </View>
     );
}

const styles = StyleSheet.create({
     comments_container: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#ffff',
     },
});
