import styles from './components/styles';
import { View } from 'react-native';
import { Home } from "./pages"


export default function App() {
  return (
    <View style={styles.appContainer}>
      <Home />
    </View>
  );
}