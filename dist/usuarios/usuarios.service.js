"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    usuarios = [
        {
            id: 1,
            nome: 'Ana Lima',
            email: 'ana@empresa.com',
            senhaHash: '$2b$12$J57O7dZNtzhOo3IwclwNKOj9Xp8n3t75A1j/8lpT7WlmvJoya0oJe',
            papel: 'gestor',
            ativo: true,
        },
        {
            id: 2,
            nome: 'Bruno Silva',
            email: 'bruno@empresa.com',
            senhaHash: '$2b$12$5S9LDbR3FznMAsZY5P..2OKE932dOHeVvGrmlfklgquClbkKgUidC',
            papel: 'solicitante',
            ativo: true,
        },
        {
            id: 3,
            nome: 'Carla Santos',
            email: 'carla@empresa.com',
            senhaHash: '$2b$12$8UwcnBpVr/rrO0Fx0YxFQ.ISHfKZjidReE8oJ78dShdnwukP5LxJO',
            papel: 'auditor',
            ativo: true,
        },
        {
            id: 4,
            nome: 'Janyelice',
            email: 'janyelice@empresa.com',
            senhaHash: '$2b$12$QwY.VAoquBnSaBTzWIA2OebaosVr7Ac50Gs1lHKLCWfa4aQBMhtIy',
            papel: 'gestor',
            ativo: true,
        },
        {
            id: 5,
            nome: 'Soares',
            email: 'soares@empresa.com',
            senhaHash: '$2b$12$5INi3nWVtZoBjYu2w9qiT.E.CBW2y5D3ZGwKRzz3/l7ctWNE2V37m',
            papel: 'auditor',
            ativo: true,
        },
    ];
    buscarPorEmail(email) {
        return this.usuarios.find((usuario) => usuario.email === email);
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map