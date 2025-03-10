Para começar a criação de um site, primeiro é necessário uma ideação e um protótipo, no nosso caso, quisemos abordar algo que gostamos, por isso decidimos criar uma página voltada a notícias sobre o mundo dos esportes. A partir disso, criamos nosso protótipo abaixo.


![protótipo](https://github.com/user-attachments/assets/dedba8e3-e452-4e25-bffe-bcf12b8644e4)



Começando agora a codificação do site a partir do início da sintaxe do html, após isso inicia-se a sintaxe do head, local onde é colocado informações sobre o site, tendo como sintaxes padrão meta name, meta charset e title(será o título da página ao abrir em algum navegador), além disso, em nosso site foi utilizado o css(linguagem de estilo que define como os elementos de uma página web aparecem), por esse motivo tivemos que implementar mais uma linha de código, sendo ela, um link de acesso entre o html e o css, e também foi colocado uma linha de código para criar um link entre o site e outra página .

```css
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>MundoEsporte</title>
</head>
```

Depois disso, se dá início a codificação do corpo do site, ou seja o body, dentro dele será colocado tudo o que você gostaria que aparecesse na tela ao navegar pela página, no nosso caso, iniciamos colocando um header que será o cabeçalho do nosso site, e dentro dele colocamos algumas informações como uma imagem, que será a logo do site, e também um nav, que tem como função criar uma barra de navegação para o site(todos com suas próprias modificações estéticas no css).

```css
<header>
        <img src="logo.png" class="logo">
        <nav class="barra">
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Partidas</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
            
        </nav>
    </header>
```

Ainda no body criamos um main, que será constituido pelo conteúdo principal do site, tendo dentro dele adicionamos alguns articles, os quais fizemos para separar os conteúdos e posteriormente tranforma-los em cards(fizemos isso utilizando do css).

```css
<main>
        <article class="noticia">
            <h2>Jogos Paralímpicos de 2026</h2>
            <img src="COMITE ITALIANO.png" alt="" class="imgDeNoticia">
            <p class="not">Milão e Cortina d’Ampezzo, na Itália, sediarão os Jogos Olímpicos e Paralímpicos de Inverno 2026, após vencerem a votação do Comitê Olímpico Internacional. Os Jogos Paralímpicos ocorrerão de 6 a 15 de março e prometem impulsionar a inclusão social e a sustentabilidade. O presidente do Comitê Paralímpico Internacional, Andrew Parsons, destacou a importância do evento para o esporte. Na última edição, em PyeongChang 2018, 567 atletas de 48 países participaram, incluindo três brasileiros.</p>
        </article>
        <article class="noticia">
            <h2>Desenvolvimento Paralímpico ultrapassa 200 inscritos</h2>
            <img src="paralim.png" alt="" class="imgDeNoticia">
            <p class="not">A Secretaria de Esportes, em parceria com a Secretaria dos Direitos da Pessoa com Deficiência, iniciou o Programa de Desenvolvimento Paralímpico no Complexo Baby Barioni, reunindo mais de 200 profissionais de Educação Física até 21 de fevereiro. O programa visa inclusão e qualificação profissional no paradesporto, tendo formado mais de 11 mil profissionais com R$ 18 milhões investidos. Neste ano, inclui basquete em cadeira de rodas e goalball, além de outras modalidades. Em 2024, bateu recorde com 4.211 profissionais capacitados. O Estado de São Paulo reforça o compromisso com a inclusão e o desenvolvimento do esporte paralímpico.</p>
        </article>
        <article class="noticia">
            <h2>Copa de Paraesgrima</h2>
            <img src="paraesgrima.png" alt="" class="imgDeNoticia">
            <p class="not">A Seleção Brasileira de paraesgrima conquistou três medalhas no segundo dia da Etapa de São Paulo da Copa do Mundo: uma prata com Vanderson Chaves e dois bronzes com Jovane Guissone e Raissa Veras. Com isso, o Brasil soma cinco medalhas no torneio. Vanderson ficou com a prata no sabre B masculino após vencer Jovane na semifinal, que levou o bronze. Raissa conquistou seu segundo bronze na espada A. No primeiro dia, o Brasil já havia garantido uma prata com Jovane no florete B e um bronze com Raissa no sabre A. A competição continua no sábado, 22.</p>
        </article>
    </main>
```

Por fim criamos um footer, o qual implementamos algumas navegações entre páginas por links, sendo um dos links o nosso próprio github.

```css
<footer>
    <section class="midias">
        <a href="https://github.com/FabricioNicolini/Pichu"><i class="fa-brands fa-github"> </i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    </section>
    <p class="copyright"> GigantesDaBet365@2025</p>
</footer>
```
