document.addEventListener("DOMContentLoaded", function() {
    var starWarsAudio = document.getElementById('star-wars-audio');
    var openStarWarsButton = document.getElementById('start-button');
    var nextButton = document.getElementById('next-button');
    var textElement = document.getElementById('love-text');
    var text1 = "No primeiro dia da nossa nova saga, nossa princesa Leia";
    var textAux = "Kaemili, ";
    var text2 = "começa sua nova jornada. Um novo passo de uma jornada incr... esperem, esperem...sinto já ter visto isso em algum lugar... Vamos tentar de novo.";
    var typingSpeed = 100; // Velocidade de digitação em milissegundos
    var backspaceSpeed = 200; // Velocidade do efeito de backspace em milissegundos
    var executed = false;

    // Adiciona um ouvinte de evento para o botão "Ver Abertura de Star Wars"
    openStarWarsButton.addEventListener('click', function() {
        // Oculta o contêiner de introdução e exibe o contêiner de Star Wars
        document.getElementById("star-wars-container").style.display = "block";
        document.getElementById("intro-container").style.display = "none";
        
        // Iniciar reprodução do áudio
        starWarsAudio.play();

        // Inicia a exibição do texto1
        typeText(text1, 0);
    });

    // Adiciona um ouvinte de evento para o botão "Próxima Página"
    nextButton.addEventListener('click', function() {
        // Para a reprodução do áudio
        starWarsAudio.pause();

        // Redireciona para a próxima página
        window.location.href = "velocidade.html"; // Substitua "velocidade.html" pelo URL da próxima página
    });

    function typeText(text, index) {
        textElement.innerHTML += text[index];
        if (index < text.length - 1) {
            setTimeout(function() {
                typeText(text, index + 1);
            }, typingSpeed);
        } else {
            if (!executed) {
                executed = true;
                setTimeout(function() {
                    backspaceWord(text1);
                }, 3500); // Espera 3.5 segundos antes de iniciar o backspace
            }
        }
    }
    
    function backspaceWord(text) {
        var wordIndex = text.lastIndexOf("Leia");
        var currentIndex = wordIndex + 4; // Posição após a palavra "Leia"
        setTimeout(function() {
            deleteCharacters(currentIndex, 4);
        }, backspaceSpeed);
    }
    
    function deleteCharacters(index, numCharacters) {
        var newText = textElement.innerHTML.substring(0, index - numCharacters);
        textElement.innerHTML = newText;
        if (numCharacters > 0) {
            setTimeout(function() {
                deleteCharacters(index, numCharacters - 1);
            }, backspaceSpeed);
        } else {
            textElement.innerHTML += textAux;
            textElement = document.getElementById('love-text2');
            typeText(text2, 0); // Digita o texto2
    
            // Exibe o botão "Próxima Página" após a exibição do texto2
            document.getElementById("next-screen").style.display = "block";
        }
    }    

    // Adiciona um ouvinte de evento para o botão "Próxima Página"
    document.getElementById("next-button").addEventListener('click', function() {
        // Para a reprodução do áudio
        starWarsAudio.pause();

        // Redireciona para a próxima página
        window.location.href = "velocidade.html"; // Substitua "velocidade.html" pelo URL da próxima página
    });
});
