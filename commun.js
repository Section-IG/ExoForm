        // Variables globales
        let couleurs = {
            vert : "#7BC379",
            rouge : "#E06C75",
            bleu : "#43A3EF",
            bleuFoncé : "#4682B4"

        };
    
        const PAS_IMG = null;
        const VRAI = 'v';
        const FAUX = 'f';


        // Constructeurs 
            // Question fermée est une question d'on la réponse est courte (1 seul mot) 
                // Le paramètre question concerne le label de la question exemple : 
                    // Quelle est la meilleure section de l'IESN ? IG (Hé ouais :D)
                // Le paramètre img propose d'ajouter une image, si vous voulez ajouter une image il suffit d'indiquer le chemin URL exemple : images/monImage.jpeg
                    // Rappel pour indiquer le chemin le ./ correspond au dossier courrant et ../ le dossier parent
                    // Si vous ne désirez pas ajouter une image mettez simplement PAS_IMG comme argument.
                // Le paramètre bonnesRéponses est indéfini c'est à dire que vous pouvez mettre autant de bonnes réponses que vous le souhaitez (minimum une)
                    // Exemple : Sur cette image que donne l'intruction à la ligne 10 et celle de ligne 24 ? (réponses attendues : HelloWorld,  Bienvenue)
                    // q = new QuestionFermée("Sur cette image que donne l'intruction à la ligne 10 et celle de la ligne 24 ?", "monDossierImg/img01.png", "HelloWorld", "Bienvenue");
                    // Notez que l'ordre des réponses ont de l'importance.
        class QuestionFermée {
            constructor(question, img, ...bonnesRéponses) {
                this.question = question;
                this.img = img;
                this.bonnesRéponses = bonnesRéponses;
            }
        }


            // Question vraie ou fause
                // Le paramètre bonneRéponse indique si la question est vraie ou fausse (il y a les constantes : VRAI et FAUX)
        class QuestionVouF {
            constructor(question, img, bonneRéponse) {
                this.question = question;
                this.img = img;
                this.bonneRéponse = bonneRéponse; // 'v' ou 'f'
            }
        }

            // Question à choix multiple
                // Le paramètre réponse possible est un tableaux qui reprendre tous les labels de réponses possibles
                // Le paramètre indicesBonnesRéponse est un tableau qui contient le/les indices des bonnes réponses du tableau réponsesPossibles
                // Exemple : q = new QuestionChoixMultiple("Quels sont les sections de l'IESN ?", PAS_IMG, ["IG", "TI", "Tourisme", "Marketing"], [0,1,3])
        class QuestionChoixMultiple {
            constructor(question, img, réponsesPossibles, indicesBonnesRéponse) {
                this.question = question;
                this.img = img;
                this.réponsesPossibles = réponsesPossibles; // []
                this.indicesBonnesRéponse = indicesBonnesRéponse; // Au moins une bonne réponse []
            }
        }
    
        // Affichage
        function afficheQuestions(questions) {
            let label;
            let cadreQuestion;
            let img;
            
            for(let q of questions) 
            {
                cadreQuestion = document.createElement("div");
                cadreQuestion.className = "blocQuestion";
                label = document.createElement("label");
                label.innerHTML = q.question;
                cadreQuestion.appendChild(label);

                if(q.img != null) {
                    img = document.createElement("img");
                    img.src = q.img;
                    cadreQuestion.appendChild(img);
                }
                if(q instanceof QuestionFermée) {
                    afficheQuestionFermée(cadreQuestion, q);
                } else {
                    if (q instanceof QuestionVouF) {
                        afficheQuestionVouF(cadreQuestion, q);
                    } else {
                        if (q instanceof QuestionChoixMultiple) {
                            afficheQuestionChoixMultiplis(cadreQuestion, q);
                        }
                    }
                }
                cadre.appendChild(cadreQuestion);
            }
        }


        function  afficheQuestionFermée(cadre, question) {
            let input;
            for(let r of question.bonnesRéponses) {
                input = document.createElement("input");
                input.dataset.réponse = r;  
                cadre.appendChild(input);
            }
        }


        function afficheQuestionVouF(cadre, question) {
            let labelV = document.createElement("label");
            let labelF = document.createElement("label");
            let radioV = document.createElement("input");
            let radioF = document.createElement("input");
           
            radioV.type = "radio";
            radioV.name = "réponses";
            radioF.type = "radio";
            radioF.name = "réponses";
            radioV.style.border = "solid 1px red";

            if(question.bonneRéponse == 'v') {
                radioV.dataset.réponse = "bonneRéponse";
                radioF.dataset.réponse = "mauvaiseRéponse";
            } else {
                radioF.dataset.réponse = "bonneRéponse";
                radioV.dataset.réponse = "mauvaiseRéponse";
            }
            labelV.innerHTML = "Vrai";
            labelV.style.color = "wheat";
            labelF.innerHTML = "Faux";
            labelF.style.color = "wheat";
   
            
            cadre.appendChild(labelV);
            labelV.appendChild(radioV);

            cadre.appendChild(labelF);
            labelF.appendChild(radioF);        
        }
       
        function afficheQuestionChoixMultiplis(cadre, question) {
            let label;
            let input;
            for(let r of question.réponsesPossibles) {
                label = document.createElement("label");
                label.innerHTML = r;
                label.style.color = "wheat";
                input = document.createElement("input");
                input.type = "checkbox";
                input.name = "réponse";

                if(question.indicesBonnesRéponse.includes(question.réponsesPossibles.indexOf(r))) {               
                    input.dataset.réponse = "bonneRéponse";
                } else {
                    input.dataset.réponse = 'mauvaiseRéponse';
                }
                cadre.appendChild(label);
                label.appendChild(input);
            }
        }

        function afficheButtons() {
            let button; 
            button = document.createElement("button");
            button.innerHTML = "Vérifier";
            button.addEventListener("click", vérifie);
            document.getElementById("cadreFooter").appendChild(button);

            button = document.createElement("button");
            button.innerHTML = "Reset";
            button.addEventListener("click", reset);
            document.getElementById("cadreFooter").appendChild(button);
        }


        // Action buttons
        function vérifie () {
            vérifieInput(this);   
        }

        function vérifieInput(button) {
            inputs = document.getElementsByTagName("input");    
            animationButton(button);
            for (let i of inputs) {
                if(i.type == "radio" || i.type == "checkbox") {
                    vérifieInputRadioCheckbox(i);
                } else {
                    let aBonneRéponse = i.value == i.dataset.réponse;
                    changeCouleur(i, aBonneRéponse);
                }         
            }
        }

        function vérifieInputRadioCheckbox(input) {
            let parent = input.parentElement;
            if(input.dataset.réponse == "bonneRéponse" && input.checked) {
                parent.style.color = couleurs.vert;
            } else {
                parent.style.color = couleurs.rouge;
            }
        }

        
        function changeCouleur(input, aBonneRéponse) {
                input.style.backgroundColor = aBonneRéponse ?  couleurs.vert : couleurs.rouge;
        }
        
        function reset () {
            let inputs = document.getElementsByTagName("input");
            animationButton(this);
            for (let i of inputs) {
                i.value = "";
                i.style.backgroundColor = "#FFFFFF";
                if(i.type == "radio" || i.type == "checkbox") {
                    i.parentElement.style.color = "wheat";
                    i.checked = false;         
                }    
            }
        }

        // Animations
        function animationButton(button) {
            let couleurActuelle = button.style.backgroundColor;
            button.style.backgroundColor = "#4682B4";
            setTimeout(function () {
                    button.style.backgroundColor = couleurActuelle;
            }, 100);
        }

        function fondu(elem) {
            let opacity = 1;
            for(let i = 100 ; i >= 1 ; i--) {
                opacity -= 0.01;
                setTimeout(function() {
                    console.log(opacity);
                    changeOpicité(elem, opacity)
            },  i * 10);   
            }
        }

        function changeOpicité(elem, valeur) {
            elem.style.opacity = valeur;
        }