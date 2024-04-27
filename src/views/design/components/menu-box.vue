<template>
  <div class="menu-box" :class="{checked: props.checked}">
    <div class="flex justify-center items-center">
      <SvgIcon :icon="props.icon" />
      <SvgIcon v-if="props.dropdown" icon="i-triangle-down" class="triangle-down" />
    </div>
    <span>{{ props.name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  dropdown: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.menu-box {
  min-width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  color: rgba(0,0,0,0.68);
  // background-color: rgba(0,0,0,0.02);
  // box-shadow: 0 0 2px rgba(0,0,0,0.08);
  // border: 1px solid rgba(0,0,0,0.04);
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  &:hover {
    color: var(--primary-color);
    // border-color: var(--primary-color);
    box-shadow: 0 0 4px rgba(0,0,0,0.08);
  }
  .svg-icon {
    font-size: 20px;
    &.triangle-down {
      font-size: 8px;
      margin-left: 2px;
    }
  }
  span {
    font-size: 10px;
  }
  &.checked {
    background-color: var(--primary-color)!important;
    // border-color: var(--primary-color)!important;
    color: #fefefe!important;
  }
}
</style>