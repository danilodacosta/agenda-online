export class Query {

    public static consultarPrestadoresPorEmpreendimento(idEmpreendimento: number): string {

        // tslint:disable-next-line:max-line-length
        const query = `SELECT Prestadores.Id, Prestadores.Nome, Prestadores.Tratamento, TipoEspecialidades.Nome as TipoEspecialidade, Prestadores.UriFoto FROM EmpreendimentosPrestadores
        INNER JOIN Prestadores ON EmpreendimentosPrestadores.IdPrestador = Prestadores.Id
        INNER JOIN PrestadoresEspecialidadesTipoEspecialidades ON PrestadoresEspecialidadesTipoEspecialidades.IdPrestador = Prestadores.Id
		    INNER JOIN TipoEspecialidades ON PrestadoresEspecialidadesTipoEspecialidades.IdTipoEspecilidade = TipoEspecialidades.Id
		    WHERE EmpreendimentosPrestadores.IdEmpreendimento = ${idEmpreendimento}&Type=ExecuteReader`;
        return query;
    }

    public static consultarEspecialidadePorEmpreendimento(idEmpreendimento: number): string {

      const query = `SELECT Especialidades.Id, Especialidades.nome FROM EmpreendimentosEspecialidades
      INNER JOIN Especialidades ON EmpreendimentosEspecialidades.IdEspecialidade = Especialidades.Id
      WHERE EmpreendimentosEspecialidades.IdEmpreendimento = ${idEmpreendimento}&Type=ExecuteReader`;
      return query;
    }

    public static consultarConvenioPorEmpreendimento(idEmpreendimento: number): string {

      const query = `SELECT Especialidades.Id, Especialidades.nome FROM EmpreendimentosEspecialidades
      INNER JOIN Especialidades ON EmpreendimentosEspecialidades.IdEspecialidade = Especialidades.Id
      WHERE EmpreendimentosEspecialidades.IdEmpreendimento = ${idEmpreendimento}&Type=ExecuteReader`;
      return query;
    }

    public static consultarConvenios(): string {
      const query = `SELECT Id, nome, uriFoto FROM CONVENIOS&Type=ExecuteReader`;
      return query;
    }
}
