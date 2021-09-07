---
tags: projects
layout: "base.njk"
relative_prefix: "../.."
title: "QuickLessons"
eleventyNavigation:
  key: "QuickLessons"
  desc: "This rapid online course building SaaS needed a huge update from the inside out."
  order: 1
projectResponsability: SaaS, UX, UI, information architeture, HTML, SCSS
---

<!-- <section class="project__nav internal-nav j-internal-nav">
    <div class="internal-nav__body">
        <h1 class="internal-nav__title">
            <a class="j-internal-nav__link" href="#project">QuickLessons</a>
        </h1>
        <nav class="internal-nav__nav">
            <ul class="j-internal-nav__list internal-nav__list">
                <li>
                    <a class="internal-nav__link internal-nav__link--active j-internal-nav__link"
                        href="#intro">about</a>
                </li>
                <li>
                    <a class="internal-nav__link j-internal-nav__link" href="#premises">premises</a>
                </li>
                <li>
                    <a class="internal-nav__link j-internal-nav__link" href="#research">research</a>
                </li>
                <li>
                    <a class="internal-nav__link j-internal-nav__link" href="#execution">execution</a>
                </li>
                <li>
                    <a class="internal-nav__link j-internal-nav__link" href="#final">final</a>
                </li>
            </ul>
        </nav>
    </div>
</section>
 -->

<h1 class="page__title">{{title}}</h1>
{% if projectResponsability %}
<blockquote class="project__responsible">
    {{projectResponsability}}
</blockquote>
{% endif %}

<section class="project j-project" id="project">

<section id="intro">
    <h4 class="project__step">The product</h4>
    <p>QuickLessons is a traditional online rapid course building software.</p>
    <p>This project's big challenge was the <strong>product redesign</strong>.</p>
    <!--
<p>Dentre seus recursos posso listar:</p>
<ul class="project__list">
    <li>100% online. Não há necessidade de instalar nada para poder acessá-lo.</li>
    <li>Possui recursos animados e de interação, sem necessidade de programação.</li>
    <li>Grande biblioteca de
        <em>templates</em> e
        <em>assets</em> disponíveis.</li>
    <li>Converte PowerPoint em Flash, já em formato SCORM pronto para subir para um LMS.</li>
    <li>Ferramenta de avaliação e revisão nativas.</li>
</ul>
-->

<h5 class="project__substep">Envisioned and implemented</h5>

<ul class="project__list">
    <li>UX Drops: quick and straightforward changes focused on improving user experience;</li>
    <li>Training sessions on user-centric design aiming to both educate the team and provide
        expert counsel;</li>
    <li>Contextual research;</li>
    <li>Documents and processes, reducing development time and enhancing focus on user experience
        such as:
        <ul class="project__list">
            <li>User personas;</li>
            <li>Questionnaires (qualitative and quantitative);</li>
            <li>Interview scripts.</li>
        </ul>
    </li>
</ul>
</section>

<section id="premises">
    <h4 class="project__step">Premises</h4>
    <p>Based on research and user feedback thru customer support, we established premises:</p>
    <ul class="project__list">
        <li>Focus on <strong>HTML5 library</strong> once mobile and responsive design courses were the
            ones most being used/requested;</li>
        <li>Upgrade technology to enhance interaction performance and speed development;</li>
        <li>Prioritize the <strong>scene editor</strong> function, making it fun to do it. The user
            should feel empowered but not overwhelmed by the options;</li>
        <li><strong>Modernize and simplify</strong> the interface.</li>
        <li>There should be user empowerment over the elements that appear in the scene without having too many
            options.</li>
    </ul>
</section>

<section id="research">
    <h4 class="project__step">Research</h4>
    <p>After benchmarking, I created a spreadsheet with:</p>
    <ul class="project__list">
        <li>Tool's name;</li>
        <li>Site;</li>
        <li>Product promise;</li>
        <li>Features:
            <ul class="project__list">
                <li>online;</li>
                <li>responsivoe;</li>
                <li>of free creation or template based.</li>
            </ul>
        </li>
        <li>Price;</li>
        <li>If it had PPT-to-SCORM conversion;</li>
        <li>UI sample.</li>
    </ul>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/quicklessons__benchmarking.png" alt="Benchmarking of QuickLessons competitors." />
        <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
    </figure>
    <p>This research resulted in a presentation to the team where I remembered / showed the positive and negative
        points of QuickLessons.</p>
    <p>Also, I took several notes about the interactions, flows, available resources etc.</p>
    <!-- <figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__questionamentos--01.jpg"
            alt="Apresentação para a equipe com as observações após pesquisa."/>
    <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
</figure>
<figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__questionamentos--02.jpg"
            alt="Apresentação para a equipe com as observações após pesquisa."/>
    <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
</figure>
<figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__questionamentos--03.jpg"
            alt="Apresentação para a equipe com as observações após pesquisa."/>
    <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
