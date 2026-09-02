type StatusSolicitacao = 'pendente' | 'aprovada';
type Solicitacao = {
    id: number;
    titulo: string;
    status: StatusSolicitacao;
};
export declare class SolicitacoesService {
    private readonly solicitacoes;
    buscarPorId(id: number): Solicitacao;
    solRelatorio(id: number): number;
    aprovar(id: number): Solicitacao;
    buscarSolicitacoesPorId(id: number): Solicitacao;
}
export {};
