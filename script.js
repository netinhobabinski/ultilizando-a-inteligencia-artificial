const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "",
        alternativas: [
            {
                texto: "Ao planejar uma atividade de fim de semana, o que mais te motiva?",
                afirmacao: "Sua motivação é intrinsecamente ligada à Performance e Desenvolvimento Pessoal, buscando a melhoria contínua através do lazerl. "
            },
            {
                texto: "O convívio social e a possibilidade de se divertir e relaxar com amigos, não importando tanto a atividade em si, mas a companhia",
                afirmacao: "O lazer é visto primariamente como uma ferramenta de Conexão e Bem-Estar Social, onde a experiência compartilhada é o maior valor."
            }
        ]
    },
    {
        enunciado: "Qual cenário de férias te atrai mais?",
        alternativas: [
            {
                texto: "Explorar lugares remotos, acampar e fazer trilhas longas ou esportes radicais, onde a natureza é o principal desafio e entretenimento..",
                afirmacao: "Busca o lazer na Aventura e na Exploração de Ambientes Naturais, valorizando a imprevisibilidade e a autossuficiência."
            },
            {
                texto: "Passar o tempo em um local com infraestrutura esportiva organizada (clube, resort), onde posso praticar esportes com regras definidas e segurança.",
                afirmacao: "Prefere um lazer Estruturado e Controlado, onde a organização e a acessibilidade facilitam a prática consistente de atividades."
            }
        ]
    },
    {
        enunciado: "Em uma discussão sobre o esporte de alto rendimento, qual é o seu principal ponto de vista?",
        alternativas: [
            {
                texto: "O esporte profissional deve ser um modelo de estratégia e eficiência, onde a tecnologia e a análise de dados são cruciais para a vitória.",
                afirmacao: "Tem um olhar Analítico e Estratégico sobre o esporte, vendo-o como uma ciência de otimização de resultados e desempenho."
            },
            {
                texto: "O mais importante são as histórias de vida e o simbolismo cultural dos atletas, que inspiram milhões e promovem valores de perseverança.",
                afirmacao: "Seu interesse é focado no **Aspecto Humano e Inspiracional** do esporte, valorizando a narrativa e o impacto social e emocional."
            }
        ]
    },
    {
        enunciado: "Se você fosse um líder de equipe em um jogo, qual seria sua prioridade imediata após uma derrota?",
        alternativas: [
            {
                texto: "Reunir o time para revisar os erros táticos e técnicos, definindo novos planos de treino para não repetir a falha.",
                afirmacao: "Sua abordagem é Pragmática e Corretiva, focada em dados e ajustes técnicos para garantir resultados futuros."
            },
            {
                texto: "Levantar o ânimo de todos, focando na **coesão do grupo** e na importância de manter a confiança e o espírito de equipe elevado..",
                afirmacao: "Sua liderança é **Emocional e Motivacional**, entendendo que o fator humano e a moral são decisivos para a recuperação"
            }
        ]
    },
    {
        enunciado: "Em relação a 'lazer passivo' (como assistir a eventos, filmes, etc.), qual atitude mais te define? ",
        alternativas: [
            {
                texto: "Consumo o lazer passivo como um estudo, buscando referências e técnicas que possa aplicar nas minhas atividades práticas.",
                afirmacao: "Até mesmo seu lazer passivo é Intencional e Voltado para o Aprendizado, buscando conhecimento aplicável em suas práticas ativas."
            },
            {
                texto: "Utilizo o lazer passivo como uma fuga total da rotina, permitindo-me desligar e recuperar as energias para o próximo dia.",
                afirmacao: "O lazer passivo serve como uma ferramenta de Descanso e Restauração Mental, sendo fundamental para o equilíbrio emocional e a recarga. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Sobre...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();

