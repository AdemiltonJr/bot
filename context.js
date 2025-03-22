// context.js
// Este arquivo contém informações de contexto para o bot de recrutamento

const botContext = {
    // Informações gerais sobre o bot
    botInfo: {
        nome: "RecrutaBot",
        versao: "1.0.0",
        funcao: "Assistente de recrutamento virtual"
    },
    
    // Informações sobre a empresa
    empresa: {
        nome: "TechInova Soluções",
        sobre: "A TechInova é uma empresa brasileira de tecnologia fundada em 2015, especializada em desenvolvimento de software, consultoria em TI e soluções digitais personalizadas.",
        missao: "Transformar negócios através de soluções tecnológicas inovadoras e acessíveis.",
        valores: ["Inovação contínua", "Excelência técnica", "Colaboração", "Transparência", "Desenvolvimento humano"],
        cultura: "Ambiente colaborativo e flexível, com foco em resultados e desenvolvimento profissional contínuo. Oferecemos horário flexível, trabalho híbrido e promovemos uma cultura de feedback constante.",
        beneficios: [
            "Plano de saúde e odontológico",
            "Vale refeição/alimentação",
            "Vale transporte ou auxílio combustível",
            "Seguro de vida",
            "Participação nos lucros semestral",
            "14 dias de férias adicionais por ano",
            "Budget anual para cursos e certificações",
            "Gympass",
            "Day-off no aniversário"
        ],
        localizacao: {
            matriz: "São Paulo - SP",
            filiais: ["Rio de Janeiro - RJ", "Belo Horizonte - MG", "Porto Alegre - RS"]
        },
        site: "www.techinova.com.br"
    },
    
    // Informações sobre as vagas disponíveis
    vagas: [
        {
            id: "DEV-001",
            titulo: "Desenvolvedor Full Stack",
            nivel: "Pleno/Sênior",
            regime: "CLT",
            modalidade: "Híbrido (3 dias remoto, 2 dias presencial)",
            localidade: "São Paulo - SP",
            salario: "R$ 9.000 a R$ 14.000",
            descricao: "Desenvolvimento e manutenção de aplicações web utilizando React no frontend e Node.js no backend. Integração com APIs RESTful e bancos de dados SQL/NoSQL.",
            requisitos: [
                "Experiência de 3+ anos com desenvolvimento web",
                "Domínio de JavaScript/TypeScript",
                "Experiência com React e Node.js",
                "Conhecimento em bancos de dados SQL e NoSQL",
                "Experiência com metodologias ágeis",
                "Inglês técnico"
            ],
            diferenciais: [
                "Experiência com AWS ou GCP",
                "Conhecimento em CI/CD",
                "Experiência com microserviços",
                "Contribuições em projetos open source"
            ]
        },
        {
            id: "DATA-002",
            titulo: "Analista de Dados",
            nivel: "Júnior/Pleno",
            regime: "CLT",
            modalidade: "Remoto",
            localidade: "Qualquer localidade",
            salario: "R$ 5.000 a R$ 8.000",
            descricao: "Análise de grandes volumes de dados, criação de dashboards e relatórios para apoio à tomada de decisão, implementação de modelos de análise estatística.",
            requisitos: [
                "Graduação em Estatística, Ciência da Computação, Engenharia ou áreas correlatas",
                "Experiência com SQL e análise de dados",
                "Conhecimento em ferramentas de visualização (Power BI, Tableau)",
                "Experiência com Python ou R para análise de dados",
                "Conhecimento básico em estatística"
            ],
            diferenciais: [
                "Conhecimento em big data (Spark, Hadoop)",
                "Experiência com machine learning",
                "Certificações relacionadas a dados"
            ]
        },
        {
            id: "UX-003",
            titulo: "Designer UX/UI",
            nivel: "Pleno",
            regime: "CLT",
            modalidade: "Híbrido (2 dias remoto, 3 dias presencial)",
            localidade: "Rio de Janeiro - RJ",
            salario: "R$ 6.500 a R$ 9.500",
            descricao: "Criação de interfaces de usuário para produtos digitais, condução de pesquisas com usuários, desenvolvimento de protótipos e wireframes, colaboração com equipes de desenvolvimento.",
            requisitos: [
                "Experiência de 2+ anos como Designer UX/UI",
                "Portfólio com cases relevantes",
                "Domínio de ferramentas como Figma, Adobe XD ou Sketch",
                "Conhecimento em Design Thinking e metodologias de UX",
                "Experiência com testes de usabilidade"
            ],
            diferenciais: [
                "Conhecimento básico de HTML/CSS",
                "Experiência com Design Systems",
                "Conhecimento em acessibilidade web"
            ]
        }
    ],
    
    // Processo seletivo
    processoSeletivo: {
        etapas: [
            {
                nome: "Triagem de currículos",
                descricao: "Análise inicial do currículo e experiências do candidato.",
                tempo: "Até 7 dias após inscrição"
            },
            {
                nome: "Entrevista com RH",
                descricao: "Conversa sobre experiências, expectativas e alinhamento cultural.",
                tempo: "30-45 minutos",
                formato: "Videoconferência"
            },
            {
                nome: "Teste técnico",
                descricao: "Desafio prático relacionado à vaga.",
                tempo: "3-5 dias para conclusão"
            },
            {
                nome: "Entrevista técnica",
                descricao: "Discussão sobre o teste e conhecimentos técnicos com a equipe.",
                tempo: "45-60 minutos",
                formato: "Videoconferência"
            },
            {
                nome: "Entrevista final",
                descricao: "Conversa com o gestor da área para alinhamento final.",
                tempo: "30-45 minutos",
                formato: "Videoconferência ou presencial"
            },
            {
                nome: "Proposta",
                descricao: "Apresentação da proposta e negociação.",
                tempo: "Até 7 dias após a última entrevista"
            }
        ],
        tempoTotal: "O processo completo leva em média 3 a 4 semanas.",
        dicas: [
            "Pesquise sobre a empresa antes das entrevistas",
            "Prepare exemplos concretos de suas experiências anteriores",
            "Tenha perguntas preparadas para fazer aos entrevistadores",
            "No teste técnico, leia atentamente todas as instruções",
            "Seja pontual nas entrevistas virtuais e verifique sua conexão de internet antes"
        ]
    },
    
    // FAQ - Perguntas frequentes
    faq: [
        {
            pergunta: "Como me candidatar às vagas?",
            resposta: "Você pode se candidatar através do nosso site (www.techinova.com.br/carreiras) ou enviar seu currículo para vagas@techinova.com.br mencionando o código da vaga no assunto."
        },
        {
            pergunta: "É possível trabalhar 100% remoto?",
            resposta: "Isso depende da vaga. Temos vagas totalmente remotas e outras em modelo híbrido. Cada descrição de vaga especifica a modalidade de trabalho."
        },
        {
            pergunta: "Qual o prazo para receber um retorno após a candidatura?",
            resposta: "Procuramos dar um retorno em até 7 dias úteis após a candidatura. Candidatos que avançam no processo são contatados mais rapidamente."
        },
        {
            pergunta: "Posso me candidatar a mais de uma vaga simultaneamente?",
            resposta: "Sim, você pode se candidatar a mais de uma vaga, desde que atenda aos requisitos. Recomendamos focar nas posições mais alinhadas ao seu perfil."
        },
        {
            pergunta: "A empresa oferece oportunidades para estágio ou primeiro emprego?",
            resposta: "Sim, periodicamente abrimos vagas para estagiários e profissionais em início de carreira, principalmente nas áreas de desenvolvimento e dados."
        }
    ]
};

