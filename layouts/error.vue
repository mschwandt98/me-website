<template>
    <div>
        <h1>{{ $t("error") }}</h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    layout: "error"
});
</script>

<style lang="scss" scoped>
h1 {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
}
</style>
