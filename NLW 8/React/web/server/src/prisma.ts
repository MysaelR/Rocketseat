import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log:['query'] //qualquer operação que prisma faça no BD (select, insert, update, delete, etc.), ele dê no log para ver as operações sendo realizadas
});


