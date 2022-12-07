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
    fetch("http://localhost:8080/filmes/listar")
    .then(resposta => resposta.json())
    .then(resposta_conversao => setFilmes(resposta_conversao))
  })

  const insereDados = (e) => {
    setObjFilme({...objFilme, [e.target.name]:e.target.value})
  }

  const salvar = () => {
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

  const remover = (indice) => {
    fetch("http://localhost:8080/filmes/remover" + objFilme.id,{
      method:'delete'
    })
    .then(resposta_conversao => {
      alert('Produto removido com sucesso!')
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

  return (
    <div class="app">
      <div>
        <Formulario eventoInsere={insereDados}
                    objeto={objFilme}
                    salvar={salvar}
                    editar={editar}
                    remover={remover}
                    cancelar={limpaFormulario}/>
      </div>
      <div>
        <Tabela lista={filmes}
                selecionarFilme={selecionar}/>
      </div>
    </div>
  );
}

export default App;
