<template>
    <div>
        <MeImage
            classes="cover-img"
            :altText="$t('imageText')"
            :titleText="$t('imageText')"
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
@import '../variables.scss';

::selection {
    background-color: rgba($primary, .2);
}

*,
*::before,
*::after {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    background-color: $secondary;
    color: $primary;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

h1 {
    font-size: 1.5rem;
}

.container .content {
    min-width: 256px;
    padding: 1em 2em;
    position: relative;
}

@media screen and (min-width: 992px) {
    .container {
        display: flex;
        justify-content: flex-end;

        .content {
            background-color: rgba($secondary, 0.8);
            height: 100%;
            min-height: 100vh;
            max-width: 40vw;
        }
    }

    .cover-img {
        position: fixed;
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
