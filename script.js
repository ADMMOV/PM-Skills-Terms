document.addEventListener('DOMContentLoaded', () => {
    const userPromptInput = document.getElementById('user-prompt');
    const askLlmBtn = document.getElementById('ask-llm-btn');
    const responseArea = document.getElementById('response-area');
    const llmResponseDiv = document.getElementById('llm-response');
    const loadingIndicator = document.getElementById('loading-indicator');

    // Gemini API configuration
    const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    // --- חשוב מאוד: הכנס את מפתח ה-API האמיתי שלך כאן! ---
    // קבל מפתח API מ- Google AI Studio: https://aistudio.google.com/app/apikey
    // לדוגמה: const apiKey = "YOUR_ACTUAL_GEMINI_API_KEY";
    const apiKey = "AIzaSyDMOIjye4Sk2otp_hrQkrZSvNv6etMNFBc"; // כרגע ריק, יש להזין את המפתח שלך.

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
            // --- שינוי: הוספת הנחיה לבסיס הפרומפט ---
            // הוספת הנחיה שהתשובה תהיה בין 3-5 מילים בלבד.
            const modifiedPrompt = `Answer in 3-5 words only: ${prompt}`;

            // Construct the payload for the Gemini API
            const payload = {
                contents: [{ role: "user", parts: [{ text: modifiedPrompt }] }]
            };

            // Make the actual call to the Gemini API
            // וודא שמפתח ה-API נכלל בכתובת ה-URL
            const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API error! status: ${response.status}, message: ${JSON.stringify(errorData)}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                llmResponseDiv.textContent = result.candidates[0].content.parts[0].text;
            } else {
                llmResponseDiv.textContent = 'שגיאה: לא התקבלה תשובה תקינה מהמודל.';
            }

        } catch (error) {
            console.error('שגיאה בחיבור ל-Gemini API:', error);
            llmResponseDiv.textContent = `אירעה שגיאה בעת ניסיון להתחבר ל-Gemini API: ${error.message}. אנא נסה שוב מאוחר יותר.`;
        } finally {
            loadingIndicator.classList.add('hidden');
            askLlmBtn.disabled = false; // Re-enable button
        }
    });
});
