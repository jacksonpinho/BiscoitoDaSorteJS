const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgTry = document.querySelector("#imgTry")
const btnReset = document.querySelector("#btnReset")

let listSorteados = [];
const textosDaSorte = [
    'Não limite os seus desafios. Desafie os seus limites.',
    'Viver cada dia como se fosse o último é uma ótima oportunidade para aprender a amar cada segundo do seu dia.',
    'Se o plano não funcionar, mude o plano, não a meta.',
    'Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.',
    'Que os seus sonhos te levem para onde o seu coração seja feliz.',
    'Para ter sucesso, você deve eliminar dúvidas, aceitar desafios e rejeitar qualquer negatividade externa.',
    'O que você procura está procurando você.',
    'Uma meta é um sonho com um prazo.',
    'Tente mover o mundo - o primeiro passo será mover a si mesmo.',
    'Disciplina é a ponte entre metas e realizações.',
    'Sorte é o que acontece quando a preparação encontra a oportunidade.'
]



//eventos

imgTry.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', handleResetClick)



//funções
function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}


function handleResetClick(event) {
    event.preventDefault() 
    toggleScreen()
    luckText()
}


function luckText() {
  
    const sorteio = Math.floor(Math.random() * textosDaSorte.length)
    if (listSorteados.length === textosDaSorte.length) {
        screen2.querySelector("h2").innerText = "Todas as opções já foram sorteadas."
        return;
    }
    if (!listSorteados.includes(sorteio)) {
        listSorteados.push(sorteio)
        screen2.querySelector("h2").innerText = textosDaSorte[sorteio]
    } else {
        luckText()
    }
}



