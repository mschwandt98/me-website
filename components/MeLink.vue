<template>
    <a :href="url" :title="url" target="_blank">
        <i v-if="icon != null" :class="`icon-${icon}`"></i>
        <span v-if="displayName">{{ displayName }}</span>
        <span v-else>{{ url }}</span>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('MeLink', {
    props: {
        displayName: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: none;

    &:hover span::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    span {
        display: inline-block;
        position: relative;

        &::after {
            background-color: var(--primary);
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            height: 1px;
            width: 100%;
        }
    }
}
</style>
