let form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Adicionando o produto na tabela

    let categoria = document.getElementById('categoria').value;
    let nome = document.getElementById('nome').value;
    let marca = document.getElementById('marca').value;
    let quantidade = document.getElementById('quantidade').value;

    let dados = {
        categoria,
        nome,
        marca,
        quantidade
    };

    let valoresDados = Object.values(dados);

    let tbody = document.getElementById('tabela-produtos');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valoresDados.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });

    // Adicionando o produto no Local Storage

    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(dados);

    let produtosConvertidos = JSON.stringify(produtos);

    localStorage.setItem('produto', produtosConvertidos);

    swal('Tudo certo!', 'Produto cadastrado com sucesso!', 'success');
});