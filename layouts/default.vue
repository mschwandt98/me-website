<template>
    <Nuxt />
</template>

<style lang="scss">
:root {
    --primary: #2e2e2e;
}

html {
    background: url('https://img.fotocommunity.com/img7291-magdeburger-dom-an-der-elbe-50de0b94-568a-41ad-948f-03a0f6962420.jpg?height=1080')rgb(204, 204, 204);
    background-position: fixed;
    font-family:
        'Source Sans Pro',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        sans-serif;
    font-size: 16px;
}

body {
    color: var(--primary);
    margin: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
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
