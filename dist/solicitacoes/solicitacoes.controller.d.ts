import { SolicitacoesService } from './solicitacoes.service';
export declare class SolicitacoesController {
    private readonly solicitacoesService;
    constructor(solicitacoesService: SolicitacoesService);
    buscarPorId(id: number): {
        id: number;
        titulo: string;
        status: "pendente" | "aprovada";
    };
    aprovar(id: number): {
        id: number;
        titulo: string;
        status: "pendente" | "aprovada";
    };
    buscarSolicitacoesPorId(id: number): {
        id: number;
        titulo: string;
        status: "pendente" | "aprovada";
    };
    solRelatorio(id: number): number;
}
