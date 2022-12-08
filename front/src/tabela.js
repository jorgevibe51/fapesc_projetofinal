function Tabela({lista, editarFilme, remover}){
    return (
        <div id="tabela">
            <div>
                <label>Buscar título:
                    <input id="buscar" type="text" placeholder="palavra chave"/>
                </label>
            </div>
            <table>
                <thead>
                    <th>#</th>
                    <th>Título do filme</th>
                    <th>Gênero</th>
                    <th>Ano</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {
                        lista.map((obj, ndx) => (
                            <tr key={ndx}>
                                <td>{ndx+1}</td>
                                <td>{obj.titulo}</td>
                                <td>{obj.genero}</td>
                                <td>{obj.ano}</td>
                                <td>
                                <button id="btnEditar" type="button" onClick={() => editarFilme(ndx)}>Editar</button>
                                <button id="btnRemover" type="button"onClick={() => remover(ndx, obj.id)} >Remover</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Tabela;