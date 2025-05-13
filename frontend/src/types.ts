import { Product } from "./contexts/CartContext";

export type RootStackParamList = {
    Introducao: undefined;
    Login: undefined;
    Cadastro: undefined;
    RedefinirSenha: {
        email: string;
    };
    Avaliacao: {
        nome: string;
        email: string;    
    };
    Produto: {
        produto: Product;
        nome: string;
        email: string;
    };
    Home: {
        nome: string;
        email: string;
    };
    Carrinho: {
        nome: string;
        email: string;
        produtos: Product[];
        total: number;
        data: string;
    };
    Pedidos: {
        nome: string;
        email: string;
        produtos: Product[];
        total: number;
        data: string;
    };
    Perfil: {
        nome: string;
        email: string;
    };
    Pagamento: {
        nome: string;
        email: string;
        produtos: Product[];
        total: number;
    };
    RedefinirPerfil: {
        nome: string;
        email: string;
    },
    FaleConosco: {
        nome: string;
        email: string;
    },
};