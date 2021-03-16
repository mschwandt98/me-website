<template>
    <div class="container">
        <div class="content">
            <h1>Marian Schwandt</h1>
            <div>Software Engineer with a passion for Frontend Development</div>
            <MeDivider />
            <div>
                Hi, my name is Marian Schwandt! I am at home in the city on the
                Elbe, Magdeburg.
            </div>
            <div>
                I have been developing professionally for 3 years with a focus
                on web development. For the majority of my training, I learned
                programming in web development. During this time I also fell in
                love with web development.
            </div>
            <div>
                The Internet makes web content accessible anytime from anywhere,
                it connects millions of people around the world every day, it
                makes our everyday lives easier in so many areas so that no one
                can longer imagine a life without the Internet. And to make our
                everyday life even easier, I want to give free rein to my
                visions and ideas. I hope that one of my current or future ideas
                can be of use to my fellow human beings, even if this only
                affects a handful.
            </div>
            <div>
                During development, I make sure that my code not only delivers a
                high-performance and user-friendly result, but that it is also
                sustainable. The transfer of data over the Internet has a
                greater impact on our environment than you might be aware of.
                But I don't want to go too far on this subject. If you are
                interested in the topic and want to learn more about it, I
                recommend the following websites:
                <ul class="green-links">
                    <li v-for="(link, key) in greenLinks" :key="key">
                        <MeLink
                            :displayName="link.displayName"
                            icon="leaf"
                            :url="link.url"
                        />
                    </li>
                </ul>
            </div>
            <div>
                Unfortunately, during my apprenticeship I didn't have much time
                to develop in my private life. But now I want to get started
                right away. In the future, I'll be a lot more active on GitHub.
                There I will evolve my skills in JavaScript, C#, PHP and
                JS-Frameworks like VueJS. If you're interested in my projects,
                just check out
                <MeLink displayName="my GitHub profile" :url="githubUrl" /> -
                linked below.
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
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data: function() {
        return {
            githubUrl: 'https://github.com/mschwandt98',
            greenLinks: [
                {
                    url: 'https://www.websitecarbon.com',
                    displayName: 'websitecarbon.com'
                },
                {
                    url: 'https://www.thegreenwebfoundation.org',
                    displayName: 'thegreenwebfoundation.org'
                },
                {
                    url: 'https://ecograder.com',
                    displayName: 'ecograder.com'
                }
            ]
        }
    }
})
</script>

<style lang="scss">
@import '~assets/icons.css';

h1 {
    font-size: 1.5rem;
    margin: 0;
}

.container {
    display: flex;
    justify-content: flex-end;

    .content {
        background-color: rgba(230, 230, 230, 0.8);
        height: 100%;
        min-height: 100vh;
        max-width: 40vw;
        min-width: 256px;
        padding: 1em 2em;
    }
}

ul.green-links {
    list-style: none;
    padding: 0;

    li {
        cursor: pointer;
        width: fit-content;

        &:hover {
            a,
            i {
                color: #0c5f0c;
            }
        }

        a,
        i {
            color: #159615;
        }

        a span::after {
            background-color: #0c5f0c !important;
        }

        i {
            margin-right: 0.25em;
        }
    }
}

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
