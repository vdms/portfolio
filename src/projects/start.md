---
tags: projects
layout: "base.njk"
relative_prefix: "../.."
title: "Start"
eleventyNavigation:
  key: "Start"
  desc: "A white label lightweight LMS with a quick deploy time."
  order: 2
projectResponsability: UX, UI, information architeture, HTML, SCSS
---

<!-- <section class="project__nav internal-nav j-internal-nav">
    <div class="internal-nav__body">
        <h1 class="internal-nav__title">
            <a class="j-internal-nav__link" href="#project">Start</a>
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
</section> -->

<h1 class="page__title">{{title}}</h1>
{% if projectResponsability %}
<blockquote class="project__responsible">
    {{projectResponsability}}
</blockquote>
{% endif %}

<section class="project j-project" id="project">
<section id="intro">
    <h4 class="project__step">About</h4>
    <p>The challenge was to convert a client from an <abbr title="Learning Management System">LMS</abbr>
        native solution to a web app so the experience could be light and responsive, while also
        reducing implementation time.</p>
</section>
<section id="premises">
    <h4 class="project__step">Premises / Product scope</h4>
    <ul class="project__list">
        <li>User's view of the product cycle: just log in, consume content and log out.</li>
        <li>Minimalist e-mail communication: registration, password recovery, course enrollment, and
            course conclusion.</li>
        <li>Some types of content were excluded, such as HTML, infographics, and others.</li>
        <li>Once the product is validated: add social features.</li>
    </ul>
</section>
<section id="research">
    <h4 class="project__step">Research</h4>
    <h5 class="project__substep">Basic flow map</h5>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__inicio.png" alt="Start wireframe." />
        <figcaption>Mapping and initial Start wireframe</figcaption>
    </figure>
    <h5 class="project__substep">Wireframe</h5>
    <p>Wireframing proved to be useful since we were able to improve the flow and the information in each screen, compared with the native app.</p>
    <div class="grid grid--3">
        <!-- <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--01.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure> -->
        <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--02.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure>
        <!-- <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--03.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure> -->
        <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--04.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure>
        <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--05.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure>
        <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--06.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure>
        <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--07.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure>
        <!-- <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--08.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure> -->
        <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--09.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure>
        <!-- <figure class="project__thumb project__thumb--nocaption">
            <img src="{{relative_prefix}}/images/start__wireframe--10.png" alt="Start wireframe." />
            <figcaption>Start wireframe.</figcaption>
        </figure> -->
    </div>
</section>
<section id="execution">
    <h4 class="project__step">Execution</h4>
    <h5 class="project__substep">Colors</h5>
    <p>Since it was designed to be a <em>white label</em> web app, primary colors are customizable by
        each client. Only support colors were defined.</p>
    <div class="color-palette">
        <div class="start-color--black"></div>
        <div class="start-color--gray--dark"></div>
        <div class="start-color--gray"></div>
        <div class="start-color--gray--light"></div>
        <div class="start-color--white"></div>
        <div class="start-color--info"></div>
        <div class="start-color--error"></div>
        <div class="start-color--success"></div>
        <div class="start-color--warning"></div>
    </div>
    <h5 class="project__substep">Typography</h5>
    <p>Fire Sans for titles and Roboto for body text.</p>
    <div class="grid grid--2">
        <figure class="project__thumb project__thumb--type">
            <img src="{{relative_prefix}}/images/start__fonts--fira-sans.png" alt="Fira Sans Sample." />
            <figcaption>Fira Sans Sample.</figcaption>
        </figure>
        <figure class="project__thumb project__thumb--type">
            <img src="{{relative_prefix}}/images/start__fonts--roboto.png" alt="Roboto Sample." />
            <figcaption>Roboto Sample.</figcaption>
        </figure>
    </div>
    <h5 class="project__substep">Tablet, landscape orientation</h5>
    <div class="grid grid--2">
        <!-- <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--01.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure> -->
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--02.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--03.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--04.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--05.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--06.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure>
        <figure class="project__thumb">
            <img src="{{relative_prefix}}/images/start__printscreen--landscape--07.png"
                alt="Start screen - landscape orientation." />
            <figcaption>Start screen - landscape orientation.</figcaption>
        </figure>
    </div>
    <!-- <h5 class="project__substep">Tablet, portrait orientation</h5>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--01.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--02.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--03.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--04.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--05.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--06.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__printscreen--portrait--07.png"
            alt="Start screen - portrait orientation." />
        <figcaption>Start screen - portrait orientation.</figcaption>
    </figure> -->
</section>
<section id="final">
    <h4 class="project__step">Final</h4>
    <p>Simple, straightforward, light, and responsive design.</p>
    <p>Start uses a reduced number of images. It has a short loading time and allows the content to be
        king.</p>
    <h5 class="project__substep">Mockups</h5>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__mockup--01.png" alt="iPad simulation, landscape orientation." />
        <figcaption>iPad simulation, landscape orientation.</figcaption>
    </figure>
    <figure class="project__thumb">
        <img src="{{relative_prefix}}/images/start__mockup--02.png" alt="Mobile simulation." />
        <figcaption>Mobile simulation.</figcaption>
    </figure>
</section>
</section>