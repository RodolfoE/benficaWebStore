db.produto.insert({
    nomeProduto: 'Camisa Dudalina',
    marca: 'La coste',
    genero: 'm',
    categoria: ['camisa', 'camiseta'],
    preco: 50,
    qtdEmTamanhos:{
        tamanhos: ['p', 'm', 'g'],
        p: 35,
        m: 30,
        g: 40
    },
    descricao: 'Camisa de excelente qualidade, perfeita para um passeio no parque',
    caminhoFoto:
    ['assets/produtos/camisas/000001_lacoste_1.jpg', 'assets/produtos/camisas/000001_lacoste_2.jpg'],
    comentarios: [{
        cliente: '5af9cc8e52777264aac2a0eb',
        txt: 'produto é bao msm',
        data: '00:00:00 12/07/2013'
    }]
})

db.compra.insert({
    cliente: '5af9cc8e52777264aac2a0eb',
    isPago: true,
    isFiado: true,
    carrinho: {
        produtos: ['5af9ccf58f9a9e87935d44a2']
    }
})

db.funcionario.insert({
    endereco: {
        cep: '33343-999',
        rua: 'teste1',
        bairro: 'teste1',
        cidade: 'teste1',
        estado: 'teste1',
        numero: 'teste1',
        complemento: 'teste1',
        pontoRefef: 'teste1'
    },
    nome: 'teste1',
    usuario: 'teste1',
    senha: 'psw',
    email: 'teste1',
    genero: 'm',
    idade: 13,
    caminhoFoto: 'assets/produtos/camisas/000001_lacoste_2.jpg'
})
db.cliente.insert({
    nome: 'teste14',
    usuario: 'teste1',
    senha: 'psw',
    email: 'teste1',
    genero: 'm',
    idade: 13,
    caminhoFoto: 'assets/produtos/camisas/000001_lacoste_2.jpg', 
    endereco: {
        cep: '33343-999',
        rua: 'teste1',
        bairro: 'teste1',
        cidade: 'teste1',
        estado: 'teste1',
        numero: 'teste1',
        complemento: 'teste1',
        pontoRefef: 'teste1'
    }
})

db.envio.insert({
    data: '00:00:00 12/07/2013',
    postagem: {
        entregueAosCorreios: {
            confirmado: false,
            funcResponsavel: '5af9ce208f9a9e87935d44a4'
        },
        entregueAoDestinatario: {
            confirmado: false,
            funcResponsavel: '5af9ce208f9a9e87935d44a4'
        },
        trocaOuDevolucao: {
            trocaEntregueALoja: true,
            funcRecebimento: '5af9ce208f9a9e87935d44a4',

        }
    },
    compra: '5af9cdfa8f9a9e87935d44a3'
})
