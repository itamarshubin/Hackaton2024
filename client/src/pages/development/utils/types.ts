export type DevelopmentQuestion = {
  questionNumber: number;
  title: string;
  generalIntroduction: string;
  puzzleSampleDescription: string;
  puzzleSample: string;
  puzzleBreakdown: string;
  codeBlockBreakdown: string;
  puzzleDownloadLinkText: string;
  finalQuestion: string;
};

export const firstQuestion: DevelopmentQuestion[] = [
  {
    questionNumber: 1,
    title: 'מגמת עלייה',
    generalIntroduction: `לאחר חודש אלול מלא בתרדמת קולקטיבית בשיעור אחרי מנחה, הישיבה החליטה לשנות כל מיני דברים כדי להעלות את רמת הערנות. לא רלוונטי איך בוחרים, אבל הוחלט לתת לכל יום ״ציון  ערנות״`,
    puzzleSampleDescription: `לדוגמא, להלן רשימה של ציונים:`,
    puzzleSample: `
199
200
208
210
200
207
240
269
260
263
  `,
    puzzleBreakdown: `הישיבה תמיד מנסה לשפר מהציון של היום לשעבר.
אז לדוגמא בציונים לעיל, היו 7 פעמים בהם היה עלייה בציון מהיום שלפני:
`,
    codeBlockBreakdown: `
199 (ציון ראשון)
200 (עלייה)
208 (עלייה)
210 (עלייה)
200 (ירידה)
207 (עלייה)
240 (עלייה)
269 (עלייה)
260 (ירידה)
263 (עלייה)
`,
    puzzleDownloadLinkText: 'להלן כל הציונים שהישיבה רשמה, לאחר ניסוי שנמשך תקופה ארוכה.',
    finalQuestion: 'כמה פעמים היה לישיבה עלייה מהיום לפני???',
  },
];
