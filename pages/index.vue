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
            <p>{{ $t("article") }}</p>
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
                class="linkedin-link"
                displayName="LinkedIn"
                icon="linkedin"
                :url="linkedInUrl"
            />
            <MeLink
                class="twitter-link"
                displayName="Twitter"
                icon="twitter"
                :url="twitterUrl"
            />
            <MeLink
                class="mail-link"
                displayName="Mail"
                icon="mail"
                :url="mailUrl"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: function() {
        return {
            githubUrl: "https://github.com/mschwandt98",
            linkedInUrl:
                "https://www.linkedin.com/in/marian-schwandt-0497a2212",
            twitterUrl: "https://twitter.com/masc_1998",
            mailUrl: "mailto:marian.schwandt@gmail.com"
        };
    }
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

.linkedin-link {
    $linkedin-color: #0a66c2;

    i {
        color: $linkedin-color !important;
    }

    span::after {
        background-color: $linkedin-color !important;
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

.mail-link {
    $mail-color: #4a5257;

    i {
        color: $mail-color !important;
    }

    span::after {
        background-color: $mail-color !important;
    }
}
</style>
