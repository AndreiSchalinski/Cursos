new Vue({
    el: '#app',
    data: {
        start: false,
        pontuacaoMonstro: 100,
        pontuacaoJogador: 100,
        logs: []
    },
    computed: {
        resultadoGerado() {
            return this.pontuacaoJogador == 0 || this.pontuacaoMonstro == 0
        }
    },
    methods: {
        startJogo() {
            this.start = true,
                this.pontuacaoMonstro = 100,
                this.pontuacaoJogador = 100,
                this.logs = []
        },
        atacar() {
            this.pontuacaoJogador = this.pontuacaoJogador - 20
            this.registraLog(`JOGADOR ATINGIU MONSTRO COM ${20}`, 'player')
            this.pontuacaoMonstro = this.pontuacaoMonstro - 10
            this.registraLog(`JOGADOR ATINGIU MONSTRO COM ${10}`, 'monster')
        },
        ataqueEspecial() {
            this.pontuacaoJogador = this.pontuacaoJogador - 40
            this.registraLog(`JOGADOR ATINGIU MONSTRO COM ${40}`, 'player')
            this.pontuacaoMonstro = this.pontuacaoMonstro - 30
            this.registraLog(`MONSTRO ATINGIU JOGADOR COM ${30}`, 'monster')
        },
        curarJogador() {
            this.pontuacaoJogador = this.pontuacaoJogador + 20
            this.registraLog(`JOGADOR GANHOU FORÇA DE ${20}`, 'player')
            this.pontuacaoJogador = this.pontuacaoJogador - 5
            this.registraLog(`MONSTRO ATINGIU JOGADOR COM ${5}`, 'monster')
        },
        registraLog(text, participante) {
            this.logs.unshift({text, participante})
        },
    },
    watch: {
        resultadoGerado(result) {
            if (result) this.start = false
        }
    }
})