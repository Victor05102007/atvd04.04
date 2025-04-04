class Funcionario {
  constructor(nome, salario, dataAdmissao, bonus) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
    this.bonus = bonus;
  }

  calcularBonus() {
    return this.salario * this.bonus;
  }

  exibirDetalhes() {
    console.log(
      `Funcionario: ${this.nome}, salário: R$${this.salario.toFixed(
        2
      )}, Admitido em: ${
        this.dataAdmissao
      }, E seu bônus foi de ${this.calcularBonus()}`
    );
  }
}

const Novofuncionario = new Funcionario("victor", 1800, "03.11.2008", 0.1);
console.log(Novofuncionario.exibirDetalhes());
/*-------------------------------------------------------------------------------------*/
class Gerente extends Funcionario {
  constructor(nome, salario, dataAdmissao, bonus) {
    super(nome, salario, dataAdmissao, bonus);
    this.bonus = bonus;
  }

  calculoGerente() {
    console.log(
      `${this.nome} é gerente desde ${
        this.dataAdmissao
      }, Tem um salário de: R$${
        this.salario
      } e seu bônus é de: ${this.calcularBonus()}`
    );
  }
}

const gerente = new Gerente("Alcindo", 40000, "02.05.2000", 0.2);
gerente.calculoGerente();
