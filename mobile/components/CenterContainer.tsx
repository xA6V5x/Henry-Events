import { StyleSheet, View } from 'react-native';

type CenterContainerProps = {
     component: JSX.Element;
};

export function CenterContainer({ component }: CenterContainerProps) {
     return <View style={styles.container}>{component}</View>;
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ECECEC',
     },
});
