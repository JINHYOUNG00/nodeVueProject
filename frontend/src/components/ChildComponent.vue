<template>
    <input ref="username">
    <button type="button" @click="childFunc" ref="btn">click</button>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    // mounted() {
    //     this.$refs.username.focus();
    // },
    methods: {
        childFunc() {
            console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
        }
    }
}
</script>

<style>
</style>