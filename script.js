// Categorized array of terms and their 4-word explanations
const categorizedTermsData = [
    {
        category: "שפות קוד",
        terms: [
            { term: "שפות קוד", explanation: "הוראות למחשב, ליצירת תוכנה." },
            { term: "HTML", explanation: "מבנה תוכן אתרי אינטרנט." },
            { term: "CSS", explanation: "עיצוב חזותי של אתרים." },
            { term: "JavaScript / TypeScript", explanation: "הוספת אינטראקטיביות לאתרים." },
            { term: "PHP", explanation: "שפת צד-שרת לאתרי ווב." },
            { term: "Java", explanation: "פיתוח יישומים מרובי-פלטפורמות." },
            { term: "Kotlin", explanation: "שפה מודרנית לאפליקציות אנדרואיד." },
            { term: "Swift", explanation: "פיתוח אפליקציות למכשירי אפל." }
        ]
    },
    {
        category: "Frameworks",
        terms: [
            { term: "Frameworks", explanation: "שלד לפיתוח מהיר ויעיל." },
            { term: "Flutter", explanation: "בניית אפליקציות לכל הפלטפורמות." },
            { term: "Angular", explanation: "פיתוח יישומי ווב מורכבים (SPA)." },
            { term: "React", explanation: "ספרייה לבניית ממשקי משתמש." },
            { term: "React Native", explanation: "בניית אפליקציות מובייל מקוריות." },
            { term: "Ionic", explanation: "פיתוח אפליקציות היברידיות מובייל." },
            { term: "PhoneGap", explanation: "אריזת יישומי ווב כאפליקציות." },
            { term: "WordPress", explanation: "בניית וניהול אתרי אינטרנט." },
            { term: "Drupal", explanation: "מערכת ניהול תוכן גמישה וחזקה." },
            { term: "Strapi", explanation: "בניית ממשקי API מהירים." },
            { term: "Umbraco", explanation: "מערכת ניהול תוכן ב-.NET." }
        ]
    },
    {
        category: "כללי",
        terms: [
            { term: "Webflow", explanation: "בניית אתרים ללא קידוד." },
            { term: "CMS", explanation: "ניהול תוכן אתר בקלות." },
            { term: "SPA", explanation: "חווית משתמש חלקה, עמוד יחיד." },
            { term: "Local Storage", explanation: "אחסון נתונים בדפדפן לצמיתות." },
            { term: "Cookies", explanation: "זכירת העדפות משתמש, מעקב פעולות." },
            { term: "Cache", explanation: "האצת טעינת נתונים חוזרים." },
            { term: "Clean Cache", explanation: "מחיקת נתונים זמניים ותקולים." },
            { term: "JSON", explanation: "פורמט נפוץ להעברת נתונים." },
            { term: "Script", explanation: "קוד קצר למשימה ספציפית." },
            { term: "SDK", explanation: "כלים לפיתוח יישומים בקלות." }
        ]
    },
    {
        category: "רשת ושרתים",
        terms: [
            { term: "HTTPS", explanation: "אבטחת תקשורת בין דפדפן לשרת." },
            { term: "API", explanation: "ממשק לתקשורת בין מערכות." },
            { term: "DevOps", explanation: "שיתוף פעולה יעיל בפיתוח ותפעול." },
            { term: "TestFlight", explanation: "הפצת גרסאות בטא לבדיקה." },
            { term: "DB", explanation: "אחסון וניהול נתונים." },
            { term: "SQL", explanation: "תחקור וניהול נתונים בבסיסים יחסיים." },
            { term: "NoSQL", explanation: "אחסון נתונים גמיש, ללא סכימה." },
            { term: "Server", explanation: "מחשב שמספק שירותים ונתונים." },
            { term: "Hosting", explanation: "אירוח אתרים ויישומים באינטרנט." },
            { term: "Node.js", explanation: "הפעלת JavaScript בצד השרת." },
            { term: "S3", explanation: "אחסון אובייקטים בענן AWS." },
            { term: ".NET", explanation: "פלטפורמת פיתוח של מיקרוסופט." },
            { term: "Azure", explanation: "שירותי מחשוב ענן של מיקרוסופט." },
            { term: "MongoDB", explanation: "בסיס נתונים NoSQL נפוץ." },
            { term: "AWS", explanation: "שירותי מחשוב ענן של אמזון." },
            { term: "Load Balancer", explanation: "פיזור עומס בין שרתים." },
            { term: "GitHub", explanation: "ניהול גרסאות קוד ושיתוף." },
            { term: "DNS", explanation: "תרגום שם דומיין לכתובת IP." },
            { term: "Domain", explanation: "כתובת האתר באינטרנט." }
        ]
    },
    {
        category: "הרחבה: דאטה בייס ואבטחה",
        terms: [
            { term: "Relational and Non-relational DB", explanation: "סוגי אחסון נתונים שונים." },
            { term: "Authentication", explanation: "אימות זהות משתמש." },
            { term: "Token", explanation: "אסימון אימות זמני ובטוח." },
            { term: "Socket", explanation: "ערוץ תקשורת דו-כיווני, בזמן אמת." },
            { term: "Firebase - Real-time", explanation: "סנכרון נתונים מיידי, בזמן אמת." }
        ]
    },
    {
        category: "רגולציה",
        terms: [
            { term: "GDPR", explanation: "תקנות הגנת פרטיות מידע באיחוד האירופי." }
        ]
    },
    {
        category: "ענן, פיתוח וניהול גרסאות",
        terms: [
            { term: "Cloud", explanation: "שירותי מחשוב זמינים מרחוק." },
            { term: "GCP", explanation: "שירותי מחשוב ענן של גוגל." },
            { term: "EC2", explanation: "שרתים וירטואליים ניתנים להרחבה ב-AWS." },
            { term: "Environments", explanation: "הפרדת סביבות פיתוח ובדיקה." },
            { term: "AWS Cognito", explanation: "ניהול זהויות משתמשים ב-AWS." },
            { term: "SourceTree", explanation: "ממשק גרפי לניהול Git." },
            { term: "Apple Review Process", explanation: "תהליך אישור אפליקציות לאייפון." },
            { term: "Firebase App Distribution", explanation: "הפצת אפליקציות בטא לבודקים." },
            { term: "APK", explanation: "קובץ התקנה לאפליקציית אנדרואיד." }
        ]
    }
];

