<template>
    <div>
        <MeImage
            classes="cover-img"
            altText=""
            titleText=""
            :sizes="[600, 800, 1000, 1200, 1600, 2000]"
            :sources="sources"
        />
        <div class="container">
            <Nuxt class="content" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data: function() {
        return {
            sources: [
                '/background.avif',
                '/background.webp',
                '/background.jpg',
                '/background.png'
            ]
        }
    },
    head() {
        const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            },
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$t('description') as string
                }
            ],
            title: 'Marian Schwandt - ' + this.$t('titleNote'),
            link: i18nHead.link
        }
    }
});
</script>

<style lang="scss">
:root {
    --primary: #2e2e2e;
}

::selection {
    background-color: rgba(#2e2e2e, .2);
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    background-color: rgb(230, 230, 230);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

body {
    color: var(--primary);
    margin: 0;
}

h1 {
    font-size: 1.5rem;
}

.container .content {
    min-width: 256px;
    padding: 1em 2em;
}

@media screen and (min-width: 992px) {
    .container {
        display: flex;
        justify-content: flex-end;

        .content {
            background-color: rgba(230, 230, 230, 0.8);
            height: 100%;
            min-height: 100vh;
            max-width: 40vw;
        }
    }

    .cover-img {
        position: absolute;
        object-fit: cover;
        object-position: center left;
        height: 100vh;
        width: 100vw;
        z-index: -1;
    }
}

@media screen and (max-width: 991px) {
    .cover-img {
        object-fit: cover;
        object-position: 50% 60%;
        max-height: 25vh;
        width: 100%;
    }
}

::-webkit-scrollbar {
    height: 8px;
    width: 8px;

    // Fixen
    &:hover {
        height: 12px;
        width: 12px;
    }
}

::-webkit-scrollbar-track {
    background: rgba(187, 187, 187, 0.8);
}

::-webkit-scrollbar-thumb {
    background: rgb(145, 145, 145);

    &:hover {
        background: rgb(104, 104, 104);
    }
}
</style>
