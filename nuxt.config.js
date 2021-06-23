export default {
    // Creates 404.html
    generate: {
        fallback: true
    },

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Marian Schwandt",
        meta: [
            {
                charset: "utf-8"
            },
            {
                hid: "viewport",
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                name: "theme-color",
                content: "#e6e6e6"
            },
            {
                name: "author",
                content: "Marian Schwandt"
            }
        ],
        // <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96">
        link: [
            {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/icon-32.png",
                sizes: "32x32"
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/icon-96.png",
                sizes: "96x96"
            },
            {
                rel: "shortcut icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            },
            {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/icon-120.png"
            },
            {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/icon-152.png"
            },
            {
                rel: "apple-touch-icon",
                sizes: "167x167",
                href: "/icon-167.png"
            },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/icon-180.png"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/fonts/poppins.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
        "nuxt-compress"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            "nuxt-i18n",
            {
                baseUrl: "https://www.mschwandt.de",
                locales: [
                    {
                        code: "en",
                        iso: "en-US",
                        name: "English"
                    },
                    {
                        code: "de",
                        iso: "de-DE",
                        name: "Deutsch"
                    }
                ],
                defaultLocale: "en",
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: "i18n_redirected",
                    alwaysRedirect: true
                },
                vueI18n: {
                    fallbackLocale: "en",
                    messages: {
                        en: {
                            webDeveloper: "Web Developer",
                            titleNote: "Web Developer from Magdeburg - Germany",
                            description:
                                "Hi, my name is Marian. On this page I would like to introduce myself to you briefly. If you are interested in my projects, feel free to visit me on GitHub!",
                            name: "Hi, my name is {0}!",
                            place: "I am a Web Developer from Magdeburg.",
                            article:
                                "In near future I will upgrade this page to introduce myself to you. So check back soon!",
                            error: "There was an error."
                        },
                        de: {
                            webDeveloper: "Web-Entwickler",
                            titleNote: "Web-Entwickler aus Magdeburg",
                            description:
                                "Hi, ich bin Marian. Auf dieser Seite möchte ich mich dir kurz vorstellen.",
                            name: "Hi, mein Name ist {0}!",
                            place: "Ich bin ein Web-Entwickler aus Magdeburg.",
                            article:
                                "Demnächst werde ich diese Seite ausbauen, um mich dir vorzustellen. Also schau bald wieder vorbei!",
                            error: "Es trat ein Fehler auf."
                        }
                    }
                }
            }
        ],
        "@nuxtjs/sitemap",
        [
            "@nuxtjs/robots",
            {
                UserAgent: "*",
                Allow: "/",
                Sitemap: [
                    "https://www.mschwandt.de/sitemap.xml",
                    "https://www.mschwandt.de/sitemap.xml.gz"
                ]
            }
        ]
    ],

    sitemap: {
        hostname: "https://mschwandt.de",
        gzip: true,
        routes: ["/", "/de"],
        i18n: {
            locales: ["en", "de"],
            routesNameSeparator: "___"
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
};