const termsContainer = document.getElementById('terms-container');

/**
 * Calculates the similarity between two text strings based on word overlap.
 * It is case-insensitive and ignores common punctuation.
 * @param {string} text1 - The first text string.
 * @param {string} text2 - The second text string.
 * @returns {number} - The similarity percentage (0-100).
 */
function calculateSimilarity(text1, text2) {
    // Remove punctuation and convert to lowercase.
    // \p{L} matches any kind of letter from any language.
    // \p{N} matches any kind of numeric character in any script.
    // \s matches whitespace characters.
    // The 'u' flag is for Unicode support.
    const cleanText1 = text1.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '');
    const cleanText2 = text2.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '');

    // Split into words, filtering out empty strings that might result from multiple spaces
    const words1 = cleanText1.split(/\s+/).filter(word => word.length > 0);
    const words2 = cleanText2.split(/\s+/).filter(word => word.length > 0);

    if (words1.length === 0 && words2.length === 0) return 100; // Both empty, considered 100% similar
    if (words1.length === 0 || words2.length === 0) return 0;   // One empty, one not

    const set1 = new Set(words1);
    const set2 = new Set(words2);

    let commonWordsCount = 0;
    set1.forEach(word => {
        if (set2.has(word)) {
            commonWordsCount++;
        }
    });

    // Calculate similarity based on the ratio of common words to the maximum number of words
    // This penalizes longer user answers that contain many irrelevant words.
    const maxLength = Math.max(words1.length, words2.length);
    if (maxLength === 0) return 100; // Should be caught by the empty checks above, but as a safeguard
    return (commonWordsCount / maxLength) * 100;
}


