<template>
    <div>
        <div class="cover-img">
            <MeImage
                :altText="$t('imageText')"
                :titleText="$t('imageText')"
                :sizes="[600, 800, 1000, 1200, 1600, 2000]"
                :sources="sources"
            />
        </div>
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
        const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
        return {
            htmlAttrs: {
                lang: this.$i18n.locale,
                ...i18nHead.htmlAttrs
            },
            meta: [
                {
                    name: 'description',
                    content: this.$t('description') as string
                },
                ...(i18nHead.meta ?? [])
            ],
            link: i18nHead.link,
            title: 'Marian Schwandt - ' + this.$t('titleNote')
        }
    }
});
</script>

<style lang="scss">
@import '../variables.scss';

@mixin scroll-shadow {
    background:
            linear-gradient($secondary 33%, rgba($secondary, 0)),
            linear-gradient(rgba($secondary, 0), $secondary 66%) 0 100%,
            radial-gradient(farthest-side at 50% 0, rgba(34, 34, 34, .6), rgba(black, 0)),
            radial-gradient(farthest-side at 50% 100%, rgba(34, 34, 34, .5), rgba(black, 0)) 0 100%;
    background-attachment: local, local, scroll, scroll;
    background-repeat: no-repeat;
    background-size: 100% 45px, 100% 45px, 100% 16px, 100% 16px;
    overflow-y: auto;
    position: relative;
}

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
    overflow: hidden;
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
            @include scroll-shadow();
            background-color: rgba($secondary, 0.8);
            height: 100vh;
            max-width: 40vw;
        }
    }

    .cover-img img {
        position: fixed;
        object-fit: cover;
        object-position: center left;
        height: 100vh;
        width: 100vw;
        z-index: -1;
    }
}

@media screen and (max-width: 991px) {
    body {
        @include scroll-shadow();
        height: 100vh;
    }

    .cover-img {
        height: 25vh;
        width: 100%;

        img {
            object-fit: cover;
            object-position: 50% 60%;
        }
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
