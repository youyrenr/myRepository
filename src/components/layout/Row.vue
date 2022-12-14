<template>
    <component :is="tag" class="el-row" :class="[type ? `el-row--${type}` : '',
    justify !== 'start' ? `el-row--justify--${justify}` : '']">
        <slot />
    </component>
</template>
<script lang="ts">
export default {
    name: 'ElRow'
};
</script>
<script setup lang="ts">
import { withDefaults, computed, h, VNode } from "vue";
interface Props {
    tag: string,
    gutter: number,
    type?: "none" | "inline" | "block" | "inline-block" | "flex" | "",
    justify?: "start" | "end" | "center" | "space-around" | "space-between" | ""
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
    tag: "div",
    gutter: 0,
    type: "",
    justify: "start"
});

const marginLeft = computed(() => props.gutter / 2);
const marginRight = computed(() => props.gutter / 2);

//创建VNode
const vnode: VNode = h(props.tag, { class: `el-row--${props.gutter}` });
</script>
<style lang="scss" scope>
@import "../styles/mixin";
$gutter: v-bind('props.gutter');

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

    @include m(justify) {
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

    @include radius(5px)
}
</style>