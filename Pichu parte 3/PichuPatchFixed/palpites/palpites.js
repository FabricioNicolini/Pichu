//Function pra configurar a votação
function setupVote(team1Id, team2Id, votes1Id, votes2Id) {
  // Obter os elementos HTML pelo ID
  const team1 = document.getElementById(team1Id); 
  const team2 = document.getElementById(team2Id); 
  const votes1 = document.getElementById(votes1Id); 
  const votes2 = document.getElementById(votes2Id); 

//Inicializa as contagens dos votos
  let count1 = 0; 
  let count2 = 0;

//Adiciona evento de clique para incrementar votos do Time 1
//Cada clique no botão do time 1 incrementa count1 em 1 e atualiza o conteúdo de texto 
  team1.addEventListener('click', () => {
    count1++; // Incrementa o contador
    votes1.textContent = count1; // Atualiza o texto exibido no contador
  });

// Adiciona evento de clique para incrementar votos do Time 2
//Ocorre a mesma coisa do botão 1 porem na opção do outro time
  team2.addEventListener('click', () => {
    count2++; // Incrementa o contador
    votes2.textContent = count2; // Atualiza o texto exibido no contador
  });
}

//Configura as votações com diferentes IDs de elementos HTML
setupVote("magic", "lakers", "magicV", "lakersV");//Votação da NBA
setupVote("corinthians", "palmeiras", "corinthiansV", "palmeirasV"); // Votação Corinthians x Palmeiras
setupVote("arsenal", "madrid", "arsenalV", "madridV"); // Votação Arsenal x Madrid
