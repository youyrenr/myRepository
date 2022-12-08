<template>
  <button class="el-button" :class="[size ? `el-button--${size}` : '',
  [type ? `el-button--${type}` : '']]">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { withDefaults } from "vue";
interface Props {
  size?: "" | "small" | "medium" | "large",
  type?: "" | 'primary' | 'success' | 'danger'
}
const props = withDefaults(defineProps<Props>(), {
  size: "",
  type: ""
});
</script>
<style lang="scss">
@import "../styles/mixin.scss";

@include b(button) {
  @include button-size(5px, 5px, 5px, 5px);

  @include m(small) {
    @include button-size($--button-small-padding-vertical,
      $--button-small-padding-horizontal,
      $--button-small-font-size,
      $--button-small-border-radius );
  }

  @include m(medium) {
    @include button-size($--button-medium-padding-vertical,
      $--button-medium-padding-horizontal,
      $--button-medium-font-size,
      $--button-medium-border-radius );
  }

  @include m(large) {
    @include button-size($--button-large-padding-vertical,
      $--button-large-padding-horizontal,
      $--button-large-font-size,
      $--button-large-border-radius );
  }

  @include m(primary) {
    @include button-type($--button-primary-border-color,
      $--button-primary-font-color,
      $--button-primary-background-color )
  }

  @include m(success) {
    @include button-type($--button-success-border-color,
      $--button-success-font-color,
      $--button-success-background-color )
  }

  @include m(warning) {
    @include button-type($--button-warning-border-color,
      $--button-warning-font-color,
      $--button-warning-background-color )
  }

  @include m(danger) {
    @include button-type($--button-danger-border-color,
      $--button-danger-font-color,
      $--button-danger-background-color )
  }
}
</style>