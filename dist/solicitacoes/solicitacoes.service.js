"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacoesService = void 0;
const common_1 = require("@nestjs/common");
let SolicitacoesService = class SolicitacoesService {
    solicitacoes = [
        { id: 1, titulo: 'Aquisição de notebook', status: 'pendente' },
    ];
    buscarPorId(id) {
        const solicitacao = this.solicitacoes.find((item) => item.id === id);
        if (!solicitacao) {
            throw new common_1.NotFoundException('Solicitação não encontrada');
        }
        return solicitacao;
    }
    solRelatorio(id) {
        const solicitacao = this.buscarPorId(id);
        const relatorio = this.solicitacoes.length;
        return relatorio;
    }
    aprovar(id) {
        const solicitacao = this.buscarPorId(id);
        solicitacao.status = 'aprovada';
        return solicitacao;
    }
    buscarSolicitacoesPorId(id) {
        const solicitacao = this.solicitacoes.find((item) => item.id === id);
        if (!solicitacao) {
            throw new common_1.NotFoundException('Solicitação não encontrada');
        }
        return solicitacao;
    }
};
exports.SolicitacoesService = SolicitacoesService;
exports.SolicitacoesService = SolicitacoesService = __decorate([
    (0, common_1.Injectable)()
], SolicitacoesService);
//# sourceMappingURL=solicitacoes.service.js.map