import { SolicitacoesService } from './solicitacoes.service';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
export declare class SolicitacoesController {
    private readonly solicitacoesService;
    constructor(solicitacoesService: SolicitacoesService);
    criar(dto: CriarSolicitacaoDto): Promise<import("./solicitacao.entity").Solicitacao>;
    solRelatorio(): Promise<{
        total: number;
        porStatus: {
            pendente: number;
            aprovada: number;
        };
    }>;
    aprovar(id: number): Promise<import("./solicitacao.entity").Solicitacao>;
    buscarPorId(id: number): Promise<import("./solicitacao.entity").Solicitacao>;
}
