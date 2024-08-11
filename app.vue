<template>
  <div>
    <UButton @click="startNextRoom">Next Room</UButton>
  </div>
</template>
<script setup lang="ts">
const startNextRoom = () => $fetch('/api/next')
</script>
