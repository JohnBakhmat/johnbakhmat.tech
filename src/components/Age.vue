<script setup>
import { ref, onUnmounted } from "vue";

const age = ref(new Date());
const birthday = new Date(2002, 0, 9).getTime();
const interval = setInterval(() => {
  age.value = ((new Date().getTime() - birthday) / 31557600000) // 1000 * 60 * 60 * 24 * 365.25
    .toString()
    .slice(0, 12);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <span class="font-mono">{{ age }}</span>
</template>
