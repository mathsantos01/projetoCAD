class Cliente {
    constructor(){
        this.cliente = localStorage.getItem('tbCliente') === null
        ? []
        : JSON.parse(localStorage.getItem('tbCliente'))
    }
    salvar(cliente){
        if(document.getElementById('email').getAttribute('disabled')==='disabled'){
            this.apagar(cliente.email)
        }
        this.cliente.push(cliente)
        localStorage.setItem('tbCliente', JSON.stringify(this.cliente))
        alert("Cliente Cadastrado")
    }
    apagar(emails){
        let index = this.cliente.findIndex(cliente => cliente.email == emails)
        //1o parametro é o indice do array e o 2o é o nr de itens removidos
        this.cliente.splice(index, 1)
        localStorage.setItem('tbCliente', JSON.stringify(this.cliente))
        cliente.atualiza()
    }
    editar(cliente){    
        document.getElementById('nome').value = cliente.nome
        document.getElementById('sobrenome').value = cliente.sobrenome
        document.getElementById('email').value = cliente.email
        document.getElementById('email').setAttribute('disabled','disabled')
        document.getElementById('cpf').value = cliente.cpf
        document.getElementById('sexo').value = cliente.sexo
    }
    lista(){
        const listagem = this.cliente.map((cliente) => (
            `<tr>
                <td>${cliente.nome}</td>
                <td>${cliente.sobrenome}</td>         
                <td>${cliente.email}</td>
                <td>${cliente.cpf}</td>      
                <td>${cliente.sexo}</td>      
                <td>
                <button id='apagar' type ="button" class='btn btn-primary' onClick='cliente.apagar(${cliente.emails})'>
                Apagar</button>
                <button id='editar' type ="button" class='btn btn-secondary' onClick='cliente.editar(${JSON.stringify(cliente)})'>
                Editar</button>
                </td>
            </tr>`
        )).join("")
        return (`<table class="table-striped table-primary col-12">
        <caption>Relação dos Clientes</caption>
        <thead>
            <th>Nome</th>        
            <th>Sobrenome</th>
            <th>Email</th>            
            <th>CPF</th>
            <th>Sexo</th>        
        </thead>
        <tbody>${listagem}</tbody>
        </table>
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()  
    }
    
}
const cliente = new Cliente()


document.getElementById('salvar').onclick = function(){
   const registro = {

       nome: document.getElementById('nome').value,
       sobrenome: document.getElementById('sobrenome').value,
       email: document.getElementById('email').value,
       cpf: document.getElementById('cpf').value,
       sexo: document.getElementById('sexo').value
   }
   
    cliente.salvar(registro)
}
window.onload = function(){
    cliente.atualiza()
}