import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectando ao MongoDB Atlas com sucesso!');
        
        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexao com o banco!', erro);
        process.exit();
    }
}