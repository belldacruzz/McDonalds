import { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

const combos = [
    {
        id: 1,
        name: 'McOferta Média Big Mac Duplo',
        description: 'O clássico Big Mac, acompanhado de batatas médias e uma bebida média.',
        price: 'R$ 39,90',
        image: require('../assets/images/images/combo-big-mac-duplo.png')
    },
    {
        id: 2,
        name: 'Novo Brabo Melt Onion Ring',
        description: 'Delicioso hambúrguer com anéis de cebola crocantes, acompanhado de batatas médias e uma bebida média.',
        price: 'R$ 41,50',
        image: require('../assets/images/images/images/combo-brabo-melt-onion-rings.png'),
    },
    {
        id: 3,
        name: 'McCrispy Chicken Elite',
        description: 'Saboroso hambúrguer de frango crispy, acompanhado de batatas médias e uma bebida média.',
        price: 'R$ 39,90',
        image: require('../assets/images/images/images/combo-mcrispy-elite.png'),
    },
    {
        id: 4,
        name: 'Duplo Cheddar McMelt',
        description: 'Hambúrguer suculento com cheddar derretido, acompanhado de batatas médias e uma bebida média.',
        price: 'R$ 36,20',
        image: require('../assets/images/images/images/combo-duplo-cheddar-mcmelt.png'),
    },
];

const categories = ['Combos', 'Lanches', 'Bebidas', 'Fritas'];

export default function MenuScreen({ navigation }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>('Combos');
    return ( 

    );
}

const styles = StyleSheet.create({
    container: {

    },
    scroll: {

    },
    scrollContent: {

    },
    headerImageWrapper: {

    },
    headerImage: {

    },
    headerButton: {

    },
    headerButtonLeft: {

    },
    headerButtonRight: {

    },
    infoCard: {

    },
    infoCardRow: {

    },
    infoLogo: {

    },
    infoText: {

    },
    brandName: {

    },
    brandSubtitle: {

    },
    statusRow: {

    },
    statusText: {

    },
    categoriesRow: {

    },
    categoryPill: {

    },
    categoryPillActives: {

    },
    categoryText: {

    },
    categoryTextActive: {

    },
    sectionTitle: {

    },
    productRowDivider: {

    },
    productInfo: {

    },
    productName: {

    },
    productDescription: {

    },
    productPrice: {

    },
    productImage: {

    },

})