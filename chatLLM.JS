// chatLLM.js
// Módulo para integrar com a API do Google AI Studio (Gemini)

const axios = require('axios');

// Configure sua chave de API do Google AI Studio
const GOOGLE_API_KEY = "AIzaSyD8GfMC5JJeh9TM9yI6Daq2vSanUofhUyY"; // Substitua pela sua chave real
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

/**
 * Função para converter mensagens do formato Claude/OpenAI para o formato Gemini
 * @param {Array} messages - Array de objetos {role, content}
 * @returns {Array} - Mensagens no formato do Gemini
 */
function convertMessagesToGeminiFormat(messages) {
    const geminiMessages = [];
    
    for (const msg of messages) {
        if (msg.role === "system") {
            // No Gemini, a mensagem do sistema é tratada como uma parte do primeiro prompt
            // Vamos guardar isso temporariamente para adicionar ao primeiro prompt do usuário
            systemContent = msg.content;
        } else if (msg.role === "user") {
            geminiMessages.push({
                role: "user",
                parts: [{ text: msg.content }]
            });
        } else if (msg.role === "assistant") {
            geminiMessages.push({
                role: "model",
                parts: [{ text: msg.content }]
            });
        }
    }
    
    // Se tiver conteúdo de sistema e pelo menos uma mensagem de usuário
    // adicione o conteúdo do sistema na primeira mensagem do usuário
    if (systemContent && geminiMessages.length > 0 && geminiMessages[0].role === "user") {
        const combinedContent = `INSTRUÇÕES DO SISTEMA:\n${systemContent}\n\nMENSAGEM DO USUÁRIO:\n${geminiMessages[0].parts[0].text}`;
        geminiMessages[0].parts[0].text = combinedContent;
    }
    
    return geminiMessages;
}

/**
 * Função para enviar uma solicitação para a API do Google AI Studio (Gemini)
 * @param {Array} messages - Array de objetos de mensagens no formato {role, content}
 * @returns {Promise<string>} - A resposta do modelo
 */
async function postCompletion(messages) {
    try {
        // Variável para armazenar a mensagem do sistema, se houver
        let systemContent = null;
        const conversationMessages = [];
        
        // Extrair a mensagem do sistema e organizar a conversa
        for (const msg of messages) {
            if (msg.role === "system") {
                systemContent = msg.content;
            } else {
                conversationMessages.push(msg);
            }
        }
        
        // Se não houver mensagens de conversa, retorne erro
        if (conversationMessages.length === 0) {
            throw new Error("Nenhuma mensagem de usuário fornecida");
        }
        
        // Configuração da requisição para a API do Gemini
        const requestBody = {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: systemContent 
                                ? `${systemContent}\n\n${conversationMessages[0].content}`
                                : conversationMessages[0].content
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024,
                topP: 0.95,
                topK: 40
            }
        };
        
        // Adicionar histórico de conversa, se houver mais mensagens
        for (let i = 1; i < conversationMessages.length; i++) {
            const msg = conversationMessages[i];
            requestBody.contents.push({
                role: msg.role === "assistant" ? "model" : "user",
                parts: [{ text: msg.content }]
            });
        }
        
        // Adicionar o token de API à URL
        const url = `${API_URL}?key=${GOOGLE_API_KEY}`;
        
        // Faz a requisição para a API
        const response = await axios.post(url, requestBody);
        
        // Verifica se há uma resposta válida
        if (response.data.candidates && 
            response.data.candidates.length > 0 &&
            response.data.candidates[0].content &&
            response.data.candidates[0].content.parts &&
            response.data.candidates[0].content.parts.length > 0) {
            
            // Retorna o texto da resposta
            return response.data.candidates[0].content.parts[0].text;
        } else {
            throw new Error("Resposta da API não contém o texto esperado");
        }
    } catch (error) {
        console.error("Erro ao chamar a API do Google AI:", error.response?.data || error.message);
        
        // Em caso de erro, retorna uma mensagem genérica
        return "Desculpe, estou enfrentando dificuldades técnicas no momento. Por favor, tente novamente mais tarde.";
    }
}

module.exports = {
    postCompletion
};