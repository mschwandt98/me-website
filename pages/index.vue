<template>
    <div>
        <article>
            <h1>Marian Schwandt</h1>
            <p>{{ $t("titleNote") }}</p>
            <MeDivider />
            <p>
                {{ $t("name", ["Marian Schwandt"]) }}
                {{ $t("place", ["Magdeburg"]) }}
            </p>
            <p>
                {{ $t("devStarting") }}
            </p>
            <p>
                {{ $t("privateDev") }}
            </p>
            <p>
                <i18n path="githubLink">
                    <MeLink
                        :displayName="$t('githubProfileText')"
                        :url="githubUrl"
                        class="github-link"
                    />
                </i18n>
            </p>
        </article>
        <MeDivider />
        <div class="social-links">
            <MeLink
                class="github-link"
                displayName="GitHub"
                icon="github"
                :url="githubUrl"
            />
            <MeLink
                class="twitter-link"
                displayName="Twitter"
                icon="twitter"
                :url="twitterUrl"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: function () {
        return {
            githubUrl: "https://github.com/mschwandt98",
            twitterUrl: "https://twitter.com/masc_1998",
        };
    },
});
</script>

<style lang="scss">
@import "~assets/icons.css";

.social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    > a {
        align-items: center;
        display: flex;
        font-size: 1.5em !important;
        gap: 0.25em;
        padding: 0.25rem 0.5rem;
        width: fit-content;

        &:hover span {
            opacity: 1;
        }

        span {
            opacity: 0.6;
            transition: opacity 0.2s ease-in;
        }
    }
}

.github-link {
    $github-color: #24292e;

    i {
        color: $github-color !important;
    }

    span::after {
        background-color: $github-color !important;
    }
}

.twitter-link {
    $twitter-color: #1da1f2;

    i {
        color: $twitter-color !important;
    }

    span::after {
        background-color: $twitter-color !important;
    }
}
</style>
