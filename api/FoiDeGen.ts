const frases: string[] = [
    "Foi de base",
    "Foi de arrasta pra cima"
]

export function gerarFrase() {
    const i = Math.floor(Math.random() * frases.length)
    const frase = frases[i]
    console.log(frase)
    return frase
}