class Produto {
    constructor(){
        this.prod = localStorage.getItem('tbProd') === null
        ? []
        : JSON.parse(localStorage.getItem('tbProd'))
    }
    salvar(produto){
        if(document.getElementById('cod').getAttribute('disabled')==='disabled'){
            this.apagar(produto.cod)
        }
        this.prod.push(produto)
        localStorage.setItem('tbProd', JSON.stringify(this.prod))
        alert("Produto Salvo com Sucesso")
    }
    apagar(codigo){
        let index = this.prod.findIndex(produto => produto.cod == codigo)
        //1o parametro é o indice do array e o 2o é o nr de itens removidos
        this.prod.splice(index, 1)
        localStorage.setItem('tbProd', JSON.stringify(this.prod))
        produto.atualiza()
    }
    editar(produto){
        document.getElementById('cod').value = produto.cod
        document.getElementById('cod').setAttribute('disabled','disabled')
        document.getElementById('nome').value = produto.nome
        document.getElementById('categoria').value = produto.categoria
        document.getElementById('preco').value = produto.preco
        document.getElementById('tamanho').value = produto.tamanho
    }
    lista(){
        const listagem = this.prod.map((produto) => (
            `<tr>
                <td>${produto.cod}</td>      
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>         
                <td>${produto.preco}</td>
                <td>${produto.tamanho}</td>      
                <td>
                <button id='apagar' class='btn btn-primary' onClick='produto.apagar(${produto.cod})'>
                Apagar</button>
                <button id='editar' type ="button" class='btn btn-secondary' onClick='produto.editar(${JSON.stringify(produto)})'>
                Editar</button>
                </td>
            </tr>`
        )).join("")
        return (`<table class="table-striped table-primary">
        <caption>Relação dos Produtos</caption>
        <thead>
            <th>Código</th>        
            <th>Nome</th>
            <th>Categoria</th>            
            <th>Preco</th>
            <th>Tamanho</th>        
        </thead>
        <tbody>${listagem}</tbody>
        </table>
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = produto.lista()  
    }
    
}
const produto = new Produto()


document.getElementById('salvar').onclick = function(){
   const registro = {
       cod: document.getElementById('cod').value,
       nome: document.getElementById('nome').value,
       categoria: document.getElementById('categoria').value,
       preco: document.getElementById('preco').value,
       tamanho: document.getElementById('tamanho').value
   }
   if(registro.cod === ''){
    alert('O código do cliente é obrigatório')
    return false
    }
    if(registro.nome === ''){
    alert('O nome do cliente é obrigatório')
    return false
    }
    if(registro.categoria === '' || registro.preco === '' || registro.tamanho ==='' ){
    alert('Preencha a categoria, preço o tamanho!')
    return false
    }
    produto.salvar(registro)
}
window.onload = function(){
    produto.atualiza()
}