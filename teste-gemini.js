// teste-gemini.js
// Script para testar a integração com a API do Google AI Studio (Gemini)

const { postCompletion } = require('./chatLLM');
const { getContextString } = require('./context');

async function testarIntegracao() {
    console.log("Testando integração com a API do Google AI (Gemini)...");
    
    try {
        // Cria um contexto de teste
        const messages = [
            {"role": "system", "content": getContextString()},
            {"role": "user", "content": "Quais vagas de tecnologia estão disponíveis atualmente?"}
        ];
        
        // Envia a requisição para o Gemini
        console.log("Enviando requisição...");
        const resposta = await postCompletion(messages);
        
        // Exibe a resposta
        console.log("\nResposta do Gemini:");
        console.log("------------------------");
        console.log(resposta);
        console.log("------------------------");
        console.log("\nIntegração testada com sucesso!");
    } catch (error) {
        console.error("Erro durante o teste:", error);
    }
}

// Executa o teste
testarIntegracao();