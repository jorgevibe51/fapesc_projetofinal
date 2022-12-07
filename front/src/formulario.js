
function Formulario({eventoInsere, cadastrar, objeto, editar, cancelar, remover}){
    return(
        <div id="formulario">
            <form>
                <h3>Cadastro de filme</h3>
                <div>
                <label>Nome
                <input type="text" name="nome" placeholder="título do filme"/>
                </label>
                </div>
                <div>
                <label>Gênero
                <select id="genero" onchange="showalert()">
                    <option value="romance" selected>Romance</option>
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
                <input type="number" name="ano" placeholder="Ano do filme (YYYY)"/>
                </label>
                </div>
                <center>
                <input id="btnSalvar" type="button" value="Salvar"></input>
                <input id="btnCancelar" type="button" value="Cancelar"></input>
                </center>
            </form>
        </div>
    )
}
export default Formulario;