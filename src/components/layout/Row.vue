<template>
    <component :is="tag" class="el-row" :class="[gutter ? `el-row--gutter` : '',
    type ? `el-row--${type}` : '',
    justify ? `el-row--${justify}` : '']">
        <slot />
    </component>
</template>
<script lang="ts">
export default {
    name: 'ElRow'
};
</script>
<script setup lang="ts">
import { withDefaults } from "vue";
interface Props {
    tag: string,
    gutter: number,
    type?: "none" | "inline" | "block" | "inline-block" | "flex" |"",
    justify?:"start"|"end"|"center"|"space-around"|"space-between"|""
}
const props = withDefaults(defineProps<Props>(), {
    tag: "div",
    gutter: 0,
    type: "",
    justify:""
});
</script>
<style lang="scss" scope>
@import "../styles/mixin";

@include b(row) {
    @include m(none) {
        display: none;
    }
    @include m(inline) {
        display: inline;
    }
    @include m(block) {
        display: block;
    }
    @include m(inline-block) {
        display: inline-block;
    }
    @include m(flex) {
        display: flex;
    }
    @include m(start) {
        justify-content: flex-start;
    }
    @include m(end) {
        justify-content: flex-end;
    }
    @include m(center) {
        justify-content: center;
    }
    @include m(space-around) {
        justify-content: space-around;
    }
    @include m(space-between) {
        justify-content: space-between;
    }
}
</style>