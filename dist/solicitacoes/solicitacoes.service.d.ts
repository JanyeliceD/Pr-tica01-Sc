import { Repository } from 'typeorm';
import { CriarSolicitacaoDto } from './dto/criar-solicitacao.dto';
import { Solicitacao } from './solicitacao.entity';
export declare class SolicitacoesService {
    private readonly repository;
    constructor(repository: Repository<Solicitacao>);
    listar(): Promise<Solicitacao[]>;
    buscarPorId(id: number): Promise<Solicitacao>;
    criar(dto: CriarSolicitacaoDto): Promise<Solicitacao>;
    solRelatorio(): Promise<{
        total: number;
        porStatus: {
            pendente: number;
            aprovada: number;
        };
    }>;
    aprovar(id: number): Promise<Solicitacao>;
}
