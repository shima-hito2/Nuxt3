import { PrismaClient, Prisma } from '@prisma/client';

export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient();
  const method = e.req.method;
  
  if (method === 'GET') {
    const users = await prisma.users.findMany(); // 全件取得
    return users;
  }
  
});