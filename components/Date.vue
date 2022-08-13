<template>
  <div>
    {{ dateStr }}
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  margin-bottom: 8px;
}
</style>

<script setup lang="ts">
type Props = { date: string };
const { date } = defineProps<Props>();
const dateDate = new Date(date);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dateStr = `${months[dateDate.getMonth()]} ${dateDate.getDate()}, ${dateDate.getFullYear()}`;
</script>
