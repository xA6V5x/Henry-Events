import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './context/UserContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
     const isLoadingComplete = useCachedResources();
     const colorScheme = useColorScheme();

     if (!isLoadingComplete) {
          return null;
     } else {
          return (
               <SafeAreaProvider>
                    <UserProvider>
                         <Navigation colorScheme={colorScheme} />
                         <StatusBar />
                    </UserProvider>
               </SafeAreaProvider>
          );
     }
}
