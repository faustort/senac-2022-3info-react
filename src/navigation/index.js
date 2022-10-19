import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Button, Text, View } from "react-native";
const Stack = createNativeStackNavigator();
export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
    )
}
const Home = ({ navigation }) => (
    <View>
        <Text>Aqui é a Home</Text>
        <Button title="Vamos para Sobre?" onPress={() => navigation.navigate("Sobre")}></Button>
    </View>
)
const Sobre = () => (
    <View>
        <Text>Aqui é o sobre</Text>
    </View>
)
