console.log("JAVASCRIPT CONECTADO!!");

class Veiculo {
  //constructor - é um método especial do javascript
  constructor(marca, modelo) {
    //THIS - é uma palavra-chave, que se refere ao próprio objeto criado.
    this.marca = marca;
    this.modelo = modelo;
  }
}

//OBJETO - é uma instancia de classe
const carro = new Veiculo("mclaren", "765lt");
console.log(carro.marca);

/*------------------------------------------------------------------------------------------------------*/
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const celular = new Produto("celular", 1500);
const notebook = new Produto("NoteBook", 1500);

console.log(
  `Nome do produto: ${celular.nome} - Preço do produto: ${celular.preco}`
);
console.log(notebook.nome);

/*------------------------------------------------------------------------------------------------------*/

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
  }
  getSaldo() {
    return `Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}

const conta = new contaBancaria(1000);
conta.depositar(1000);
console.log(conta.getSaldo());

/*------------------------------------------------------------------------------------------------------*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentacao(nome, idade) {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentacao = new Pessoa("victor", 18);
console.log(minhaApresentacao.apresentacao());

/*-------------------------------------------------------------------------------------------------------*/

class Steam {
  //atributo encapsulado - ou seja Privado
  //apenas classe e métodos dentro da classe tem acesso
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O depósito é invalido!");
    }
  }

  getSaldoSteam() {
    return `Seu saldo atual na steam é ${this.#saldo}`;
  }
}

const steam = new Steam(1500);
steam.depositarValorSteam(300);
console.log(steam.getSaldoSteam());

/*-----------------------------------------------------------------------------------------------------------*/
class Usuario {
  constructor(senha) {
    // this.senha = "123456789"
    this.senha = senha;
  }

  #verificarForcaSenha(senha) {
    return senha.length > 6 ? true : false;
  }

  criarConta() {
    if (this.#verificarForcaSenha(this.senha)) {
      return console.log("Conta criada!");
    }

    return console.log("Senha Inválida");
  }
}

const user = new Usuario("123456789");
console.log(user.criarConta());

/*----------------------------------------------------------------------------------------------------------*/
// extends - palavra-chave ultilizada em javascript para criar uma classe filha
// que herda uma classe pai, neste casoo carro(filho) herda veiculo(pai)
class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    //super - utilizado para chamar o constructor da classe pai
    // e reutiliza seus atributos
    super(marca, modelo);
    this.portas = portas;
  }

  info() {
    console.log(
      `A marca do carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas} portas`
    );
  }
}

const meuCarro = new Carro("honda", "NSX", 2);
meuCarro.info();

/*------------------------------------------------------------------------------------------------*/

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  mostrarDados() {
    console.log(
      `Funcionario: ${this.nome}, salario: R$${this.salario.toFixed(2)} `
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }

  mostrarSetor() {
    console.log(`${this.nome} é gerente do setor ${this.tipo}`);
  }
}

const gerente = new Gerente("Alcindo", 10000, "TI");
gerente.mostrarDados();
gerente.mostrarSetor();

/*-------------------------------------------------------------------------------------------------*/
