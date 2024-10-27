class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque

        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break;

            case "guerreio":
                ataque = "espada"
                break;

            case "monge":
                ataque = "artes marciais"
                break;

            case "ninja":
                ataque = "shuriken"
                break;
        
            default:
                break;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
        
    }
}

let guerreiro1 = new heroi("Alfredo", 28, "mago")
let guerreiro2 = new heroi('Ulisses', 20, 'guerreiro')
let guerreiro3 = new heroi('Arthur', 22, 'monge')
let guerreiro4 = new heroi('Joaquim', 3, 'ninja')

guerreiro1.atacar()
guerreiro2.atacar()
guerreiro3.atacar()
guerreiro4.atacar()