</figure>
<figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__questionamentos--04.jpg"
            alt="Apresentação para a equipe com as observações após pesquisa."/>
    <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
</figure>
<figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__questionamentos--05.jpg"
            alt="Apresentação para a equipe com as observações após pesquisa."/>
    <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
</figure>
<figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__questionamentos--06.jpg"
            alt="Apresentação para a equipe com as observações após pesquisa."/>
    <figcaption>Benchmarking of QuickLessons competitors.</figcaption>
</figure> -->
</section>

<section id="execution">
    <h4 class="project__step">Execution</h4>
    <h5 class="project__substep">Colors</h5>
    <p>To keep the design recognizable (the product was already some years in the market),
        blue was held as the primary color but with less saturation.</p>
    <div class="color-palette">
        <div class="ql-color--1"></div>
        <div class="ql-color--2"></div>
        <div class="ql-color--4"></div>
        <div class="ql-color--5"></div>
    </div>
    <p>I edited the rest of the color pallet with a contrasting color and a supporting grayscale.</p>
    <div class="color-palette">
        <div class="ql-color--active"></div>
        <div class="ql-color--black"></div>
        <div class="ql-color--gray--dark--blueish"></div>
        <div class="ql-color--gray--dark"></div>
        <div class="ql-color--gray"></div>
        <div class="ql-color--gray--lighter"></div>
    </div>
    <h5 class="project__substep">Typography</h5>
    <p>QuickLessons font was Verdana, which is an ok but very dated font. I updated the typography with two more
        contemporary fonts: <strong>Montserrat</strong> for titles and <strong>Hind</strong> for body text.</p>
    <div class="grid grid--2">
        <figure class="project__thumb project__thumb--type">
            <img src="{{relative_prefix}}/images/quicklessons__fonts--montserrat.png" alt="Montserrat sample." />
            <figcaption><strong>Montserrat</strong> sample.</figcaption>
        </figure>
        <figure class="project__thumb project__thumb--type">
            <img src="{{relative_prefix}}/images/quicklessons__fonts--hind.png" alt="Hind sample." />
            <figcaption><strong>Hind</strong> sample.</figcaption>
        </figure>
    </div>
    <h5 class="project__substep">Wireframe</h5>
    <div class="grid grid--2">
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/quicklessons__wireframe--02.png" alt="QuickLessons wireframe." />
            <figcaption>QuickLessons wireframe.</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/quicklessons__wireframe--03.png" alt="QuickLessons wireframe." />
            <figcaption>QuickLessons wireframe</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/quicklessons__wireframe--05.png" alt="QuickLessons wireframe." />
            <figcaption>QuickLessons wireframe</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/quicklessons__wireframe--08.png" alt="QuickLessons wireframe." />
            <figcaption>QuickLessons wireframe.</figcaption>
        </figure>
    </div>
</section>

<section id="final">
    <h4 class="project__step">Final</h4>
    <p>A new version of the scene editor function was launched, tested, and approved a few months later. The user
        feedback was positive and reflected the intended excitement when using the scene editor.</p>
    <p>You can check the demo video I created down below.</p>
    <h5 class="project__substep">Demo video</h5>
    <video class="video-player video-player--larger" controls controlslist="nodownload"
        poster="images/quicklessons__demo-poster.jpg">
        <source src="{{relative_prefix}}/videos/quicklessons__demo.mp4" type="video/mp4">
        <source src="{{relative_prefix}}/videos/quicklessogulpns__demo.ogv" type="video/ogg" codecs="theora, vorbis">
        <source src="{{relative_prefix}}/videos/quicklessons__demo.webm" type="video/webm">
    </video>
    <h5 class="project__substep">Mockups</h5>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/quicklessons__mockup--01.jpg" alt="Notebook simulation." />
        <figcaption>Notebook simulation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/quicklessons__mockup--02.jpg" alt="iMac simulation." />
        <figcaption>iMac simulation</figcaption>
    </figure>
    <h5 class="project__substep">Desktop screens - full screen</h5>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/quicklessons__printscreen--07.png" alt="QuickLessons sample screen." />
        <figcaption>QuickLessons sample screen</figcaption>
    </figure>
    <!-- <figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__printscreen--09.png"
            alt="QuickLessons sample screen."/>
    <figcaption>QuickLessons sample screen</figcaption>
</figure> -->
    <!-- <figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__printscreen--21.png"
            alt="QuickLessons sample screen."/>
    <figcaption>QuickLessons sample screen</figcaption>
</figure> -->
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/quicklessons__printscreen--25.png" alt="QuickLessons sample screen." />
        <figcaption>QuickLessons sample screen</figcaption>
    </figure>
    <!-- <figure class="project__thumb">
    <img src="{{relative_prefix}}/images/quicklessons__printscreen--32.png"
            alt="QuickLessons sample screen."/>
    <figcaption>QuickLessons sample screen</figcaption>
</figure> -->
</section>
</section>