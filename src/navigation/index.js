import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Sobre } from "../screens/Sobre";

// Simboliza a instância do Stack
const Stack = createNativeStackNavigator();

// Componente base
export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Sobre"
                component={Sobre}
            />
            <Stack.Screen
                name="Contato"
                component={Sobre}
            />
            <Stack.Screen
                name="Registro"
                component={Register}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}


