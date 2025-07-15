document.addEventListener('DOMContentLoaded', () => {
    const userPromptInput = document.getElementById('user-prompt');
    const askLlmBtn = document.getElementById('ask-llm-btn');
    const responseArea = document.getElementById('response-area');
    const llmResponseDiv = document.getElementById('llm-response');
    const loadingIndicator = document.getElementById('loading-indicator');

    askLlmBtn.addEventListener('click', async () => {
        const prompt = userPromptInput.value.trim();

        if (!prompt) {
            llmResponseDiv.textContent = 'אנא הזן שאלה.';
            responseArea.classList.remove('hidden');
            return;
        }

        // Show loading indicator and hide previous response
        llmResponseDiv.textContent = '';
        responseArea.classList.remove('hidden');
        loadingIndicator.classList.remove('hidden');
        askLlmBtn.disabled = true; // Disable button during loading

        try {
            // In a real application, this URL would point to your server-side API
            // that uses the Python transformers pipeline.
            const simulatedApiEndpoint = 'https://api.example.com/deepseek-predict'; // Placeholder URL

            // Simulate an API call
            // We're using a timeout to mimic network latency and processing time
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate 2-second delay

            // Simulate the response from the LLM
            const simulatedResponse = {
                status: 'success',
                data: [
                    {
                        generated_text: `היי! קיבלתי את שאלתך: "${prompt}".\nזוהי הדמיית תגובה מהמודל DeepSeek. במערכת אמיתית, התשובה האמיתית תופיע כאן.`
                    }
                ]
            };

            if (simulatedResponse.status === 'success' && simulatedResponse.data && simulatedResponse.data.length > 0) {
                llmResponseDiv.textContent = simulatedResponse.data[0].generated_text;
            } else {
                llmResponseDiv.textContent = 'שגיאה בחיבור למודל או קבלת תשובה ריקה.';
            }

        } catch (error) {
            console.error('שגיאה בחיבור ל-API הסימולציה:', error);
            llmResponseDiv.textContent = 'אירעה שגיאה בעת ניסיון להתחבר ל-API. אנא נסה שוב מאוחר יותר.';
        } finally {
            loadingIndicator.classList.add('hidden');
            askLlmBtn.disabled = false; // Re-enable button
        }
    });
});
