import express from 'express';

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato fofinho dormindo",
        imagem: "https://placekitten.com/400/200",
    },
    {
        id: 3,
        descricao: "Paisagem incrível com um gato",
        imagem: "https://placekitten.com/g/200/300",
    },
    {
        id: 4,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/200/300",
    },
    {
        id: 5,
        descricao: "Gato preto misterioso",
        imagem: "https://placekitten.com/g/300/200",
    },
    {
        id: 6,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://placekitten.com/200/300",
    }
];

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando!");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});