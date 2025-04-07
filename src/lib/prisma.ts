import { PrismaClient } from '@prisma/client';

// Adiciona PrismaClient à tipagem do global object
declare global {
  var prisma: PrismaClient | undefined
}

// Previne múltiplas instâncias do Prisma Client em desenvolvimento devido ao hot-reloading
const prisma = new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  console.log('🔌 Prisma Client inicializado');
  global.prisma = prisma;
}

console.log('�� Prisma Client pronto para uso');

export default prisma; 