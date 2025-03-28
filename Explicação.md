Para começar a criação de um site, primeiro é necessário uma ideação e um protótipo, no nosso caso, quisemos abordar algo que gostamos, por isso decidimos criar uma página voltada a notícias sobre o mundo dos esportes. A partir disso, criamos nosso protótipo abaixo.


![protótipo](https://github.com/user-attachments/assets/dedba8e3-e452-4e25-bffe-bcf12b8644e4)



Começando agora a codificação do site a partir do início da sintaxe do html, após isso inicia-se a sintaxe do head, local onde é colocado informações sobre o site, tendo como sintaxes padrão meta name, meta charset e title(será o título da página ao abrir em algum navegador), além disso, em nosso site foi utilizado o css(linguagem de estilo que define como os elementos de uma página web aparecem), por esse motivo tivemos que implementar mais uma linha de código, sendo ela, um link de acesso entre o html e o css, e também foi colocado uma linha de código para criar um link entre o site e outra página .

```css
head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>MundoEsporte</title>
</head>
```

Depois disso, se dá início a codificação do corpo do site, ou seja o body, dentro dele será colocado tudo o que você gostaria que aparecesse na tela ao navegar pela página, no nosso caso, iniciamos colocando um header que será o cabeçalho do nosso site, e dentro dele colocamos algumas informações como uma imagem, que será a logo do site, e também um nav, que tem como função criar uma barra de navegação para o site(todos com suas próprias modificações estéticas no css).

```css
<header>
        <img src="logo.png" class="logo">
        <nav class="barra">
            <ul>

                <li><a href="#">Palpites</a></li>
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

Por fim criamos um footer, o qual implementamos algumas navegações entre páginas por links, sendo um dos links o nosso próprio github.

```css
<footer>
    <section class="midias">
        <a href="https://github.com/FabricioNicolini/Pichu"><i class="fa-brands fa-github"> </i></a>
        <a href=""><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
    </section>
</footer>
```

Para o CSS começamos pelo header, fizemos ele como uma flexbox para facil manipulação. Depois deixamos com um espacamento entre cada elemento e alinhamos eles no centro.]

```css
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-family: monospace;
    background-color: #232323;
    padding: 10px 20px;
    color: white;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 95px;
}
```

Para o footer usamos o flexbox para manusear ele e colocamos suas medidas em % para uma responsividade melhor, para ser usado tanto no celular quanto no pc.

```css
footer {
    display: flex;
    background-color: #232323;
    justify-content: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 10%;
    bottom: 0%;

}
```

Mas a parte principal da responsividade fica por parte dos medias querrys. Que neste caso usamos de forma que a pagina fique bem adequada para os celulares. Tudo isso so sera evidente caso a tela tenha um tamanho maximo de 768px. Usamos porcentagem para ser adequado no tamanho da tela e um valor fix que fica bom no celular. O media querry ajuda muito na responsividade, pois nem sempre so colocar % ajuda, temos tambem que colocar valores fixos e ideias que so o celular tem. Como no nosso site, caso vc veja pelo celular as noticias vao ficar em coluna não uma do lado da outra como no desktop.

```css
@media (max-width: 768px) {

    .noticia {
        width: 90%;


    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        /* Permite que o header cresça conforme necessário */

    }

    .logo {
        height: 80px;
        width: 80px;
    }

    nav {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    nav ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
        width: 100%;
    }


    nav ul li a {
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    /* Evita que o header cubra as notícias */
    body {
        padding-top: 140px;
        /* Ajusta o espaço no topo para evitar sobreposição */
    }

    footer {
        flex-direction: row;
        height: 8%;
        text-align: center;

    }
}
```
