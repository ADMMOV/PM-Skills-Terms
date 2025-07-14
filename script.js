// Array of terms and their 4-word explanations
const termsData = [
    { term: "שפות קוד", explanation: "הוראות למחשב, ליצירת תוכנה." },
    { term: "HTML", explanation: "מבנה תוכן אתרי אינטרנט." },
    { term: "CSS", explanation: "עיצוב חזותי של אתרים." },
    { term: "JavaScript / TypeScript", explanation: "הוספת אינטראקטיביות לאתרים." },
    { term: "PHP", explanation: "שפת צד-שרת לאתרי ווב." },
    { term: "Java", explanation: "פיתוח יישומים מרובי-פלטפורמות." },
    { term: "Kotlin", explanation: "שפה מודרנית לאפליקציות אנדרואיד." },
    { term: "Swift", explanation: "פיתוח אפליקציות למכשירי אפל." },
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
    { term: "Umbraco", explanation: "מערכת ניהול תוכן ב-.NET." },
    { term: "Webflow", explanation: "בניית אתרים ללא קידוד." },
    { term: "CMS", explanation: "ניהול תוכן אתר בקלות." },
    { term: "SPA", explanation: "חווית משתמש חלקה, עמוד יחיד." },
    { term: "Local Storage", explanation: "אחסון נתונים בדפדפן לצמיתות." },
    { term: "Cookies", explanation: "זכירת העדפות משתמש, מעקב פעולות." },
    { term: "Cache", explanation: "האצת טעינת נתונים חוזרים." },
    { term: "Clean Cache", explanation: "מחיקת נתונים זמניים ותקולים." },
    { term: "JSON", explanation: "פורמט נפוץ להעברת נתונים." },
    { term: "Script", explanation: "קוד קצר למשימה ספציפית." },
    { term: "SDK", explanation: "כלים לפיתוח יישומים בקלות." },
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
    { term: "Domain", explanation: "כתובת האתר באינטרנט." },
    { term: "Relational and Non-relational DB", explanation: "סוגי אחסון נתונים שונים." },
    { term: "Authentication", explanation: "אימות זהות משתמש." },
    { term: "Token", explanation: "אסימון אימות זמני ובטוח." },
    { term: "Socket", explanation: "ערוץ תקשורת דו-כיווני, בזמן אמת." },
    { term: "Firebase - Real-time", explanation: "סנכרון נתונים מיידי, בזמן אמת." },
    { term: "GDPR", explanation: "תקנות הגנת פרטיות מידע באיחוד האירופי." },
    { term: "Cloud", explanation: "שירותי מחשוב זמינים מרחוק." },
    { term: "GCP", explanation: "שירותי מחשוב ענן של גוגל." },
    { term: "EC2", explanation: "שרתים וירטואליים ניתנים להרחבה ב-AWS." },
    { term: "Environments", explanation: "הפרדת סביבות פיתוח ובדיקה." },
    { term: "AWS Cognito", explanation: "ניהול זהויות משתמשים ב-AWS." },
    { term: "SourceTree", explanation: "ממשק גרפי לניהול Git." },
    { term: "Apple Review Process", explanation: "תהליך אישור אפליקציות לאייפון." },
    { term: "Firebase App Distribution", explanation: "הפצת אפליקציות בטא לבודקים." },
    { term: "APK", explanation: "קובץ התקנה לאפליקציית אנדרואיד." }
];

const termsContainer = document.getElementById('terms-container');

// Function to create a term card
function createTermCard(termObj, index) {
    const card = document.createElement('div');
    card.className = 'bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4';

    card.innerHTML = `
        <div class="w-full md:w-1/4 flex-shrink-0">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">${termObj.term}</h2>
            <select id="dropdown-${index}" class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700">
                <option value="default" disabled selected>בחר רמת הבנה</option>
                <option value="understood" class="understood">מובן</option>
                <option value="mid-level" class="mid-level">בינוני</option>
                <option value="wtf" class="wtf">WTF?!</option>
            </select>
        </div>
        <div class="w-full md:w-3/4">
            <label for="user-explanation-${index}" class="block text-sm font-medium text-gray-700 mb-1">ההסבר שלך:</label>
            <textarea id="user-explanation-${index}" rows="2" class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"></textarea>
            <button id="submit-btn-${index}" class="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                הצג הסבר
            </button>
            <div id="model-explanation-${index}" class="mt-4 p-3 bg-gray-100 rounded-md border border-gray-200 text-gray-800 hidden">
                <span class="font-semibold">ההסבר שלנו:</span> <span class="explanation-text"></span>
            </div>
        </div>
    `;

    termsContainer.appendChild(card);

    // Add event listeners
    const dropdown = document.getElementById(`dropdown-${index}`);
    const submitBtn = document.getElementById(`submit-btn-${index}`);
    const userExplanationInput = document.getElementById(`user-explanation-${index}`);
    const modelExplanationDiv = document.getElementById(`model-explanation-${index}`);
    const explanationTextSpan = modelExplanationDiv.querySelector('.explanation-text');

    // Handle dropdown color change
    dropdown.addEventListener('change', (event) => {
        // Remove previous color classes
        dropdown.classList.remove('understood', 'mid-level', 'wtf');
        // Add new color class based on selection
        if (event.target.value !== 'default') {
            dropdown.classList.add(event.target.value);
        }
    });

    // Handle submit button click
    submitBtn.addEventListener('click', () => {
        // Display the model's explanation
        explanationTextSpan.textContent = termObj.explanation;
        modelExplanationDiv.classList.remove('hidden');
    });
}

// Loop through the terms data and create a card for each
termsData.forEach((term, index) => {
    createTermCard(term, index);
});
