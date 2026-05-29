# 🚗 Gestor de Frota – Concessionária Digital

A Concessionária Digital é um Sistema de Gestão de Frota Industrial desenvolvido para modernizar uma linha de montagem e automatizar o controle de estoque de veículos. Este projeto substitui registros manuais e isolados por uma solução dinâmica e automatizada.

O projeto foi construído como um **Desafio Prático** para consolidar conceitos fundamentais de Programação Orientada a Objetos (POO) e manipulação do DOM em JavaScript.

---

## 🎯 Objetivos de Aprendizado Cumpridos

* **Classes (ES6):** Criação de moldes padronizados para produção de veículos em escala.
* **Constructor:** Uso do maquinário interno para processar e inicializar parâmetros de entrada.
* **Métodos e `this`:** Implementação de ações que utilizam o referencial interno do próprio objeto instanciado.
* **Eventos do DOM:** Uso de gatilhos como `onkeyup` (teclado), `onclick`, `onmouseover` e `onmouseout` (mouse) para dar vida à interface.
* **Instanciação:** Uso da palavra-chave `new` para criar objetos dinâmicos em tempo real.

---

## 🛠️ Funcionalidades do Sistema

1.  **Linha de Montagem Automatizada:** Inputs para coletar Marca, Modelo e Ano do veículo.
2.  **Preview em Tempo Real:** O campo "Marca" atualiza visualmente um elemento na tela enquanto o usuário digita (`onkeyup`).
3.  **Fabricação Dinâmica:** Ao clicar no botão, o sistema converte o ano para tipo numérico, instancia a classe `Carro` e adiciona o veículo visualmente ao pátio.
4.  **Interação com o Objeto:** Cada carro estacionado no pátio é um objeto independente. Ao clicar no cartão do carro, ele executa o seu método interno `.buzinar()`.
5.  **Inspeção de Luzes (Desafio Extra):** Ao passar o mouse sobre um veículo (`onmouseover`), o cartão muda de cor simulando uma inspeção de faróis na fábrica, retornando à cor original ao retirar o ponteiro (`onmouseout`).

---

## 💻 Tecnologias Utilizadas

* **HTML5:** Estrutura e semântica do formulário e do pátio de veículos.
* **CSS3:** Estilização moderna com layout centralizado, responsividade e feedbacks visuais de foco e *hover*.
* **JavaScript (ES6):** Lógica de Programação Orientada a Objetos e manipulação de eventos.

---

## 🚀 Como Executar o Projeto

Como este é um projeto front-end puro, você não precisa instalar nenhuma dependência ou banco de dados.

1. Faça o clone deste repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em qualquer navegador web (Chrome, Edge, Firefox, etc.).
3. *Alternativa:* Se você estiver usando o VS Code, pode abrir utilizando a extensão **Live Server**.

---

## 👤 Desenvolvedor

* **Nome:** Kayky Vieira
* **Curso:** Análise e Desenvolvimento de Sistemas (ADS)
