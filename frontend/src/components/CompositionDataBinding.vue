<template>
    <div>마우스 위치: {{ x }}, {{ y }}</div>
    <input v-model.number="num1"> +
    <input v-model.number="num2"> =
    <span>{{ result }}</span>
</template>

<!-- <script>
export default {
    data() {
        return {
            num1: 0,
            num2: 0,
            result: 0
        }
    },
    methods: {
        plusNumbers: function () {
            this.result = this.num1 + this.num2;
        }
    }
}
</script> -->
<script setup>
import { plusCalculator, useMouse } from '@/common';
let { num1, num2, result } = plusCalculator();
let { x, y } = useMouse();
</script>

<style></style>