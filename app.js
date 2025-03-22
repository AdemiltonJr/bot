const { postCompletion } = require("./chatLLM.JS")
const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')
const { getContextString, getVagaById, getVagasBySkill, getVagasByLocation } = require('./context')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

// Fluxo principal que responde a qualquer mensagem
const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAction(
        async (ctx, ctxFn) => {
            let messages = [
                {"role": "system", "content": getContextString()},
                {"role": "user", "content": ctx.body}
            ]
            const answer = await postCompletion(messages);
            await ctxFn.flowDynamic(answer)
        })

// Fluxo específico para perguntas sobre vagas
const flowVagas = addKeyword(['vaga', 'vagas', 'oportunidade', 'oportunidades', 'emprego'])
    .addAction(
        async (ctx, ctxFn) => {
            // Verificar se o usuário está perguntando sobre uma vaga específica com ID
            const vagaIdMatch = ctx.body.match(/[A-Z]+-\d{3}/);
            if (vagaIdMatch) {
                const vagaId = vagaIdMatch[0];
                const vaga = getVagaById(vagaId);
                
                if (vaga) {
                    // Se encontrou a vaga específica, fornece detalhes dela
                    let messages = [
                        {"role": "system", "content": getContextString()},
                        {"role": "user", "content": `Me forneça detalhes completos da vaga ${vagaId}`}
                    ]
                    const answer = await postCompletion(messages);
                    await ctxFn.flowDynamic(answer)
                    return;
                }
            }
            
            // Caso não tenha um ID específico, processa normalmente com o LLM
            let messages = [
                {"role": "system", "content": getContextString()},
                {"role": "user", "content": ctx.body}
            ]
            const answer = await postCompletion(messages);
            await ctxFn.flowDynamic(answer)
        })

// Fluxo para perguntas sobre a empresa
const flowEmpresa = addKeyword(['empresa', 'techinova', 'sobre a empresa', 'cultura', 'benefícios'])
    .addAction(
        async (ctx, ctxFn) => {
            let messages = [
                {"role": "system", "content": getContextString()},
                {"role": "user", "content": `Me conte sobre a empresa, sua cultura e benefícios`}
            ]
            const answer = await postCompletion(messages);
            await ctxFn.flowDynamic(answer)
        })

// Fluxo para perguntas sobre o processo seletivo
const flowProcesso = addKeyword(['processo', 'seletivo', 'entrevista', 'etapas', 'candidatura'])
    .addAction(
        async (ctx, ctxFn) => {
            let messages = [
                {"role": "system", "content": getContextString()},
                {"role": "user", "content": `Explique como funciona o processo seletivo da empresa`}
            ]
            const answer = await postCompletion(messages);
            await ctxFn.flowDynamic(answer)
        })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowVagas, flowEmpresa, flowProcesso, flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()