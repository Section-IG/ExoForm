let q1 = new QuestionChoixMultiple("Que contient une variable de type double ?", null, ["un Booléen","un Caractère", "un Entier", "un Réel"], [3]);
let q2 = new QuestionChoixMultiple("Que contient une variable de type int ?", null, ["un Booléen","un Caractère", "un Entier", "un Réel"], [2]);
let q3 = new QuestionChoixMultiple("Que contient une variable de type bool ?", null, ["un Booléen","un Caractère", "un Entier", "un Réel"], [0]);
let q4 = new QuestionChoixMultiple("Que contient une variable de type char ?", null, ["un Booléen","un Caractère", "un Entier", "un Réel"], [1]);
let q5 = new QuestionVouF("Toutes les variables ont une infinité de litéraux ?", null, FAUX);
let q6 = new QuestionVouF("scanf_s est une fonction d'affichage ?", null, FAUX);
let q7 = new QuestionFermée("Quel est le format d'affichage pour les doubles ?", null, "%f");
let q8 = new QuestionFermée("Quel est le format d'affichage pour les caractères ?", null, "%c");
let q9 = new QuestionFermée("Quel est le format d'affichage pour les entiers ?", null, "%d");
let q10 = new QuestionVouF("L'instruction suivante est-elle correcte <span class='code'> scanf_s(\"%c\", &lettre); </span>", null, FAUX);
let q11 = new QuestionVouF("L'instruction suivante est-elle correcte <span class='code'> scanf_s(\"%f\", &prix); </span>", null, FAUX);
let q12 = new QuestionFermée("Le fait de remplir une variable s'appel une _____", null, "affectation");
let q13 = new QuestionFermée("Complète :", "imgC/c_1.png", "/","%","4","20");
let q14 = new QuestionFermée("Complète :", "imgC/c_2.png", "/","3600");
let q15 = new QuestionChoixMultiple("Si il y en a, combien y a t-il de faute dans ce code pour obtenir le résultat attendu", "imgC/c_3.png", ["Aucune","1","2","3"], [2]);
let q16 = new QuestionFermée("Complète :", "imgC/c_4.png", "nul");
let q17 = new QuestionFermée("(Examen Janvier 2018) Complète :", "imgC/c_5.png", "7" ,"6");
let q18 = new QuestionFermée("(Examen Janvier 2018) Complète :", "imgC/c_6.png", "7" ,"6");
let q19 = new QuestionFermée("(Examen Janvier 2018) Complète :", "imgC/c_7.png", "7" ,"7");




let tabQ = [
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
];
