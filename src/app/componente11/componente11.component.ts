import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  // Visibilidade dos botões
  btnCadastrar: boolean = true;

  // Armazenar índice da pessoa selecionada
  indice: number = -1;

  vetor:Pessoa[] = [];

  // Função de cadastro
  cadastrar() {
    // Cadastro no vetor
    this.vetor.push(this.formulario.value as Pessoa);

    // Limpeza dos inputs
    this.formulario.reset();

    // Visualização via console
    // console.table(this.vetor);
  }

  // Função de seleção
  selecionar(indice: number){
    // Atribuir o índice selecionado
    this.indice = indice;

    // Preencher o formulário com os dados da pessoa selecionada
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    // Visibilidade dos botões
    this.btnCadastrar = false;
  }

  // Função de alteração
  alterar() {
    // Alterar o vetor com os dados do formulário
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    // Limpeza dos inputs
    this.formulario.reset();

    // Voltar a visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Função de remoção
  remover() {
    // Remover a pessoa do vetor
    this.vetor.splice(this.indice, 1);

    // Limpeza dos inputs
    this.formulario.reset();

    // Voltar a visibilidade dos botões
    this.btnCadastrar = true;
  }

  // Função de cancelamento
  cancelar() {
    // Limpeza dos inputs
    this.formulario.reset();

    // Voltar a visibilidade dos botões
    this.btnCadastrar = true;
  }
}
