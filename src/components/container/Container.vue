<template>
    <section class="el-container" :class="{ 'is-vertical': isVertical }">
        <slot />
    </section>
</template>

<script setup lang="ts">
import { useSlots, computed, VNode, Component } from 'vue';
interface Props {
    direction?: string;
}
const props = defineProps<Props>();

const slots = useSlots();

// 如果slot中有header、footer，则flex-direction为column
const isVertical = computed(() => {
    if (slots && slots.default) {
        return slots.default().some((vn: VNode) => {
            const tag = (vn.type as Component).name;
            return tag === "ElHeader" || tag === "ElFooter";
        });
    } else {
        return props.direction === "vertical";
    }
});
</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

@include b(container) {
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;

    @include when(vertical) {
        flex-direction: column;
    }
}
</style>