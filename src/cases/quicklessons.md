![QuickLessons | Plataforma colaborativa para criar cursos online][cover]
# QuickLessons

> Responsável por: UX, UI, arquitetura da informação, HTML, CSS(SCSS), entrevista com usuários

## Intro
QuickLessons é um tradicional programa de construção de cursos online. Dentre seus recursos posso listar:
* 100% online. Não há necessidade de instalar nada para poder acessá-lo.
* Possui recursos animados e de interação, sem necessidade de programação.
* Grande biblioteca de *templates* e *assets* disponíveis.
* Converte PowerPoint em Flash, já em formato SCORM pronto para subir para um LMS.
* Ferramenta de avaliação e revisão nativas.

Durante meu período de trabalho no QuickLessons, devenvolvi:
* UX Drops: pequenas melhorias para aprimorar a experiência do usuário;
* Apresentações para toda a equipe sobre design centrado no usuário;
* Uma série de documentos que deram suporte para essa ênfase no usuário, como:
    * fichas com personas;
    * questionários;
    * roteiro para entrevistas.
* Pesquisas contextuais também.

No entanto, mesmo com as diversas outras melhorias e recursos que criei para o QuickLessons, meu grande desafio foi redesenhar o produto, junto com os três desenvolvedores do produto. E é sobre esse desafio que escrevo abaixo.

----

Logo nas primeiras conversas com os desenvolvedores chegamos alguns pontos críticos. Dentre eles posso destacar:
* **Tamanho do produto**: os muitos anos de mercado tinham feito o produto ficar com muitas funcionalidades e que possivelmente estavam ligadas umas as outras, mesmo quando não deveriam.

* **Tecnologia utilizada**: o QuickLessons foi desenvolvido muitos anos atrás e praticamente toda sua programação poderia ser amplamente melhorada, inclusive utilizando recursos mais recentes como AngularJS, NodeJS e outros.

* **Velocidade de entrega**: estávamos cientes de que era um processo bastante demorado e que os clientes do produto já pediam a tempos por mais e mais rápidas atualizações no produto. Dessa forma, dividir o QuickLessons em partes se tornou imperativo.

De posse do entendimento dos elementos críticos, partimos para as premissas do projeto.

----

## Premissa
A partir de *feedback* de usuários recolhidos pelo suporte e pesquisa com nossos clientes, definimos algumas premissas do projeto:
* Trabalharíamos somente a **biblioteca HTML**, uma vez que identificamos que o foco de nossos clientes estavam em cursos para dispositivos móveis e design responsivo. Outras bibliotecas receberiam apenas manutenção e suporte.
* Utilizaríamos tecnologias mais recentes para melhorar substancialmente a performance do produto e as interações possíveis além de acelerar a codificação do produto.
* A primeira área a ser trabalhada seria a **edição de cena**. As áreas de edição do curso e edição da cena seriam trabalhadas em outro momento.
* A interface do QL deveria ficar mais leve e simples, com um ar contemporâneo.
* A edição de cena deveria ser algo divertido de se fazer. Deve haver um empoderamento do usuário sobre os elementos que aparecem na cena, sem pecar pelo excesso de opções e *blank state* dos concorrentes.

## Pesquisa
Iniciei a pesquisa buscando informações dos nossos concorrentes e montei uma planilha com:
* Nome da ferramenta;
* Site;
* Promessa do produto;
* Se o produto era:
    * online;
    * responsivo;
    * de livre criação ou usava templates.
* Preço;
* Se possuía conversão para PPT;
* E uma imagem com uma tela do produto exemplificando a interface.

Essa pesquisa resultou em uma apresentação para a equipe onde relembrei/mostrei os pontos positivos e negativos do QuickLessons.

Levantei pontos positivos da interface do QuickLessons e de seus concorrentes. Também busquei outros tipos de edição de tela, fora no contexto "curso online", onde encontrei ótimas referências de edição de sites, apresentações etc.

![Slides.com foi uma das referências para o novo QuickLessons][slides]

## Execução

Para a nova interface, o QuickLessons precisava de uma palhete de cores renovada e decidi por um par de tipografias mais contemporânea que a antiga Verdana: [Montserrat](https://fonts.google.com/specimen/Montserrat) para títulos e [Hind](https://fonts.google.com/specimen/Hind) para o corpo de texto.

Como o volume de coisas a fazer era grande e o tempo escasso, escolhi a biblioteca Material Design Icons como fonte de ícones para o produto.

!!! Inserir palheta de cores

!!! Inserir specimen de tipografia

!!! Inserir wireframes

## Final

Uma versão de edição de cena foi lançada para público meses depois, quando foi testada e aprovada. O retorno dos clientes com a nova abordagem foi fantástica.

!!! Inserir video

!!! Inserir prints


[cover]: https://media.licdn.com/media/p/7/000/1b9/18d/0345d3f.png
[slides]: