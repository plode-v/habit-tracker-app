import { View, StyleSheet } from 'react-native';
import { Home } from "./pages"


export default function App() {
  return (
    <View style={styles.appContainer}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1
  }
})