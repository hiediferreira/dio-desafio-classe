/**
    Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
    - nome
    - idade
    - tipo (ex: guerreiro, mago, monge, ninja )

    Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
    - exibir a mensagem: "o {tipo} atacou usando {ataque}"
    - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
    - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

    se mago -> no ataque exibir (usou magia)  
    se guerreiro -> no ataque exibir (usou espada)  
    se monge -> no ataque exibir (usou artes marciais)  
    se ninja -> no ataque exibir (usou shuriken)
*/

class Heroi{
    constructor(nome, idade, tipoHeroi){
        this.nome = nome
        this.idade = idade
        this.tipoHeroi = tipoHeroi
    }

    atacar(){
        var ataque = ''
        if(this.tipoHeroi === 'Mago'){
            ataque = 'Magia'
        } else if(this.tipoHeroi === 'Guerreiro'){
            ataque = 'Espada'
        } else if(this.tipoHeroi === 'Monge'){
            ataque = 'Artes Marciais'
        } else {
            ataque = 'Shuriken'
        }

        return console.log(`O guerreiro ${this.nome} do tipo ${this.tipoHeroi} atacou usando ${ataque}.`)
    }
}

var novoHeroi = new Heroi("Aurora", 25, "Mago")
novoHeroi.atacar()