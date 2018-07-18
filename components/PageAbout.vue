<template>
    <AppSection class="page page--about">

        <div class="container is-fluid">
            <div class="block block--transparent">
                <h1 class="title is-1 has-text-centered is-spaced"><span class="codify">About</span></h1>
            </div>

            <div class="block block--transparent block--text">
                <img class="profile-image" src="/images/imfaber-profile.png" alt="Imfaber - Fabrizio Meinero">
                <p>
                    I am <strong>Fabrizio Meinero</strong> (web name <strong>Imfaber</strong> ), a freelance web developer based in Madrid (Spain) but also active in the UK and Italy.<br>
                    With over 10 years of commercial experience my skills are broad: from front-end to back-end, from UI/UX to devops. I enjoy every aspect of web development, and love building web sites & apps from start to end, for clients all over the world.
                </p>
            </div>

            <div class="block block--transparent block--text">
                <p>In my career I've had the honor to work on a variety of exciting projects for some major clients such as
                    <strong>MTV Italy</strong>, <strong>Lavazza</strong>, <strong>WWF</strong>, <strong>World Animal Protection</strong>,
                    <strong>Disasters Emergency Committee</strong> and others. For some examples check
                    <nuxt-link to="/work"><span>my portfolio</span></nuxt-link> out.</p>
            </div>

            <div class="block block--transparent block--text">
                <p>I'm available for remote work - if you would like to build something together, <nuxt-link to="/contact"><span>get in touch</span></nuxt-link>!</p>
            </div>

            <div class="block block--transparent block--carousel">
                <h2 class="title is-4 has-text-centered is-spaced"><span class="codify">What others say...</span></h2>
                <carousel autoplay="true"
                          perPage="1"
                          autoplayTimeout="30000"
                          navigationEnabled="true">
                    <slide>
                        <a href="https://www.linkedin.com/in/rich-saddington/" target="_blank">
                            <img alt="Rich Saddington" height="56" width="56" src="https://media.licdn.com/dms/image/C4E03AQFmtqeRu3pc_w/profile-displayphoto-shrink_100_100/0?e=1537401600&amp;v=beta&amp;t=kMDWJ-P0xrwu_QMXoPmfNrkSmDm0PmFx_9Ezsh6jgOM">
                            <strong>Rich Saddington</strong>
                            <smaller>Technical Account Manager at Acquia</smaller>
                        </a>
                        <blockquote>Fab is a hugely talented developer with deep experience across the whole stack - from server configuration, through to FE optimisation and all the architecture/CMS/API layers in between.</blockquote>
                    </slide>
                    <slide>
                        <a href="https://www.linkedin.com/in/uxandy" target="_blank">
                            <img alt="Andy Cole" height="56" width="56" src="https://media.licdn.com/dms/image/C4E03AQGKFQOuOpXKfQ/profile-displayphoto-shrink_100_100/0?e=1537401600&v=beta&t=UQflZJhgaGjaAxrED43wQw2nBiIwSlDMoOnT7on5a18">
                            <strong>Andy Cole</strong>
                            <smaller>Freelance UX Consultant</smaller>
                        </a>
                        <blockquote>His skillset, backed up by his positive attitude made Fab one of the best developers I have ever worked with. Can't recommend him highly enough.</blockquote>
                    </slide>
                    <slide>
                        <a href="https://www.linkedin.com/in/mrmjenkins" target="_blank">
                            <img alt="Mike Jenkins" height="56" width="56" src="https://media.licdn.com/dms/image/C4E03AQGA4f7lXRU-5A/profile-displayphoto-shrink_100_100/0?e=1537401600&v=beta&t=FORDVPEyTAGUzO7z8Wbk2wnGqu4MCXw7B3XrTFPX7eU">
                            <strong>Mike Jenkins</strong>
                            <smaller>MD / Strategy Director at Positive</smaller>
                        </a>
                        <blockquote>Fab is a hard working, honest, super intelligent developer and thinker. He’s the kind of guy you need in every team. Highly recommended and seems to have no limits to his skills.</blockquote>
                    </slide>
                </carousel>
            </div>
        </div>
    </AppSection>
</template>

<script>
  import AppSection from "~/components/AppSection"

  export default {
    components: { AppSection }
  }
</script>
