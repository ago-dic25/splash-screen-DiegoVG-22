import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./misEstilos";

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // evita que se oculte el splash screen de forma predeterminada
    setTimeout(() => {
      SplashScreen.hideAsync(); // oculta después de 5s
    }, 5000);
  }, []);

  return (
    <LinearGradient
      colors={['#a9c4ffff', '#84aafaff', '#192f6a']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.texto}>Aqui puedes agregar un componente de React (puedes crear un componente separado o mover el codigo creado en clase anterior e importarlo en la sección de arriba) </Text>
    </LinearGradient>
  );
}