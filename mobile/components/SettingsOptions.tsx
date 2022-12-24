import { Pressable, StyleSheet, Text } from 'react-native';

type SettingsOptionsProps = {
     navigation: any;
     goTo: string;
     name: string;
};

export function SettingsOptions({ navigation, goTo, name }: SettingsOptionsProps) {
     return (
          <Pressable
               onPress={() => navigation.push(goTo)}
               style={({ pressed }) => ({
                    ...styles.option,
                    opacity: pressed ? 0.5 : 1,
               })}
          >
               <Text style={styles.option_text}>{name}</Text>
          </Pressable>
     );
}

const styles = StyleSheet.create({ option: { marginBottom: 20 }, option_text: { fontSize: 20 } });
