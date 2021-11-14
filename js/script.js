//função de adicionar tarefa
function adicionar(){
    const titulo = document.querySelector('#title').value

    if(titulo){

        //clonar tamplate
        const tamplate = document.querySelector('.tamplate')
        const novo = tamplate.cloneNode(true)

        //adicionar titulo
        novo.querySelector('.title').textContent = titulo

        //remover as classes desnecessárias
        novo.classList.remove('tamplate')
        novo.classList.remove('hide')

        //adicionar tarefa na lista
        const lista = document.querySelector('.list')
        lista.appendChild(novo)

        //adicionar o evento de remover
        const removebtn = novo.querySelector('.remove').addEventListener('click', function(){
            removeelement(this)
        })

        //adicionar o evento concluido
        const feitobtn = novo.querySelector('.done').addEventListener('click', function(){
            eventoconcluido(this)
        })

        //limpar texto
        document.querySelector('#title').value = ''
    }
}

// função de remover tarefa
function removeelement(elemento){
    elemento.parentNode.remove(true)
}

// função de tarefa feita
function eventoconcluido(elemento){
    
    const elementocompleto = elemento.parentNode
    elementocompleto.classList.toggle('feito')
}

// evento de adicionar tarefa
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(e){
    e.preventDefault()
    adicionar()
})