// Função para obter o contexto completo formatado para enviar ao LLM
function getContextString() {
    return `
Você é o ${botContext.botInfo.nome}, assistente virtual de recrutamento da ${botContext.empresa.nome}.
Sua função é fornecer informações sobre vagas disponíveis e o processo seletivo para candidatos potenciais.

SOBRE A EMPRESA:
${botContext.empresa.sobre}
Missão: ${botContext.empresa.missao}
Valores: ${botContext.empresa.valores.join(", ")}
Cultura: ${botContext.empresa.cultura}

BENEFÍCIOS OFERECIDOS:
${botContext.empresa.beneficios.map(b => `- ${b}`).join("\n")}

VAGAS DISPONÍVEIS:
${botContext.vagas.map(vaga => `
ID: ${vaga.id}
Título: ${vaga.titulo}
Nível: ${vaga.nivel}
Regime: ${vaga.regime}
Modalidade: ${vaga.modalidade}
Localidade: ${vaga.localidade}
Faixa Salarial: ${vaga.salario}
Descrição: ${vaga.descricao}
Requisitos: ${vaga.requisitos.map(r => `- ${r}`).join("\n")}
Diferenciais: ${vaga.diferenciais.map(d => `- ${d}`).join("\n")}
`).join("\n---\n")}

PROCESSO SELETIVO:
${botContext.processoSeletivo.etapas.map((etapa, index) => `
Etapa ${index+1}: ${etapa.nome}
${etapa.descricao}
Duração: ${etapa.tempo}
${etapa.formato ? `Formato: ${etapa.formato}` : ""}
`).join("\n")}

Tempo total do processo: ${botContext.processoSeletivo.tempoTotal}

INSTRUÇÕES DE COMPORTAMENTO:
1. Seja cordial e profissional ao interagir com os candidatos.
2. Forneça informações detalhadas sobre as vagas quando solicitado.
3. Se o candidato perguntar sobre uma vaga específica, detalhe os requisitos e benefícios.
4. Se for perguntado sobre algo que não consta nas informações disponíveis, ofereça encaminhar a dúvida para o time de RH.
5. Evite fazer promessas ou dar garantias sobre contratação.
6. Incentive os candidatos qualificados a se candidatarem.
7. Se um candidato parecer adequado para uma vaga diferente da que ele perguntou, sugira essa outra oportunidade.
8. Não compartilhe informações sensíveis ou confidenciais sobre a empresa.
9. Ao final da conversa, oriente o candidato sobre os próximos passos para formalizar a candidatura.
`;
}

