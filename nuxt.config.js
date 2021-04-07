export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Marian Schwandt',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                name: 'theme-color',
                content: '#e6e6e6'
            },
            {
                name: 'author',
                content: 'Marian Schwandt'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '120x120',
                href: '/icon-120.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '152x152',
                href: '/icon-152.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '167x167',
                href: '/icon-167.png'
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/icon-180.png'
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/fonts/poppins.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        'nuxt-compress'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ['nuxt-i18n', {
            locales: [
                {
                    code: 'en',
                    iso: 'en-US'
                },
                {
                    code: 'de',
                    iso: 'de-DE'
                }
            ],
            detectBrowserLanguage: {
                useCookie: true,
                cookieKey: 'i18n_redirected',
                onlyOnRoot: true
            },
            seo: true
        }],
        '@nuxtjs/sitemap',
        ['@nuxtjs/robots', {
            UserAgent: '*',
            Allow: '/',
            Sitemap: [
                'https://mschwandt.de/sitemap.xml',
                'https://www.mschwandt.de/sitemap.xml'
            ]
        }]
    ],

    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: {
                    titleNote: 'Software Engineer, Frontend Development',
                    description: 'Hi, my name is Marian. On this page I would like to introduce myself to you briefly. If you are interested in my projects, feel free to visit me on GitHub!',
                    name: 'Hi, my name is {0}!',
                    place: 'I am a young developer from Magdeburg.',
                    devStarting: 'I have been developing professionally for 3 years with a focus on web development. For the majority of my training, I learned programming in web development. During this time I also fell in love with web development.',
                    privateDev: 'Unfortunately, during my apprenticeship I didn\'t have much time to develop in my private life. But now I want to get started right away. In the future, I\'ll be a lot more active on GitHub. There I will evolve my skills in JavaScript, C#, PHP and JS-Frameworks like VueJS.',
                    githubLink: 'If you\'re interested in my projects, just check out {0} - linked below.',
                    githubProfileText: 'my GitHub profile',
                    imageText: 'That\'s me on the Elbe in front of Magdeburg Cathedral.',
                    error: 'There was an error.'
                },
                de: {
                    titleNote: 'Software Entwickler, Frontend Entwicklung',
                    description: 'Hi, ich bin Marian. Auf dieser Seite möchte ich mich dir kurz vorstellen. Falls du Interesse an meinen Projekten hast, schau gerne bei mir auf GitHub vorbei!',
                    name: 'Hi, mein Name ist {0}!',
                    place: 'Ich bin ein junger Entwickler aus Magdeburg.',
                    devStarting: 'Ich programmiere professionell seit 3 Jahren mit einem Fokus auf Frontend-Entwicklung. Den Großteil meiner Ausbildungszeit lernte ich die Programmierung in der Webentwicklung. Während dieser Zeit verliebte ich mich auch in die Webentwicklung.',
                    privateDev: 'Leider hatte ich während meiner Ausbildung nicht viel Zeit zum Entwickeln in meiner Freizeit. Aber jetzt möchte ich damit loslegen. In Zukunft werde ich aktiver auf GitHub sein. Dort werde ich meine Fähigkeiten in JavaScript, C#, PHP und JS-Frameworks wie VueJS verbessern.',
                    githubLink: 'Wenn du an meinen Projekten interessiert bist, schau auf {0} vorbei.',
                    githubProfileText: 'meinem GitHub Profil',
                    imageText: 'Das bin ich an der Elbe vor dem Magdeburger Dom.',
                    error: 'Es trat ein Fehler auf.'
                }
            }
        }
    },

    sitemap: {
        hostname: 'https://mschwandt.de',
        gzip: true,
        routes: [
            '/',
            '/de'
        ],
        i18n: {
            locales: ['en', 'de'],
            routesNameSeparator: '___'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                preserveLineBreaks: false,
                collapseWhitespace: true
            }
        }
    }
}
