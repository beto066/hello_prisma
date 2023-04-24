import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
//   Cadastrar Usuario
//   const user = await prisma.user.create({
//     data: {
//       nome: 'Alice',
//       email: 'alice@prisma.io',
//     },
//   });
//   console.log(user);

//   Consultar Usuarios
//   const users = await prisma.user.findMany();
//   console.log(users);

//   const user = await prisma.user.create({
//     data: {
//       nome: 'Bob',
//       email: 'bob@prisma.io',
//       posts: {
//         create: {
//           title: 'Hello World',
//         },
//       },
//     },
//   });
//   console.log(user);

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
}

let cadastrarUsuario = async function (nome, email, telefone){
  const user = await prisma.user.create({
    data : {
      nome : nome,
      email : email,
    }
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

export { cadastrarUsuario };

