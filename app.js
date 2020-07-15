const resultado = document.getElementById('resultado');
const addBtn = document.getElementById('adicionar');
const limparBtn = document.getElementById('limpar');
const tarefa = document.getElementById('tarefa');

addBtn.addEventListener('click', (e) => {addTarefa(e)});
resultado.addEventListener('click', (e) => {deleteTarefa(e)});
limparBtn.addEventListener('click', (e) => {limparTodos(e)});
  
function addTarefa(e){
  if(tarefa.value !== ''){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = tarefa.value;
    const span = document.createElement('span');
    span.textContent = 'X';
    ul.className = 'list-group grupo';
    li.className = 'list-group-item tarefa';
    span.className = 'delete';
    li.appendChild(span);
    ul.appendChild(li);
    resultado.appendChild(ul);
    showBtn();
    tarefa.value = '';
  }else{
    alert('Campo vazio')
  }
  e.preventDefault();
}

function deleteTarefa(e){
  if(confirm('Tem certeza que deseja apagar?')){
    e.target.parentElement.remove();
    showBtn();
  }
  e.preventDefault();
}

function limparTodos(e){
  if(!resultado.children[0]){
    alert('A sua lista já está vazia');
  }else if(confirm('Tem certeza? Isso apagará todas as tarefas')){
    while(resultado.children[0]){
      resultado.children[0].remove();
    }
    showBtn();
  }
  e.preventDefault();
}

function showBtn(){
  if(resultado.children[0]){
    if(!limparBtn.classList.contains('d-block')){
      limparBtn.classList.remove('d-none');
      limparBtn.classList.add('d-block');
    }
  }else{
      limparBtn.classList.remove('d-block');
      limparBtn.classList.add('d-none');
    
  }
}

