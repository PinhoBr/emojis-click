const areaJogo = document.querySelector('#game-area')
const PontosDisplay = document.querySelector('#pontos')
const ListaHistorico = document.querySelector('#historico')

let pontos = 0;
const emojis = ['😊','👌','😂','🤣','😍','😘']
const mensagensZoeiras = [
    'mandou ver no emoji calabreso!😉',
    'olha o clique brabo!🤣',
    'zoeira nivel maximo!😂',
    'clicou como campeao!😍',
    'emoji pego na zoeira!😎',
    'boa man, ta voando nos cliques!!😘👌'
]

function adicionarHistorico(texto){
    const li = document.createElement('li')
    const horario = new Date().toLocaleDateString('pt-BR')
    li.textContent = `${horario} - ${texto}`
    li.classList.add('zoeiro')
    ListaHistorico.appendChild(li)

    if(ListaHistorico.children.length > 10){
        ListaHistorico.removeChild(ListaHistorico.firstChild)
    }

}

function criarEmoji() {
    const emoji = document.createElement('div')
    emoji.classList.add('emoji')

    const indiceAleatorio = Math.floor(Math.random() * emojis.length)
    emoji.textContent = emojis[indiceAleatorio]

    const maxX = areaJogo.offsetWidth - 50
    const maxY = areaJogo.offsetWidth - 50

    emoji.style.left = `${Math.random() * maxX}px`
    emoji.style.top = `${Math.random() * maxY}px`


    emoji.addEventListener('click', ()=>{
     emoji.classList.add('clicado')
     pontos += 5
     PontosDisplay.textContent = pontos

     const mensagem = mensagensZoeiras[Math.floor(Math.random()*mensagensZoeiras.length)]
     adicionarHistorico(`${mensagem} (${emoji.textContent})`)
    
     if (emoji.isConnected) emoji.remove()
    })

    areaJogo.appendChild(emoji)

    setTimeout(() =>{
        if(emoji.isConnected){
            emoji.remove()
            pontos = math.max(0, pontos -1)
            pontosDisplay.textContent = pontos
            adicionarHistorico()
            adicionarHistorico(`emoji nao pego = sem zoeira!${emoji.textContent}! 🤣`)
        }
        
        
    },2000)
}
setInterval(criarEmoji, 1500)

    criarEmoji()
