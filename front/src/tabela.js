function Tabela(){
    return (
        <div id="tabela">
            <div>
                <label>Buscar nome:
                    <input id="buscar" type="text" placeholder="palavra chave"/>
                </label>
            </div>
            <table>
            <thead>
                <tr>
                <th>#</th>
                <th>Nome do filme</th>
                <th>Gênero</th>
                <th>Ano</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="linha">1</td>
                    <td id="titulo">A volta dos que não foram</td>
                    <td id="genero">Comédia</td>
                    <td id="ano">Ano</td>
                    <td id="acoes">
                    <input id="btnEditar" type="button" value="Editar"></input>
                    <input id="btnRemover" type="button" value="Remover"></input>
                    </td>

                </tr>
            </tbody>
            </table>
        </div>
    )
}
export default Tabela;