// Function to create a term card
function createTermCard(termObj, index) {
    const card = document.createElement('div');
    // The card will initially have no specific background color, inheriting from body or parent.
    card.className = 'term-card p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4';

    card.innerHTML = `
        <div class="w-full md:w-1/4 flex-shrink-0">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">${termObj.term}</h2>
        </div>
        <div class="w-full md:w-3/4">
            <label for="user-explanation-${index}" class="block text-sm font-medium text-gray-700 mb-1">ההסבר שלך:</label>
            <textarea id="user-explanation-${index}" rows="2" class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea>
            <button id="submit-btn-${index}" class="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                הצג הסבר ובדוק התאמה
            </button>
            <div id="model-explanation-${index}" class="mt-4 p-3 bg-gray-100 rounded-md border border-gray-200 text-gray-800 hidden">
                <span class="font-semibold">ההסבר שלנו:</span> <span class="explanation-text"></span>
                <div class="mt-2 text-sm text-gray-600 flex items-center gap-2" id="feedback-container-${index}">
                    <span id="similarity-score-${index}"></span>
                    <span id="feedback-emoji-${index}" class="text-xl"></span>
                    <span id="feedback-text-${index}"></span>
                </div>
            </div>
        </div>
    `;

    // Add event listeners
    const submitBtn = card.querySelector(`#submit-btn-${index}`);
    const userExplanationInput = card.querySelector(`#user-explanation-${index}`);
    const modelExplanationDiv = card.querySelector(`#model-explanation-${index}`);
    const explanationTextSpan = modelExplanationDiv.querySelector('.explanation-text');
    const similarityScoreSpan = card.querySelector(`#similarity-score-${index}`);
    const feedbackEmojiSpan = card.querySelector(`#feedback-emoji-${index}`);
    const feedbackTextSpan = card.querySelector(`#feedback-text-${index}`);

    // Handle submit button click
    submitBtn.addEventListener('click', () => {
        const userText = userExplanationInput.value;
        const modelText = termObj.explanation;

        // Display the model's explanation
        explanationTextSpan.textContent = modelText;
        modelExplanationDiv.classList.remove('hidden');

        // Calculate similarity
        const similarity = calculateSimilarity(userText, modelText);
        similarityScoreSpan.textContent = `ציון התאמה: ${similarity.toFixed(0)}%`;

        // Reset feedback classes
        feedbackTextSpan.classList.remove('feedback-excellent', 'feedback-partial', 'feedback-tryagain');

        // Apply feedback based on similarity
        if (similarity >= 75) {
            feedbackEmojiSpan.textContent = '✅'; // Checkmark emoji
            feedbackTextSpan.textContent = 'הבנה מעולה!';
            feedbackTextSpan.classList.add('feedback-excellent');
        } else if (similarity >= 40) {
            feedbackEmojiSpan.textContent = '🤔'; // Thinking face emoji
            feedbackTextSpan.textContent = 'הבנה חלקית...';
            feedbackTextSpan.classList.add('feedback-partial');
        } else {
            feedbackEmojiSpan.textContent = '❌'; // Cross mark emoji
            feedbackTextSpan.textContent = 'צריך ללמוד שוב!';
            feedbackTextSpan.classList.add('feedback-tryagain');
        }

        // Optionally, you can still change the border color of the inner explanation box
        // modelExplanationDiv.classList.remove('border-gray-200', 'border-green-400', 'border-yellow-400', 'border-red-400');
        // if (similarity >= 75) { modelExplanationDiv.classList.add('border-green-400'); }
        // else if (similarity >= 40) { modelExplanationDiv.classList.add('border-yellow-400'); }
        // else { modelExplanationDiv.classList.add('border-red-400'); }
    });

    return card; // Return the created card element
}

// Loop through the categorized terms data and create sections and cards
categorizedTermsData.forEach(categoryData => {
    const categorySection = document.createElement('div');
    categorySection.className = 'mb-8'; // Margin bottom for spacing between categories

    const categoryTitle = document.createElement('h2');
    categoryTitle.className = 'text-2xl md:text-3xl font-bold text-gray-700 mb-6 border-b-2 border-blue-300 pb-2';
    categoryTitle.textContent = categoryData.category;
    categorySection.appendChild(categoryTitle);

    const termsGrid = document.createElement('div');
    termsGrid.className = 'space-y-6'; // Spacing between term cards within a category
    categoryData.terms.forEach((term, index) => {
        // Use a unique index based on overall position or category+term for IDs if needed
        // For simplicity, we'll just use a running index here.
        const globalIndex = categorizedTermsData.reduce((acc, curr, i) => {
            if (i < categorizedTermsData.indexOf(categoryData)) {
                return acc + curr.terms.length;
            }
            return acc;
        }, 0) + categoryData.terms.indexOf(term);

        termsGrid.appendChild(createTermCard(term, globalIndex));
    });
    categorySection.appendChild(termsGrid);
    termsContainer.appendChild(categorySection);
});
