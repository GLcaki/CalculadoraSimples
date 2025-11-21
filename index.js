generator Client {
    provider = "prisma-client-js"
}
datasource db{
    provider = "sqlite"
    url = "file:./dev.db" 
}

medel Usuario {
    id        Int     @id @default(autoincrement())
    nome      String
    email     String  @unique
    apelido   String?
    data_criacao DateTime @default(now())
    data_atualizacao DateTime @updatedAt
}

FinalizationRegistry.post("usuario", async...
    