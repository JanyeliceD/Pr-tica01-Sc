"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacoesController = void 0;
const common_1 = require("@nestjs/common");
const solicitacoes_service_1 = require("./solicitacoes.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
let SolicitacoesController = class SolicitacoesController {
    solicitacoesService;
    constructor(solicitacoesService) {
        this.solicitacoesService = solicitacoesService;
    }
    buscarPorId(id) {
        return this.solicitacoesService.buscarPorId(id);
    }
    aprovar(id) {
        return this.solicitacoesService.aprovar(id);
    }
    buscarSolicitacoesPorId(id) {
        return this.solicitacoesService.buscarSolicitacoesPorId(id);
    }
    solRelatorio(id) {
        return this.solicitacoesService.solRelatorio(id);
    }
};
exports.SolicitacoesController = SolicitacoesController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('gestor'),
    (0, common_1.Patch)('solicitacoes/:id/aprovar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "aprovar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('gestor', 'auditor'),
    (0, common_1.Get)('solicitacoes/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "buscarSolicitacoesPorId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('gestor', 'auditor'),
    (0, common_1.Get)('solicitacoes/relatorio'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SolicitacoesController.prototype, "solRelatorio", null);
exports.SolicitacoesController = SolicitacoesController = __decorate([
    (0, common_1.Controller)('solicitacoes'),
    __metadata("design:paramtypes", [solicitacoes_service_1.SolicitacoesService])
], SolicitacoesController);
//# sourceMappingURL=solicitacoes.controller.js.map