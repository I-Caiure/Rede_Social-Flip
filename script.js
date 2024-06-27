const buttonPost = document.querySelector('.button-81')
const inputPost = document.querySelector('.barcreate')
const listComplete = document.querySelector('.postExecute')

let listPost = []


function getInput() {
    listPost.push(inputPost.value)
    inputPost.value = ''
    printList()
}

function printList() {

    let newList = ''
    listPost.forEach((item) => {
        newList = newList + `     
        <li class='post_socialnetwork'>
        <img class="foto_other_user" src="img/person1.jpg" alt="Foto do usuario">
            <a>
            <i class="fa-solid fa-trash"></i>
            <p class="name_other_user">Merry Watson</p>             
            </a>
            <p class="time_post">20 Min Ago</p>


             <p class="text_post">${item}</p>
            <img class="publish_user" src="img/publish_user.jpg" alt="Publicação do usuario">
        </li>`
    })

    listComplete.innerHTML = newList
}

buttonPost.addEventListener('click', getInput)

// Quando clico no buttonPost, ele chama a função getInput
// A função getInput traz o array listPost vazio, ele recebe um método push que adiciona no array o valor do inputPost
// A função printList é criada para mostrar o valor capturado, e a mesma é chamada na função getInput
// Na função printList temos uma variavel newList que começa vazia
// Ainda na função printList, pegamos o array e damos um forEach, que seria percorrer cada indice do array
// Passamos um parametro no forEach, e cada item percorrido será adicionado para nesse parametro
// Pegamos a variavel newList e adicionamos a ela a estrutura de lista que queremos printar em tela, o parametro do array montado que recebe os valores, deve ser referenciado com um template string ${}
// Para não sobrepormos os valores do array que estão sendo adicionados ao indice do forEach, dizemos que a newList vai ser sempre ela e mais uma dela mesma
// Como a newList está recebendo esse novo valor, podemos adiciona-lo ao HTML através do listComplete, que seria a classe responsavel pelo local a ser armazenado


//https://www.youtube.com/watch?v=k0roUpojoSE&t=3795s - Criar função de deleção