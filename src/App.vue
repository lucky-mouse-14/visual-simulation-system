<template>
  <n-config-provider
    class="w-full h-full"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <router-view v-slot="{ Component, route: curRoute }">
      <component :is="Component" :key="curRoute.fullPath" />
    </router-view>
  </n-config-provider>
</template>

<script setup>
import { zhCN, dateZhCN } from 'naive-ui'
</script>