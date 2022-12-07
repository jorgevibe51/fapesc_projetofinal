function Formulario(){
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
            <label>Genero
            <select id="genero">
                <option value="romance" selected>Romance</option>
                <option value="drama" selected>Drama</option>
                <option value="terror" selected>Terror</option>
                <option value="comedia" selected>Comedia</option>
                <option value="ficção" selected>Ficção</option>
                <option value="documentário" selected>Documentário</option>
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