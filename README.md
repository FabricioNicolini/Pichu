# Pichu

![header png](https://github.com/user-attachments/assets/a429a74b-f6e4-4ed9-8bfc-beb9e0478855)


Essa parte da página foi feita a partir desse código

```css
<header>
        <img src="imagens\logo.png" class="logo">
        <nav class="barra">
            <ul>

                <li><a href="palpites\palpites.html">Palpites</a></li>
                <li><a href="partidas/partidas.html">Partidas</a></li>
                <li><a href="contatos/contatos.html">Contatos</a></li>
            </ul>

        </nav>
    </header>
``` 

![body](https://github.com/user-attachments/assets/c30d07a6-773d-4807-94f3-dca8e05719cc)

Já essa segunda parte foi feita com o código a seguir

```css
<main>
        <article class="noticia">
            <h2>Jogos Paralímpicos de 2026</h2>
            <img src="COMITE ITALIANO.png" alt="" class="imgDeNoticia">
            <p class="not">As cidades de Milão e Cortina d’Ampezzo serão palco dos Jogos Olímpicos e Paralímpicos de
                Inverno 2026. Os Jogos Paralímpicos ocorrerão de 6 a 15 de março de 2026, com um foco especial na
                inclusão social e sustentabilidade. Andrew Parsons, presidente do Comitê Paralímpico Internacional,
                destacou a importância do evento para o esporte. Na última edição, em PyeongChang 2018, participaram 567
                atletas de 48 países, incluindo três brasileiros.</p>
        </article>
        <article class="noticia">
            <h2>Desenvolvimento Paralímpico ultrapassa 200 inscritos</h2>
            <img src="paralim.png" alt="" class="imgDeNoticia">
            <p class="not">A Secretaria de Esportes, em parceria com a Secretaria dos Direitos da Pessoa com
                Deficiência, iniciou o Programa de Desenvolvimento Paralímpico no Complexo Baby Barioni. O programa visa
                inclusão e qualificação profissional no paradesporto, tendo formado mais de 11 mil profissionais com R$
                18 milhões investidos. Neste ano, inclui basquete em cadeira de rodas e goalball, além de outras
                modalidades. Em 2024, bateu recorde com 4.211 profissionais capacitados. O Estado de São Paulo reforça o
                compromisso com a inclusão e o desenvolvimento do esporte paralímpico.</p>
        </article>
        <artilce class="noticia">
            <h2>Copa de Paraesgrima</h2>
            <img src="paraesgrima.png" alt="" class="imgDeNoticia">
            <p class="not">A Seleção Brasileira de paraesgrima conquistou três medalhas no segundo dia da Etapa de São
                Paulo da Copa do Mundo: uma prata com Vanderson Chaves e dois bronzes com Jovane Guissone e Raissa
                Veras. Com isso, o Brasil soma cinco medalhas no torneio. Vanderson ficou com a prata no sabre B
                masculino após vencer Jovane na semifinal, que levou o bronze. Raissa conquistou seu segundo bronze na
                espada A. No primeiro dia, o Brasil já havia garantido uma prata com Jovane no florete B e um bronze com
                Raissa no sabre A. A competição continua no sábado, 22.</p>
            </article>
    </main>
```

![footer](https://github.com/user-attachments/assets/6153a600-ff75-4480-9f05-6424aecb66fc)


Por fim, o nosso footer foi feito assim

```css
<footer>
    <section class="midias">
        <a href="https://github.com/FabricioNicolini/Pichu"><i class="fa-brands fa-github"> </i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    </section>
</footer>
```

## Demais páginas do site 
O header e footer são iguais em todas as páginas, as alterações de uma para outra estão no conteudo central do Body dentro das divs main.

### Partidas 
A pagína Partidas está desta forma

![Contatos](https://github.com/user-attachments/assets/014893a4-1f09-41b3-8274-678f60bd52dc)

E os códigos utilizados foram os seguintes 

```css
    <main>
        <section class="partida">
          <h2>NBA</h2>
          <p>Dia 24/3, 20:00</p>
            <article>Orlando Magic      x       Los Angeles Lakers</article>
            <p>Partida: sem resultados</p>
        </section>
        <section class="partida">
          <h2>Campeonato Paulista final jogo 1</h2>
          <p>Dia 16/3  Partida encerrada</p>
            <article>Corinthians        x       Palmeiras</article>
            <p>Partida 1: Corinthians 1 x 0 Palmeiras</p>
        </section>
        <section class="partida">
            <h2>Campeonato Paulista final jogo 2</h2>
            <p>Dia 27/3, 21:35 </p>
            <article>Corinthians        x       Palmeiras</article>
              <p>Partida 2: sem resultados</p>
          </section>
        <section class="partida">
            <h2>Liga dos Campeões quartas de final jogo 1 </h2>
            <p>Dia 8/4, 16:00</p>
              <article>Arsenal      x       Real Madrid</article>
              <p>Partida 1: sem resultados</p>
        </section>
        <section class="partida">
            <h2>Liga dos Campeões quartas de final jogo 2 </h2>
            <p>Dia 16/4, 16:00</p>
            <article>Arsenal      x       Real Madrid</article>
            <p>Partida 2: sem resultados</p>
        </section>
        <script src="palpites.js"></script>
      </main>
```

### Contatos
Agora a pagína Contatos que está assim

![contatos](https://github.com/user-attachments/assets/74f150e6-eb3c-4d43-a018-22f1376fed1f)

Foi feita desta forma 

```css
  <main class="main">
    <section class="formSection">
      <h1 class="title">Precisa de alguma ajuda? Envie um formulario</h1>
      <form class="form">
        <input type="text" id="fname" placeholder="Nome Completo">
        <input type="email" id="email" placeholder="Email">
        <input type="number" id="phone" placeholder="Celular">
        <textarea id="text" placeholder="Qual o motivo do seu contato?"></textarea>  
        <button type="submit" >Enviar</button>
      </form>
    </section>
  </main>
```

### Palpites 
E por fim a pagína Palpites que está desta forma

![palpites](https://github.com/user-attachments/assets/db6cdc4d-cfd5-4c89-b5be-e87269b07e73)

Os códigos estão assim

```css
<main>
        <section class="vote">
          <h2>NBA</h2>
          <section class="options">
            <section class="team" id="magic">Magic</section>
            <section class="team" id="lakers">Lakers</section>
            <p>Votos do Magic: <span id="magicV">0</span></p>
            <p>Votos do Lakers: <span id="lakersV">0</span></p>
          </section>
        </section>
        <section class="vote">
          <h2>Campeonato Paulista</h2>
          <section class="options">
            <section class="team" id="corinthians">Corinthians</section>
            <section class="team" id="palmeiras">Sem-Mundial</section>
            <p>Votos do Corinthians: <span id="corinthiansV">0</span></p>
            <p>Votos dos Sem-Mundial: <span id="palmeirasV">0</span></p>
          </section>
        </section>
        <section class="vote">
            <h2>Liga dos Campeões</h2>
            <section class="options">
              <section class="team" id="arsenal">Arsenal</section>
              <section class="team" id="madrid">Real Madrid</section>
              <p>Votos do Arsenal: <span id="arsenalV">0</span></p>
              <p>Votos dos Real Madrid: <span id="madridV">0</span></p>
            </section>
        </section>
        <script src="palpites.js"></script>
      </main>
```

Está foi a pagína mais complexa até agora por causa do uso de javascript como pode ser visto no codifo a cima, o JavaScript foi utilizado para fazer botões com efeitos visuais e contadores dos palpites como pode ser ver nos exemplos abaixo

![palpites1](https://github.com/user-attachments/assets/11022cc5-bb60-4a63-8f75-8a431680d0ca) ![palpites2](https://github.com/user-attachments/assets/d12680b1-57f5-4819-a239-5c3a4038987f)

E os códigos do JavaScript utilizados nesta parte foram estes aqui

```css
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
```


