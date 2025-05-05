const quizData = [
        {
          question: "Qual é a capital do Brasil?",
          options: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
          answer: "Brasília"
        },
        {
          question: "Quem escreveu 'Dom Quixote'?",
          options: ["Machado de Assis", "Miguel de Cervantes", "José Saramago", "Camões"],
          answer: "Miguel de Cervantes"
        },
        {
          question: "Quanto é 7 x 8?",
          options: ["54", "56", "64", "48"],
          answer: "56"
        },
        {
          question: "Qual o maior planeta do Sistema Solar?",
          options: ["Terra", "Saturno", "Júpiter", "Marte"],
          answer: "Júpiter"
        },
        {
          question: "Qual é o elemento químico representado por 'O'?",
          options: ["Ouro", "Osmio", "Oxigênio", "Óxido"],
          answer: "Oxigênio"
        }
      ];
      
      const quizContainer = document.getElementById("quiz-container");
      
      quizData.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
      
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);
      
        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");
      
        q.options.forEach(option => {
          const li = document.createElement("li");
      
          const label = document.createElement("label");
          const input = document.createElement("input");
      
          input.type = "radio";
          input.name = `question${index}`;
          input.value = option;
      
          label.appendChild(input);
          label.append(` ${option}`);
      
          li.appendChild(label);
          optionsList.appendChild(li);
        });
      
        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
      });
      
      document.getElementById("submit").addEventListener("click", () => {
        let score = 0;
      
        quizData.forEach((q, index) => {
          const selected = document.querySelector(`input[name="question${index}"]:checked`);
          if (selected && selected.value === q.answer) {
            score++;
          }
        });
      
        const result = document.getElementById("result");
      
        if (score === quizData.length) {
          result.textContent = `Excelente! Você acertou todas as ${quizData.length} perguntas!`;
        } else if (score >= quizData.length / 2) {
          result.textContent = `Muito bem! Você acertou ${score} de ${quizData.length} perguntas.`;
        } else {
          result.textContent = `Você acertou ${score} de ${quizData.length} perguntas. Tente novamente!`;
        }
      });