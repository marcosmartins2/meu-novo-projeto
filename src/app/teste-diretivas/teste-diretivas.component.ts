import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Pessoa {
  nome: string;
  idade: number;
  
}

@Component({
  selector: 'app-teste-diretivas',
  imports: [CommonModule],
  templateUrl: './teste-diretivas.component.html',
  styleUrl: './teste-diretivas.component.css'
})




export class TesteDiretivasComponent {
  pessoas: Pessoa[] = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 },
    { nome: 'Ana', idade: 28 },
  ];

  trackById(index: number, pessoa: any): number {
    return pessoa.id;
  }


   isRed: boolean = true;
}
