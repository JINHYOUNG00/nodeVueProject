<script setup>
import { useMouse } from '@/common';
let { x, y } = useMouse();
</script>
<template>마우스 위치: {{ x }}, {{ y }}</template>

<style></style>