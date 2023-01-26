const frases: string[] = [
	'Foi de base',
	'Foi de arrasta pra cima',
	'Foi de hexa 2022',
	'Foi de comes e bebes',
	'Foi de deitado eternamente em berço esplêndido',
	'Foi de se vira nos 30',
	'Foi de Wakanda Forever na horizontal',
	'Foi de link na bio',
	'Foi de camisa de saudades',
	'Foi de foto em preto e branco',
	'Foi de Jacksons Five',
	'Foi de F no chat',
	'Foi de Drake e Josh',
	'Foi pra terra jogar de pé junto',
	'Foi jogar no Vasco',
	'Foi de Rainha Elizabeth',
	'Foi de Encontro com Fátima Bernardes',
	'Foi de Bom dia e Cia',
	'Foi pro show do Avicii',
	'Foi de lojas americanas',
	'Foi de Pelé Arantes do Nascimento',
	'Foi de maradona'
];

export function gerarFrase() {
	const i = Math.floor(Math.random() * frases.length);
	const frase = frases[i];
	return frase;
}