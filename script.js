// Definindo a "fabrica" (classe)
// Nota: Classes ñ sofrem Hoisting! Devem vir antes do uso (Slide 10)
class Carro {
    // O construtor: a maquina que solda as peças
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // O método buzinar utiliza o referencial interno 'this'
    buzinar() {
        alert(`O ${this.modelo} diz: BI BI! 🔊`);
    }
}

// mostra o que esta sendo digitado
document.getElementById('marca').onkeyup = function() {
    document.getElementById('previewTexto').innerText = this.value || "...";
}

// funcao para criar carro
function fabricarCarro() {
    // Coletaando os dados dos inputs
    const marcaInput = document.getElementById('marca').value;
    const modeloInput = document.getElementById('modelo').value;
    const anoInput = document.getElementById('ano').value;
    const patio = document.getElementById('patio');

    // Validação simples: impede de fabricar carro com campos vazios
    if (!marcaInput || !modeloInput || !anoInput) {
        alert("Por favor, preencha todos os campos da linha de montagem!");
        return;
    }

    // Convertendo o Ano para Number()
    const anoConvertido = Number(anoInput);

    // Instanciando um novo objeto da classe Carro 
    const novoCarro = new Carro(marcaInput, modeloInput, anoConvertido);
    
    // Mostra no console para acompanhar a "automação"
    console.log(novoCarro);

    // Adicionando visualmente o carro ao "Pátio"
    const card = document.createElement('div');
    card.className = 'carro-card';
    
    // Estrutura visual do cartão do carro
    card.innerHTML = `
        <h4>${novoCarro.modelo}</h4>
        <p>Marca: ${novoCarro.marca}</p>
        <p>Ano: ${novoCarro.ano}</p>
        <small style="color: gray; font-size: 11px;">Clique para buzinar</small>
    `;

    // Interação com o Objeto: Ao clicar no carro, ele executa o seu método buzinar()
    card.onclick = function() {
        novoCarro.buzinar();
    };

    // Inspeção de luzes com onmouseover e onmouseout
    card.onmouseover = function() {
        card.style.backgroundColor = '#fff3cd';
        card.style.border = '2px solid #ffc107';
    };
    
    card.onmouseout = function() {
        card.style.backgroundColor = ''; 
        card.style.border = '';
    };

    // Colocando o novo carro dentro da div id="patio"
    patio.appendChild(card);

    // Limpando a linha de montagem para o próximo carro
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('previewTexto').innerText = '...';
}
