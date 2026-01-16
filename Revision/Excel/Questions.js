// Questions.js
// ===============================
// GK ICT Quiz - Question Bank
// ===============================

const originalQuizData = [
    { 
        question: "විවිධ ගණනය කිරීම් ඉතා පහසුවෙන්, නිවැරදිව සහ කාර්යක්ෂමව සිදු කිරීමට භාවිතා කරන මෘදුකාංග වර්ගය කුමක්ද?", 
        correct: "විද්‍යුත් පැතුරුම්පත් (Electronic Spreadsheets).", 
        distractors: ["වදන් සැකසුම් මෘදුකාංග (Word Processors).", "සමර්පණ මෘදුකාංග (Presentation Software).", "දත්ත සමුදාය කළමනාකරණ පද්ධති (DBMS)."] 
    },
    { 
        question: "Microsoft Corporation මගින් හඳුන්වා දුන් පැතුරුම්පත් මෘදුකාංගය කුමක්ද?", 
        correct: "Microsoft Excel.", 
        distractors: ["Microsoft Word.", "Microsoft Access.", "Microsoft PowerPoint."] 
    },
    { 
        question: "The Document Foundation මගින් නිපදවන ලද නිදහස් හා විවෘත මෘදුකාංගය කුමක්ද?", 
        correct: "LibreOffice Calc.", 
        distractors: ["Open Office Draw.", "Google Sheets.", "Lotus 1-2-3."] 
    },
    { 
        question: "ඇපල් සමාගම මගින් නිෂ්පාදනය කර ඇති පැතුරුම්පත් මෘදුකාංගය කුමක්ද?", 
        correct: "Apple Numbers.", 
        distractors: ["Apple Pages.", "Apple Keynote.", "Apple Sheets."] 
    },
    { 
        question: "පැතුරුම්පතක ඉහළම කොටසෙහි ගොනුවේ නම දර්ශනය වන තීරුව කුමක්ද?", 
        correct: "මාතෘකා තීරුව (Title Bar).", 
        distractors: ["තත්ව තීරුව (Status Bar).", "මෙනු තීරුව (Menu Bar).", "සූත්‍ර තීරුව (Formula Bar)."] 
    },
    { 
        question: "සක්‍රීය කොටුව (Active Cell) වටා ඇති කළු පැහැති මායිම හඳුන්වන්නේ කෙසේද?", 
        correct: "කෝෂ දර්ශකය (Cell Pointer).", 
        distractors: ["තීරු ශීර්ෂය (Column Header).", "සූත්‍ර තීරුව (Formula Bar).", "නම පෙට්ටිය (Name Box)."] 
    },
    { 
        question: "සක්‍රීය කොටුවේ ඇති දත්ත හෝ සූත්‍ර දර්ශනය වන තීරුව කුමක්ද?", 
        correct: "සූත්‍ර තීරුව (Formula Bar).", 
        distractors: ["නම පෙට්ටිය (Name Box).", "මාතෘකා තීරුව (Title Bar).", "තීරු ශීර්ෂය (Column Header)."] 
    },
    { 
        question: "සක්‍රීය කෝෂයේ ලිපිනය (Cell Address) දර්ශනය වන්නේ කොහේද?", 
        correct: "නම පෙට්ටිය (Name Box).", 
        distractors: ["සූත්‍ර තීරුව (Formula Bar).", "තත්ව තීරුව (Status Bar).", "මාතෘකා තීරුව (Title Bar)."] 
    },
    { 
        question: "Excel හි සිරස් අතට ඇති කොටස් හඳුන්වන්නේ කුමන නමකින්ද?", 
        correct: "තීරු (Columns).", 
        distractors: ["පේළි (Rows).", "කෝෂ (Cells).", "වැඩපොත් (Workbooks)."] 
    },
    { 
        question: "Excel හි තිරස් අතට ඇති කොටස් හඳුන්වන්නේ කුමන නමකින්ද?", 
        correct: "පේළි (Rows).", 
        distractors: ["තීරු (Columns).", "සූත්‍ර (Formulas).", "ප්‍රස්ථාර (Charts)."] 
    },
    { 
        question: "පේළියක් සහ තීරුවක් ඡේදනය වන ස්ථානය හඳුන්වන්නේ කෙසේද?", 
        correct: "කෝෂය (Cell).", 
        distractors: ["පරාසය (Range).", "නිරපේක්ෂ යොමුව (Absolute Reference).", "වැඩ පත්‍රිකාව (Worksheet)."] 
    },
    { 
        question: "පැතුරුම්පතක වැඩ කරන අවස්ථාවේ දී තෝරාගෙන ඇති කෝෂය හඳුන්වන්නේ කෙසේද?", 
        correct: "සක්‍රීය කෝෂය (Active Cell).", 
        distractors: ["ප්‍රධාන කෝෂය (Main Cell).", "පිටපත් කළ කෝෂය (Copied Cell).", "හිස් කෝෂය (Blank Cell)."] 
    },
    { 
        question: "පැතුරුම්පතක පහළින්ම ඇති, දැනට වැඩ කරන පත්‍රිකාව පිළිබඳ තොරතුරු දක්වන තීරුව කුමක්ද?", 
        correct: "තත්ව තීරුව (Status Bar).", 
        distractors: ["මාතෘකා තීරුව (Title Bar).", "සූත්‍ර තීරුව (Formula Bar).", "මෙවලම් තීරුව (Tool Bar)."] 
    },
    { 
        question: "Excel සූත්‍රයක් ආරම්භ කළ යුතු අනිවාර්ය සංකේතය කුමක්ද?", 
        correct: "සමාන ලකුණ (=).", 
        distractors: ["ධන ලකුණ (+).", "ඩොලර් සංකේතය ($).", "ඇස්ටරිස්ක් ලකුණ (*)."] 
    },
    { 
        question: "සූත්‍රයක් පිටපත් කිරීමේදී (Copy), එහි අඩංගු කෝෂ ලිපින සාපේක්ෂව වෙනස් වීම හඳුන්වන්නේ කුමක්ද?", 
        correct: "සාපේක්ෂ කෝෂ යොමුව (Relative Cell Reference).", 
        distractors: ["නිරපේක්ෂ කෝෂ යොමුව (Absolute Cell Reference).", "ස්ථාවර කෝෂ යොමුව (Fixed Cell Reference).", "මිශ්‍ර කෝෂ යොමුව (Mixed Cell Reference)."] 
    },
    { 
        question: "සූත්‍රයක් පිටපත් කිරීමේදී එහි ඇති කෝෂ ලිපින වෙනස් නොවී පවත්වා ගැනීම හඳුන්වන්නේ කෙසේද?", 
        correct: "නිරපේක්ෂ කෝෂ යොමුව (Absolute Cell Reference).", 
        distractors: ["සාපේක්ෂ කෝෂ යොමුව (Relative Cell Reference).", "බාහිර කෝෂ යොමුව (External Cell Reference).", "ස්වයංක්‍රීය යොමුව (Auto Reference)."] 
    },
    { 
        question: "නිරපේක්ෂ කෝෂ යොමුවක් සැකසීමට භාවිතා කරන සංකේතය කුමක්ද?", 
        correct: "$ (Dollar Sign).", 
        distractors: ["# (Hash Tag).", "& (Ampersand).", "@ (At Symbol)."] 
    },
    { 
        question: "එක ලඟ පිහිටි කෝෂ කිහිපයක එකතුවක් හඳුන්වන්නේ කෙසේද?", 
        correct: "කෝෂ පරාසය (Cell Range).", 
        distractors: ["කෝෂ කාණ්ඩය (Cell Group).", "කෝෂ මාලාව (Cell Series).", "කෝෂ එකතුව (Cell Set)."] 
    },
    { 
        question: "Excel හි එකතු කිරීම සඳහා භාවිතා කරන ශ්‍රිතය (Function) කුමක්ද?", 
        correct: "SUM", 
        distractors: ["ADD", "TOTAL", "COUNT"] 
    },
    { 
        question: "කෝෂ පරාසයක ඇති උපරිම අගය සෙවීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "MAX", 
        distractors: ["HIGHEST", "TOP", "LARGE"] 
    },
    { 
        question: "කෝෂ පරාසයක ඇති අවම අගය සෙවීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "MIN", 
        distractors: ["LOWEST", "BOTTOM", "SMALL"] 
    },
    { 
        question: "අගයන් පරාසයක සාමාන්‍ය අගය (Average) සෙවීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "AVERAGE", 
        distractors: ["MEAN", "AVG", "TOTALAVG"] 
    },
    { 
        question: "යම් පරාසයක ඇති දත්ත අඩංගු කෝෂ ගණන සෙවීමට භාවිතා කරන්නේ කුමන ශ්‍රිතයද?", 
        correct: "COUNT", 
        distractors: ["NUMBER", "CELLS", "TOTALCOUNT"] 
    },
    { 
        question: "යම් කොන්දේසියක් මත පදනම්ව ගණනය කිරීම් සිදු කිරීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "IF", 
        distractors: ["WHEN", "WHETHER", "CHECK"] 
    },
    { 
        question: "දත්ත ආරෝහණ හෝ අවරෝහණ පිළිවෙලට සැකසීම හඳුන්වන්නේ කෙසේද?", 
        correct: "දත්ත පෙළ ගැස්වීම (Sorting).", 
        distractors: ["දත්ත පෙරීම (Filtering).", "දත්ත සෙවීම (Searching).", "දත්ත කාණ්ඩ කිරීම (Grouping)."] 
    },
    { 
        question: "අවශ්‍ය දත්ත පමණක් තෝරාගෙන ප්‍රදර්ශනය කිරීම හඳුන්වන්නේ කෙසේද?", 
        correct: "දත්ත පෙරීම (Filtering).", 
        distractors: ["දත්ත පෙළ ගැස්වීම (Sorting).", "දත්ත මකාදැමීම (Deleting).", "දත්ත වෙනස් කිරීම (Editing)."] 
    },
    { 
        question: "Excel වැඩ පත්‍රිකාවක මුළු පේළි ගණන (Rows) කොපමණද?", 
        correct: "1,048,576", 
        distractors: ["65,536", "1,000,000", "524,288"] 
    },
    { 
        question: "Excel වැඩ පත්‍රිකාවක මුළු තීරු ගණන (Columns) කොපමණද?", 
        correct: "16,384", 
        distractors: ["256", "10,000", "32,768"] 
    },
    { 
        question: "Excel හි අවසාන තීරුවේ නම කුමක්ද?", 
        correct: "XFD", 
        distractors: ["ZZZ", "IV", "XFC"] 
    },
    { 
        question: "පැතුරුම්පතක ඇති දත්ත රූපමය ආකාරයෙන් දැක්වීම හඳුන්වන්නේ කුමන නමකින්ද?", 
        correct: "ප්‍රස්ථාර (Charts).", 
        distractors: ["රූප (Images).", "සිතියම් (Maps).", "වගු (Tables)."] 
    },
    { 
        question: "Excel ගොනුවක් සුරැකීමේදී ලැබෙන දිගුව (Extension) කුමක්ද?", 
        correct: ".xlsx", 
        distractors: [".docx", ".pptx", ".txt"] 
    },
    { 
        question: "දත්ත සමූහයක මැද අගය (Middle Value) සෙවීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "MEDIAN", 
        distractors: ["AVERAGE", "MODE", "MID"] 
    },
    { 
        question: "වැඩිම වාර ගණනක් වාර්තා වී ඇති අගය සෙවීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "MODE", 
        distractors: ["MOST", "COUNT", "MAX"] 
    },
    { 
        question: "සූත්‍රයක 'භාජනය' (Division) සඳහා භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "/ (Forward Slash)", 
        distractors: ["\\ (Backslash)", "÷", "%"] 
    },
    { 
        question: "සූත්‍රයක 'ගුණ කිරීම' (Multiplication) සඳහා භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "* (Asterisk)", 
        distractors: ["x", ".", "^"] 
    },
    { 
        question: "සූත්‍රයක 'බලය' (Power) සෙවීම සඳහා භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "^ (Caret)", 
        distractors: ["*", "#", "&"] 
    },
    { 
        question: "Excel හි සම්මත වශයෙන් වැඩ පත්‍රිකා කීයක් ආරම්භයේදී තිබේද? (පැරණි සංස්කරණ වල)", 
        correct: "3", 
        distractors: ["1", "5", "10"] 
    },
    { 
        question: "Excel හි තිරස් අනුචලන තීරුව (Horizontal Scroll Bar) පිහිටා ඇත්තේ කොහේද?", 
        correct: "පහළ දකුණු පස.", 
        distractors: ["ඉහළ වම් පස.", "මැද.", "ඉහළ දකුණු පස."] 
    },
    { 
        question: "පේළියක උස (Row Height) වෙනස් කළ හැක්කේ කොතැනින්ද?", 
        correct: "පේළි ශීර්ෂ අතර රේඛාවෙන් (Row Headers).", 
        distractors: ["තීරු ශීර්ෂයෙන්.", "සූත්‍ර තීරුවෙන්.", "නම පෙට්ටියෙන්."] 
    },
    { 
        question: "දත්ත පරාසයක් වටා මායිම් දැමීමට භාවිතා කරන විධානය කුමක්ද?", 
        correct: "Borders", 
        distractors: ["Outline", "Frames", "Gridlines"] 
    },
    { 
        question: "කෝෂ කිහිපයක් එකතු කර තනි කෝෂයක් බවට පත් කිරීම හඳුන්වන්නේ කුමක්ද?", 
        correct: "Merge & Center", 
        distractors: ["Combine", "Join Cells", "Group Cells"] 
    },
    { 
        question: "Excel හි තීරු නම් කර ඇත්තේ කුමන ආකාරයටද?", 
        correct: "A, B, C... ලෙස අක්ෂර වලින්.", 
        distractors: ["1, 2, 3... ලෙස අංක වලින්.", "I, II, III... ලෙස රෝම ඉලක්කම් වලින්.", "වර්ණ වලින්."] 
    },
    { 
        question: "Excel හි පේළි නම් කර ඇත්තේ කුමන ආකාරයටද?", 
        correct: "1, 2, 3... ලෙස අංක වලින්.", 
        distractors: ["A, B, C... ලෙස අක්ෂර වලින්.", "Row 1, Row 2... ලෙස.", "සංකේත වලින්."] 
    },
    { 
        question: "සක්‍රීය කෝෂයේ සිට ඊළඟ කෝෂයට (දකුණට) යාමට භාවිතා කරන යතුර කුමක්ද?", 
        correct: "Tab Key", 
        distractors: ["Enter Key", "Shift Key", "Space Key"] 
    },
    { 
        question: "සක්‍රීය කෝෂයේ සිට පහළ කෝෂයට යාමට භාවිතා කරන යතුර කුමක්ද?", 
        correct: "Enter Key", 
        distractors: ["Tab Key", "Esc Key", "Ctrl Key"] 
    },
    { 
        question: "මුදල් අගයන් දැක්වීම සඳහා භාවිතා කරන Format එක කුමක්ද?", 
        correct: "Currency / Accounting", 
        distractors: ["Number", "Text", "Percentage"] 
    },
    { 
        question: "දින වකවානු ඇතුළත් කිරීමට භාවිතා කරන Format එක කුමක්ද?", 
        correct: "Date", 
        distractors: ["Time", "General", "Scientific"] 
    },
    { 
        question: "ප්‍රතිශත දැක්වීම සඳහා භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "%", 
        distractors: ["$", "#", "@"] 
    },
    { 
        question: "දත්ත ඇතුළත් කිරීමේදී වැරදි සිදුවීම වැළැක්වීමට භාවිතා කරන ක්‍රමය කුමක්ද?", 
        correct: "Data Validation", 
        distractors: ["Data Sorting", "Data Filtering", "Data Grouping"] 
    },
    { 
        question: "සූත්‍රයක ඇති වැරදි පෙන්වන '#VALUE!' යන්නෙන් අදහස් වන්නේ කුමක්ද?", 
        correct: "වැරදි දත්ත වර්ගයක් භාවිතා කර ඇති බව.", 
        distractors: ["කෝෂය කුඩා වැඩි බව.", "බෙදීම බින්දුවෙන් කර ඇති බව.", "නම වැරදි බව."] 
    },
    { 
        question: "සූත්‍රයක '#DIV/0!' ලෙස පෙන්වන්නේ ඇයි?", 
        correct: "අගයක් බින්දුවෙන් (0) බෙදීමට උත්සාහ කළ විට.", 
        distractors: ["අගය විශාල වැඩි වූ විට.", "සූත්‍රය වැරදි වූ විට.", "දත්ත නොමැති වූ විට."] 
    },
    { 
        question: "ප්‍රස්ථාරයක අක්ෂ (Axes) නම් කිරීම හඳුන්වන්නේ කෙසේද?", 
        correct: "Axis Titles", 
        distractors: ["Legend", "Data Labels", "Chart Title"] 
    },
    { 
        question: "ප්‍රස්ථාරයක දත්ත මාලාව හඳුනා ගැනීමට ඇති වර්ණ දර්ශකය කුමක්ද?", 
        correct: "Legend", 
        distractors: ["Gridlines", "Plot Area", "Data Table"] 
    },
    { 
        question: "මුළු වැඩපොතම (Workbook) සුරැකීමට භාවිතා කරන කෙටිමං යතුර (Shortcut Key) කුමක්ද?", 
        correct: "Ctrl + S", 
        distractors: ["Ctrl + C", "Ctrl + P", "Ctrl + V"] 
    },
    { 
        question: "දත්ත පිටපත් කිරීමට (Copy) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + C", 
        distractors: ["Ctrl + X", "Ctrl + Z", "Ctrl + A"] 
    },
    { 
        question: "පිටපත් කළ දත්ත ඇලවීමට (Paste) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + V", 
        distractors: ["Ctrl + P", "Ctrl + S", "Ctrl + Y"] 
    },
    { 
        question: "කළ ක්‍රියාවක් අවලංගු කිරීමට (Undo) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + Z", 
        distractors: ["Ctrl + U", "Ctrl + I", "Ctrl + B"] 
    },
    { 
        question: "සියලුම දත්ත තේරීමට (Select All) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + A", 
        distractors: ["Ctrl + All", "Alt + A", "Shift + A"] 
    },
    { 
        question: "දත්ත තද අකුරින් (Bold) පෙන්වීමට භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + B", 
        distractors: ["Ctrl + Bold", "Alt + B", "Shift + B"] 
    },
    { 
        question: "වැඩ පත්‍රිකාවක් මුද්‍රණය කිරීමට (Print) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + P", 
        distractors: ["Ctrl + M", "Alt + P", "Shift + P"] 
    },
    { 
        question: "සූත්‍රයක 'A1:A10' යන්නෙන් අදහස් වන්නේ කුමක්ද?", 
        correct: "A1 සිට A10 දක්වා වූ කෝෂ පරාසය.", 
        distractors: ["A1 සහ A10 කෝෂ දෙක පමණි.", "A1 බෙදීම A10.", "A1 ගුණ කිරීම A10."] 
    },
    { 
        question: "ශ්‍රිතයක අඩංගු වන අගයන් හෝ කෝෂ යොමු හඳුන්වන්නේ කෙසේද?", 
        correct: "Arguments", 
        distractors: ["Parameters", "Values", "Inputs"] 
    },
    { 
        question: "Excel හි වත්මන් දිනය ඇතුළත් කිරීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "=TODAY()", 
        distractors: ["=DATE()", "=NOW()", "=CURRENT()"] 
    },
    { 
        question: "වත්මන් දිනය සහ වේලාව යන දෙකම ඇතුළත් කිරීමට භාවිතා කරන ශ්‍රිතය කුමක්ද?", 
        correct: "=NOW()", 
        distractors: ["=TIME()", "=TODAY()", "=CLOCK()"] 
    },
    { 
        question: "පැතුරුම්පතක තීරු පළල (Column Width) ස්වයංක්‍රීයව සකසා ගැනීමට කුමක් කළ යුතුද?", 
        correct: "තීරු ශීර්ෂය මත Double Click කිරීම.", 
        distractors: ["Right Click කිරීම.", "Enter එබීම.", "Delete එබීම."] 
    },
    { 
        question: "අකුරු ඇල අකුරු (Italic) කිරීමට භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + I", 
        distractors: ["Ctrl + L", "Alt + I", "Shift + I"] 
    },
    { 
        question: "අකුරු යටින් ඉරක් (Underline) ඇඳීමට භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + U", 
        distractors: ["Ctrl + N", "Alt + U", "Shift + U"] 
    },
    { 
        question: "නව වැඩපොතක් (New Workbook) විවෘත කිරීමට භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + N", 
        distractors: ["Ctrl + W", "Alt + N", "Shift + N"] 
    },
    { 
        question: "දැනට ඇති වැඩපොතක් විවෘත කිරීමට (Open) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + O", 
        distractors: ["Ctrl + Open", "Alt + O", "Shift + O"] 
    },
    { 
        question: "Excel හි 'VLOOKUP' ශ්‍රිතය භාවිතා කරන්නේ ඇයි?", 
        correct: "සිරස් අතට දත්ත සෙවීමට (Vertical Lookup).", 
        distractors: ["දත්ත එකතු කිරීමට.", "දත්ත පෙරීමට.", "ප්‍රස්ථාර ඇඳීමට."] 
    },
    { 
        question: "වැඩ පත්‍රිකාවක දත්ත සෙවීමට (Find) භාවිතා කරන කෙටිමං යතුර කුමක්ද?", 
        correct: "Ctrl + F", 
        distractors: ["Ctrl + S", "Alt + F", "Shift + F"] 
    },
    { 
        question: "පැතුරුම්පත් මෘදුකාංගයක් ප්‍රධාන වශයෙන් භාවිතා කරන්නේ ඇයි?", 
        correct: "ගණිතමය ගණනය කිරීම් සිදු කිරීමට.", 
        distractors: ["චිත්‍ර ඇඳීමට.", "වීඩියෝ සංස්කරණය කිරීමට.", "සිංදු ඇසීමට."] 
    },
    { 
        question: "Excel හි එක් කොටුවක් (Cell) තෝරාගත් විට එය හඳුන්වන්නේ කෙසේද?", 
        correct: "සක්‍රීය කෝෂය (Active Cell).", 
        distractors: ["ප්‍රධාන කෝෂය.", "විශාල කෝෂය.", "පළමු කෝෂය."] 
    },
    { 
        question: "Excel වැඩ පත්‍රිකාවක ඉහළම ඇති 'A, B, C' අකුරු වලින් දැක්වෙන්නේ මොනවාද?", 
        correct: "තීරු (Columns).", 
        distractors: ["පේළි (Rows).", "සූත්‍ර (Formulas).", "පිටු (Pages)."] 
    },
    { 
        question: "Excel වැඩ පත්‍රිකාවක වම් පස ඇති '1, 2, 3' අංක වලින් දැක්වෙන්නේ මොනවාද?", 
        correct: "පේළි (Rows).", 
        distractors: ["තීරු (Columns).", "ප්‍රස්ථාර (Charts).", "මෙනු (Menus)."] 
    },
    { 
        question: "කෝෂයක ලිපිනයක් ලියන නිවැරදි ආකාරය කුමක්ද?", 
        correct: "මුලින් තීරුවේ අකුර සහ පසුව පේළියේ අංකය (උදා: A1).", 
        distractors: ["මුලින් පේළියේ අංකය සහ පසුව තීරුවේ අකුර (උදා: 1A).", "අකුරු දෙකක් පමණක් (උදා: AB).", "අංක දෙකක් පමණක් (උදා: 12)."] 
    },
    { 
        question: "Excel හි 'Delete' යතුර එබූ විට සිදුවන්නේ කුමක්ද?", 
        correct: "තෝරාගත් කෝෂයේ ඇති දත්ත මැකී යයි.", 
        distractors: ["සම්පූර්ණ ගොනුවම මැකී යයි.", "පරිගණකය නිවී යයි.", "අලුත් පේළියක් එකතු වෙයි."] 
    },
    { 
        question: "Excel හි අකුරු වල ප්‍රමාණය (Font Size) විශාල කිරීමට භාවිතා කරන මෙවලම තිබෙන්නේ කුමන Tab එකේද?", 
        correct: "Home Tab", 
        distractors: ["Insert Tab", "Data Tab", "View Tab"] 
    },
    { 
        question: "පැතුරුම්පතක ඇති දත්ත වර්ණ ගැන්වීමට (Fill Color) භාවිතා කරන අයිකනය කුමක්ද?", 
        correct: "තීන්ත බාල්දියක රූපය.", 
        distractors: ["පෑනක රූපය.", "කතුරක රූපය.", "මකනයක රූපය."] 
    },
    { 
        question: "ගොනුවක ඇති දත්ත වෙනත් ස්ථානයකට ගෙනයාමට (Move) මුලින්ම කළ යුත්තේ කුමක්ද?", 
        correct: "Cut කිරීම.", 
        distractors: ["Copy කිරීම.", "Delete කිරීම.", "Print කිරීම."] 
    },
    { 
        question: "Excel හි වැඩ පත්‍රිකාවක ඇති කොටු රේඛා මුද්‍රණය නොවන්නේ නම් ඒවා හඳුන්වන්නේ?", 
        correct: "Gridlines", 
        distractors: ["Borders", "Outlines", "Frames"] 
    },
    { 
        question: "Excel හි 'Zoom' මෙවලම මගින් කළ හැක්කේ කුමක්ද?", 
        correct: "වැඩ පත්‍රිකාව පෙනෙන ප්‍රමාණය විශාල හෝ කුඩා කිරීම.", 
        distractors: ["අකුරු වල හැඩය වෙනස් කිරීම.", "ගොනුවේ නම වෙනස් කිරීම.", "අලුත් ගොනුවක් විවෘත කිරීම."] 
    },
    { 
        question: "කෝෂ දෙකක් අතර ඇති ඉර මත මූසිකය (Mouse) තබා ඇදීමෙන් කළ හැක්කේ කුමක්ද?", 
        correct: "තීරුවක පළල හෝ පේළියක උස වෙනස් කිරීම.", 
        distractors: ["දත්ත මැකීම.", "පාට වෙනස් කිරීම.", "සූත්‍රයක් ලිවීම."] 
    },
    { 
        question: "Excel හි ඇති දත්ත ආරෝහණ පිළිවෙලට (A to Z) සැකසීම හඳුන්වන්නේ?", 
        correct: "Sort", 
        distractors: ["Filter", "Find", "Save"] 
    },
    { 
        question: "සූත්‍රයක් ලිවීමේදී 'අඩු කිරීම' සඳහා භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "- (Minus)", 
        distractors: ["+", "*", "/"] 
    },
    { 
        question: "සූත්‍රයක් ලිවීමේදී 'එකතු කිරීම' සඳහා භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "+ (Plus)", 
        distractors: ["-", "=", "*"] 
    },
    { 
        question: "Excel හි ප්‍රස්ථාරයක් (Chart) ඇතුළත් කිරීමට යා යුතු Tab එක කුමක්ද?", 
        correct: "Insert Tab", 
        distractors: ["Home Tab", "File Tab", "View Tab"] 
    },
    { 
        question: "Excel හි 'Sheet1, Sheet2' ලෙස පහළින් දැක්වෙන්නේ මොනවාද?", 
        correct: "වැඩ පත්‍රිකා (Worksheets).", 
        distractors: ["සූත්‍ර.", "ප්‍රස්ථාර.", "පින්තූර."] 
    },
    { 
        question: "සූත්‍රයක් ලියන විට එය දර්ශනය වන දිගු තීරුව කුමක්ද?", 
        correct: "Formula Bar", 
        distractors: ["Title Bar", "Status Bar", "Task Bar"] 
    },
    { 
        question: "Excel මෘදුකාංගය වසා දැමීමට (Close) භාවිතා කරන ලකුණ කුමක්ද?", 
        correct: "රතු පැහැති 'X' ලකුණ.", 
        distractors: ["'-' ලකුණ.", "කොළ පැහැති ලකුණ.", "නිල් පැහැති ලකුණ."] 
    },
    { 
        question: "පැතුරුම්පතක දත්ත ඇතුළත් කළ පසු එය පරිගණකයේ රඳවා ගැනීමට කළ යුත්තේ කුමක්ද?", 
        correct: "සුරැකීම (Save).", 
        distractors: ["මැකීම (Delete).", "පිටපත් කිරීම (Copy).", "වසා දැමීම (Close)."] 
    },
    { 
        question: "කෝෂයක ඇති අකුරු 'තද' (Bold) කළ විට සිදුවන්නේ කුමක්ද?", 
        correct: "අකුරු වඩාත් පැහැදිලිව සහ ඝනව පෙනේ.", 
        distractors: ["අකුරු මැකී යයි.", "අකුරු ඇල වෙයි.", "අකුරු කුඩා වෙයි."] 
    },
    { 
        question: "පැතුරුම්පතක 'Undo' බොත්තම භාවිතා කරන්නේ ඇයි?", 
        correct: "අන්තිමට කළ වැරදි ක්‍රියාවක් නැවත යථා තත්ත්වයට පත් කිරීමට.", 
        distractors: ["ගොනුව මුද්‍රණය කිරීමට.", "ගොනුව මැකීමට.", "අකුරු පාට කිරීමට."] 
    },
    { 
        question: "Excel හි 'AutoSum' මෙවලම භාවිතා කරන්නේ ඇයි?", 
        correct: "ඉක්මනින් එකතුව ලබා ගැනීමට.", 
        distractors: ["ඉක්මනින් මැකීමට.", "පින්තූරයක් ගැනීමට.", "පිටුවක් මාරු කිරීමට."] 
    },
    { 
        question: "කෝෂයක් තුළට දත්ත ඇතුළත් කර අවසන් වූ පසු එබිය යුතු යතුර කුමක්ද?", 
        correct: "Enter Key", 
        distractors: ["Esc Key", "Shift Key", "Alt Key"] 
    },
    { 
        question: "Excel හි තීරුවක පළලට වඩා දත්ත දිගු වූ විට පෙන්වන සංකේතය කුමක්ද?", 
        correct: "#######", 
        distractors: ["@@@@@@", "******", "!!!!!!"] 
    },
    { 
        question: "පැතුරුම්පතක මුද්‍රණය කිරීමට පෙර එය දිස්වන ආකාරය බැලීම හඳුන්වන්නේ?", 
        correct: "Print Preview", 
        distractors: ["Print Now", "Quick Print", "Page View"] 
    },
    { 
        question: "Excel හි 'Help' ලබා ගැනීමට භාවිතා කරන යතුර කුමක්ද?", 
        correct: "F1", 
        distractors: ["F2", "F5", "F10"] 
    },
    { 
        question: "වැඩ පත්‍රිකාවක නම (Sheet Name) වෙනස් කිරීමට කළ යුත්තේ කුමක්ද?", 
        correct: "නම මත Double Click කර අලුත් නම ලිවීම.", 
        distractors: ["කෝෂයක් මැකීම.", "පරිගණකය රීස්ටාර්ට් කිරීම.", "සූත්‍රයක් ලිවීම."] 
    },
    { 
        question: "Excel හි 'Workbook' එකක් යනු කුමක්ද?", 
        correct: "වැඩ පත්‍රිකා (Worksheets) කිහිපයක එකතුවකි.", 
        distractors: ["එක් කෝෂයක් පමණි.", "එක් සූත්‍රයක් පමණි.", "එක් රූපයක් පමණි."] 
    }
];