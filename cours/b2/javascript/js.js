        // Questions
        // A crée en JSON et lecutre du JSON
        let q1 = new QuestionFermée("Que donne : <span class=\"code\">1 == true </span> ?", null, "true");
        let q2 = new QuestionFermée("Que donne : <span class=\"code\"> 1 === true; </span> ?", null, "false");
        let q3 = new QuestionFermée("Que donne : <span class=\"code\"> 1 * \"2\"; </span> ?", null, "2");
        let q4 = new QuestionFermée("Que donne : <span class=\"code\"> 2 + \"2\"; </span> ?", null, "22");
        let q5 = new QuestionFermée("Que donne : <span class=\"code\"> 1 + true; </span> ?", null, "2");
        let q6 = new QuestionFermée("Que donne : <span class=\"code\"> 10 * false; </span> ?", null, "0");
        let q7 = new QuestionFermée("Que donne : <span class=\"code\"> 5 == \"5\"; </span> ?", null, "true");
        let q8 = new QuestionFermée("Que donne : <span class=\"code\"> 1 === \"1\"; </span> ?", null, "false");
        let q9 = new QuestionFermée("Que donne : <span class=\"code\"> \"\" == undefined; </span> ?", null, "false");
        let q10 = new QuestionFermée("Que donne :<span class=\"code\">  6 || 7; </span> ?", null, "6");
        let q11 = new QuestionFermée("Que donne :<span class=\"code\">  0 || \"Bonjour\"; </span> ?", null, "Bonjour");
        let q12 = new QuestionFermée("Que donne :<span class=\"code\">  \"\" && \"Perdu\"; </span> ?" , null, "\"\"");
        let q13 = new QuestionFermée("Que donne :<span class=\"code\">  5 < 6; </span> ?", null, "true");
        let q14 = new QuestionFermée("Que donne :<span class=\"code\">  10 < 8; </span> ? ", null, "false");
        let q15 = new QuestionFermée("Que donne :<span class=\"code\">  \"2\" < 3; </span> ?" , null, "true");
        let q16 = new QuestionFermée("Que donne :<span class=\"code\">  \"4\" < \"100\"; </span> ?", null, "false");
        
        let q17 = new QuestionFermée("Quel est-le résultat des instructions précédées de \"Expected\" ?", "imgJS/js01.png", "12", "16");
        let q18 = new QuestionFermée("Quel est-le résultat des instructions précédées de \"Expected\" ?", "imgJS/js02.png", "ReferenceError", "2");
        let q19 = new QuestionFermée("Quel est-le résultat des instructions précédées de \"Expected\" ?", "imgJS/js03.png", "Aurevoir");
        let q20 = new QuestionFermée("Quel est-le résultat des instructions précédées de \"Expected\" ?", "imgJS/js04.png", "20", "ReferenceError");
        let q21 = new QuestionFermée("Quel est-le résultat des instructions précédées de \"Expected\" ?", "imgJS/js05.png", "Quelle crasse je vais bien pouvoir inventer cette année ?", "Pas de point négatif", "Dispense d'examen" );
        let q22 = new QuestionFermée("Quel est-le résultat des instructions précédées de \"Expected\" ?", "imgJS/js06.png", "false");

        let q23 = new QuestionVouF("Les tableaux sont des objets en JS ?", null, 'v');

        let q24 = new QuestionChoixMultiple("question", null, ["r1", "r2", "r3", "r4"], [0]);

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
            q20,
            q21,
            q22,
            q23,
            q24,
        ];
        
        //Object.stringify(tabQ);
        //let t = Object.parseJSON(tabQ);



       
        