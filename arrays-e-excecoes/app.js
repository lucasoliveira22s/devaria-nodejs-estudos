try {
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Feijão",
        "Macarrão",
        "Leite",
        "Carne",
        "Arros",
        "Shampo",
    ];

    const listaDeArgumentos = process.argv.slice(2);

    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`\x1b[1mProduto disponível: ${produto} \x1b[0m`));

    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento =>{
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Produto indisponível: ${argumento} `));

    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível: ${produto}`));

} catch {}
