<template>
    <ul>
        <li v-for="(a, i) in menu" v-text="a"></li>
    </ul>
</template>

<script>
export default { 
    props:{
        'menu': {
            type: Object,
        }
    },
    data() { 
        return {
        }
    },
    created() {
        
    },
    methods: {
        
    }
}
</script>

<style>
</style>