let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listatarefas")) || [];

function rendertarefas(){
    listElement.innerHTML = "";

    tarefas.map((todo, index) => {
        let liElement = document.createElement("li");
        let tarefatext = document.createTextNode(todo + " ");

        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")

        linkElement.setAttribute("onclick", `deletarTarefa(${index})`)

        let linktext = document.createTextNode("remover")
        linkElement.appendChild(linktext)

        liElement.appendChild(tarefatext);
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)

    })
}

rendertarefas();

function addtarefas(){
    if (inputElement.value === ""){
        alert("Digite alguma tarefa")
        return false
    } else {
        let novatarefa = inputElement.value;
        tarefas.push(novatarefa);
        inputElement.value = '';
        rendertarefas();
        salvarDados();
    }
}

buttonElement.onclick = addtarefas;

function deletarTarefa(position){
    tarefas.splice(position, 1);
    rendertarefas();
    salvarDados();
}

inputElement.addEventListener("keydown", function(e){
    if (e.key === "Enter"){
        buttonElement.click();
    }
})

function salvarDados(){
    localStorage.setItem("@listatarefas", JSON.stringify(tarefas))
}