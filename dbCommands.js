db.produtos.find({ categoria: ['masculino', 'camisa'] })

db.produtos.insert(
    {
        nomeProduto: 'Camisa UmberStylish',
        marca: 'La Coste',
        categorias: [{ categoria: ['feminino', 'calca']}, {categoria:['masculino', 'calca']}],
        preco: 50,
        freteGratuido: 'true',
        freteGratuito: 'false',
        tamanhos: ['P', 'M', 'G'],
        descricao: 'Camisa de excelente qualidade, perfeita para um passeio no parque',
        caminhoFoto:
        ['assets/produtos/camisas/000001_lacoste_1.jpg',
            'assets/produtos/camisas/000001_lacoste_2.jpg']
    }
)

db.produtos.insert(
    {
        nomeProduto: 'Camisa UmberStylish',
        marca: 'La Coste',
        categorias: {$or: [{ categoria: ['feminino', 'calca']}]},
        preco: 50,
        freteGratuido: 'true',
        freteGratuito: 'false',
        tamanhos: ['P', 'M', 'G'],
        descricao: 'Camisa de excelente qualidade, perfeita para um passeio no parque',
        caminhoFoto:
        ['assets/produtos/camisas/000001_lacoste_1.jpg',
            'assets/produtos/camisas/000001_lacoste_2.jpg']
    }
)


db.produtos.update({ marca: "La Coste" }, { $set: { caminhoFoto: ['assets/produtos/camisas/000001_lacoste_1.jpg', 'assets/produtos/camisas/000001_lacoste_2.jpg'] } })

db.produtos.update({ marca: "La Coste" }, { $set: { qtdFotos: { $size: caminhoFoto } } });

db.produtos.find().forEach
