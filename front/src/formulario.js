
function Formulario({eventoInsere, salvar, objeto, cancelar}){
    return(
        <div id="formulario">
            <form>
                <h3>Cadastro de filme</h3>
                <div>
                <label>Título
                <input id="idTitulo" type="text" name="titulo" value={objeto.titulo} onChange={eventoInsere} placeholder="título do filme" required/>
                </label>
                </div>
                <div>
                <label>Gênero
                <select id="idGenero" value={objeto.genero} name="genero" onChange={eventoInsere} required>
                    <option value="" selected>--&lt;escolha um gênero&gt;--</option>
                    <option value="romance">Romance</option>
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="comedia">Comédia</option>
                    <option value="ficcao">Ficção</option>
                    <option value="documentario">Documentário</option>
                </select>
                </label>
                </div>
                <div>
                <label>Ano
                <input id = "idAno" type="number" name="ano" value={objeto.ano} onChange={eventoInsere} placeholder="Ano do filme (YYYY)" required/>
                </label>
                </div>
                <center>
                <button id="btnSalvar" type="button" onClick={salvar}>Salvar</button>
                <button id="btnCancelar" type="button" onClick={cancelar}>Cancelar</button>
                </center>
            </form>
        </div>
    )
}
export default Formulario;