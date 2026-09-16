export type StatusSolicitacao = 'pendente' | 'aprovada';
export declare class Solicitacao {
    id: number;
    titulo: string;
    status: StatusSolicitacao;
    versao: number;
    criadaEm: Date;
    atualizadaEm: Date;
}
