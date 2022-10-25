import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Sobre } from "../screens/Sobre";

// // Simboliza a instância do Stack
// const Stack = createNativeStackNavigator();
// Simboliza a instância do Stack
const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
    return (
        <MBNav.Navigator>
            <MBNav.Screen
                name="Home"
                component={Home}
                activeColor="#fff"
                inactiveColor="tomato"
            />
            <MBNav.Screen
                name="Sobre"
                component={Sobre}

            />
            <MBNav.Screen
                name="Contato"
                component={Sobre}

            />
            <MBNav.Screen
                name="Registro"
                component={Register}
            />
            <MBNav.Screen
                name="Login"
                component={Login}
            />
        </MBNav.Navigator>
    )
}


