export class Query {

    public static consultarPrestadoresPorEmpreendimento(idEmpreendimento: number): string {

        const query = `SELECT Prestadores.Id, Prestadores.Nome, Prestadores.Tratamento, Prestadores.UriFoto
        FROM EmpreendimentosPrestadores INNER JOIN Prestadores ON EmpreendimentosPrestadores.IdPrestador = Prestadores.Id
        WHERE EmpreendimentosPrestadores.IdEmpreendimento = ${idEmpreendimento}&Type=ExecuteReader`;
        return query;
    }
}
