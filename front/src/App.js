import {useEffect, useState} from 'react'
import './App.css';
import Formulario from './formulario';
import Tabela from './tabela';

function App() {

  const filme = {
    id:0,
    titulo:'',
    genero:'',
    ano:''
  }

  const[filmes, setFilmes] = useState([])
  const[objFilme, setObjFilme] = useState(filme)

  useEffect(() => {
    let palavraChave = document.querySelector('#buscar').value
    let url = (palavraChave === '') 
              ? "http://localhost:8080/filmes/listar":
                "http://localhost:8080/filmes/titulo/"+palavraChave
      fetch(url)
      .then(resposta => resposta.json())
      .then(resposta_conversao => setFilmes(resposta_conversao))
  })

  const insereDados = (e) => {
    setObjFilme({...objFilme, [e.target.name]:e.target.value})
  }

  const cadastrar = () => {
    fetch("http://localhost:8080/filmes/cadastrar",{
      method:'post',
      body:JSON.stringify(objFilme),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resposta_conversao =>{
      alert('Filme cadastrado com sucesso!')
      setFilmes([...filmes, resposta_conversao])
      limpaFormulario()
    })
  }

  const editar = () =>{
    fetch("http://localhost:8080/filmes/editar",{
      method:'put',
      body:JSON.stringify(objFilme),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resposta_conversao => {
      alert('Filme alterado com sucesso!')
      let copia = [...filmes]
      let indice = copia.findIndex((f) => {
        return f.id === objFilme.id
      })
      copia[indice] = objFilme
      setFilmes(copia)
      limpaFormulario()
    })
  }

  const remover = (indice, id) => {
    fetch("http://localhost:8080/filmes/remover/" + id,{
      method:'delete'
    })
    .then(resposta_conversao => {
      alert('Filme removido com sucesso!')
      let copia = [...filmes]
      let indice = copia.findIndex((f) => {
        return f.id === objFilme.id
      })
      copia.splice(indice, 1)
      setFilmes(copia)
      limpaFormulario()
    })
  }

  const limpaFormulario = () => {
    setObjFilme(filme)
  }
  
  const selecionar = (indice) => {
    setObjFilme(filmes[indice])
  }

  const salvar = () => {
    if (cadastroValido()){
      if(objFilme.id === 0){
        cadastrar()
      }else{
        editar()
      }
    }
  }

  function cadastroValido(){
    let titulo = document.getElementById('idTitulo').value
    let genero = document.getElementById('idGenero').value
    let ano = document.getElementById('idAno').value
    let mensagem = ''
    if (titulo == '') {
      mensagem += 'Título obrigatório.\n'
    }
    if (genero == '') {
      mensagem += 'Gênero obrigatório.\n'
    }
    if (ano == '') {
      mensagem += 'Ano obrigatório.'
    }
    if (mensagem != ''){
      alert(mensagem)
      return false
    }
    return true;
  }

  return (
    <div class="app">
      <div>
        <Formulario eventoInsere={insereDados}
                    objeto={objFilme}
                    salvar={salvar}
                    cancelar={limpaFormulario}/>
      </div>
      <div>
        <Tabela lista={filmes}
                editarFilme={selecionar}
                remover={remover}
            />
      </div>
    </div>
  );
}

export default App;
