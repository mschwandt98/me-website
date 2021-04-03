<template>
    <article>
        <h1>Marian Schwandt</h1>
        <div>{{ $t('titleNote') }}</div>
        <MeDivider />
        <div>
            {{ $t('name', ['Marian Schwandt']) }}
            {{ $t('place', ['Magdeburg']) }}
        </div>
        <div>
            {{ $t('devStarting') }}
        </div>
        <div>
            {{ $t('privateDev') }}
        </div>
        <div>
            <i18n path="githubLink" tag="label" for="githubProfileText">
                <MeLink :displayName="$t('githubProfileText')" :url="githubUrl" />
            </i18n>
        </div>
        <MeDivider />
        <div>
            <MeLink
                class="github-link"
                displayName="GitHub"
                icon="github"
                :url="githubUrl"
            />
        </div>
    </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data: function() {
        return {
            githubUrl: 'https://github.com/mschwandt98'
        }
    }
});
</script>

<style lang="scss">
@import '~assets/icons.css';

.github-link {
    align-items: center;
    color: #24292e;
    display: flex;
    font-size: 1.5em;
    gap: .25em;
    width: fit-content;

    &:hover span {
        opacity: .8;
    }

    span {
        opacity: .2;
        transition: opacity .2s ease-in;

        &::after {
            background-color: #24292e !important;
        }
    }
}
</style>
