//variável para verificar a vitória
const victory = setInterval(verificationVictory, 100)

//variável para verificar se há alguma carta virada ou já com conjunto
const verifyCard = setInterval(hasBoxOpen, 50)

//variável para ver se já foi adicionado algum emote
let addEmoji = 0

//variável com as figurinhas das cartas
const emojis = [
    "💩", "💩", "🔥", "🔥", "👽️", "👽️", "👅", "👅", "🙀", "🙀", "🍓", "🍓", "🏀", "🏀", "📞", "📞"
]

//variável das cartas que já foram abertas
let openCards = []

//variável que embaralha as cartas
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1))

//criação das cartas no HTML
for (let i = 0; i < emojis.length; i++) {
    //criação da div
    let box = document.createElement("div")

    //adição da classe na div
    box.className = "item"

    //adição da figurinha como texto
    box.innerHTML = shuffleEmojis[i]

    //adição da função ao ser clicada
    box.onclick = handleClick

    //adição da div como filha da div com "game" definido como sua classe
    document.querySelector(".game").appendChild(box)
}

//função chamada ao ser clicado a div
function handleClick() {
    //verifica se as cartas abertas ainda não são duas e se não é a mesma carta
    if (openCards.length < 2 && !this.classList.contains("boxOpen") && !this.classList.contains("boxMatch")) {
        //adiciona a classe boxOpen, à lista openCards e acrescenta 1 ao contador de emojis adicionados
        this.classList.add("boxOpen")
        openCards.push(this)
        addEmoji++
    }

    //se já houver duas abertas chama a verificação para ver se elas são iguais
    if (openCards.length === 2) {
        setTimeout(checkMatch, 350)
    }
}

function checkMatch() {
    //verifica se as cartas já foram definidas
    if (openCards[0] !== undefined && openCards[1] !== undefined) {
        //verifica se a carta 1 é igual a carta 2 aberta e se for adiciona a classe boxMatch e remove a função do clique, senão remove a classe boxOpen
        if (openCards[0].innerHTML === openCards[1].innerHTML) {
            openCards[0].classList.add("boxMatch")
            openCards[0].onclick = ""
            openCards[1].classList.add("boxMatch")
            openCards[1].onclick = ""
        } else {
            openCards[0].classList.remove("boxOpen")
            openCards[1].classList.remove("boxOpen")
        }
    }

    //define as cartas abertas como vazias para poder verificar novamente quando houver duas e zera os emojis adicionados
    openCards = []
    addEmoji = 0
}

//função que verifica se há alguma carta solta ou com alguma classe em falta
function hasBoxOpen() {
    //lista com as variáveis das classes utilizadas
    const allBoxOpen = document.querySelectorAll(".boxOpen")
    const allBoxMatch = document.querySelectorAll(".boxMatch")

    //verifica se há alguma carta virada porém não está adicionada à classe openCards e se tiver adiciona e acrescenta 1 à variável de emojis adicionados
    for (let i = 0; i < allBoxOpen.length; i++) {
        if (addEmoji === 0 && openCards.length === 0 && allBoxOpen.length > 0 && !allBoxOpen[i].classList.contains("boxMatch")) {
            openCards.push(allBoxOpen[i])
            addEmoji = 1
        }
    }

    //verifica se há alguma carta com sua dupla virada que esteja sem a classe boxOpen que é utilizada em outras verificações e tiver adiciona
    for (let i = 0; i < allBoxMatch.length; i++) {
        if (!allBoxMatch[i].classList.contains("boxOpen")) {
            allBoxMatch[i].classList.add("boxOpen")
        }
    }
}

//função que verifica se todas as cartas já foram viradas para ativar o a telinha de vitória
function verificationVictory() {
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        document.querySelector(".victory").style.display = "block"
        clearInterval(victory)
    }
}

