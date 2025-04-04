// // const minhaPromise = new Promise((resolve, reject) => {
// //   let sucesso = true;

// //   setTimeout(() => {
// //     if (sucesso) {
// //       resolve("A PROMISE FOI UM SUCESSO");
// //     } else {
// //       reject("A PROMISE NÃO FOI UM SUCESSO");
// //     }
// //   }, 2000);
// // });

// // minhaPromise.then((resultado) => console.log(resultado)).catch((erro) => console.log(erro));

// function buscarEndereco(cep) {
//   return new Promise((resolve, reject) => {
//     console.log("Buscando endereço...");

//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Erro na resposta da API");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         if (data.erro) {
//           reject("CEP não foi encontrado!");
//         } else {
//           resolve(data);
//         }
//       })
//       .catch((error) => {
//         reject("Erro na requisição: " + error);
//       });
//   });
// }

// buscarEndereco("01001000")
//   .then((endereco) => {
//     console.log("endereço encontrado: ", endereco);
//   })
//   .catch((error) => console.log(error));

async function buscarEndereco() {
  try {
    console.log("buscando endereço...");
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = resposta.json();
  } catch (error) {
    console.log(error);
  }
}

buscarEndereco("01001000");
console.log("requisição enviada!");
