
function Formulario({eventoInsere, salvar, objeto, cancelar}){
    return(
        <div id="formulario">
            <form>
                <h3>Cadastro de filme</h3>
                <div>
                <label>Título
                <input type="text" name="titulo" value={objeto.titulo} onChange={eventoInsere} placeholder="título do filme"/>
                </label>
                </div>
                <div>
                <label>Gênero
                <select value={objeto.genero} name="genero" onChange={eventoInsere}>
                    <option value="" selected>--&lt;escolha um gênero&gt;--</option>
                    <option value="romance">Romance</option>
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="comedia">Comedia</option>
                    <option value="ficcao">Ficção</option>
                    <option value="documentario">Documentário</option>
                </select>
                </label>
                </div>
                <div>
                <label>Ano
                <input type="number" name="ano" value={objeto.ano} onChange={eventoInsere} placeholder="Ano do filme (YYYY)"/>
                </label>
                </div>
                <center>
                <input id="btnSalvar" type="button" onClick={salvar} value="Salvar"></input>
                <input id="btnCancelar" type="button" onClick={cancelar} value="Cancelar"></input>
                </center>
            </form>
        </div>
    )
}
export default Formulario;