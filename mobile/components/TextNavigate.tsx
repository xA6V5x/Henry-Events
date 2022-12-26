import { Pressable, Text } from 'react-native';

type TextNavigateProps = {
     name: string;
     onPress: () => void;
};

export function TextNavigate({ name, onPress }: TextNavigateProps) {
     return (
          <Pressable onPress={onPress}>
               <Text
                    style={{
                         fontSize: 16,
                    }}
               >
                    {name}
               </Text>
          </Pressable>
     );
}