// Função para obter detalhes de uma vaga específica pelo ID
function getVagaById(id) {
    return botContext.vagas.find(vaga => vaga.id === id);
}

// Função para obter vagas por tecnologia ou habilidade
function getVagasBySkill(skill) {
    const skillLower = skill.toLowerCase();
    return botContext.vagas.filter(vaga => {
        const requisitosString = vaga.requisitos.join(' ').toLowerCase();
        const diferenciaisString = vaga.diferenciais.join(' ').toLowerCase();
        const descricaoLower = vaga.descricao.toLowerCase();
        
        return requisitosString.includes(skillLower) || 
               diferenciaisString.includes(skillLower) || 
               descricaoLower.includes(skillLower);
    });
}

// Função para obter vagas por localidade
function getVagasByLocation(location) {
    const locationLower = location.toLowerCase();
    return botContext.vagas.filter(vaga => 
        vaga.localidade.toLowerCase().includes(locationLower)
    );
}

// Função para obter resposta do FAQ
function getFaqAnswer(pergunta) {
    const perguntaLower = pergunta.toLowerCase();
    const faqItem = botContext.faq.find(item => 
        item.pergunta.toLowerCase().includes(perguntaLower)
    );
    
    return faqItem ? faqItem.resposta : null;
}

module.exports = {
    botContext,
    getContextString,
    getVagaById,
    getVagasBySkill,
    getVagasByLocation,
    getFaqAnswer
};