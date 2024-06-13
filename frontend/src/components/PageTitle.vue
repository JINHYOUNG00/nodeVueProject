<template>
    <div>{{title}}</div>
    <div>{{menuno}}</div>
    <h3>store count: {{ this.$store.state.count }}</h3>
</template>

<script>
export default { 
    props: {
        'title' : {
        type: String,
        default: 'dasdsadasdasddd'
    },
        'menuno' : {
        type: Number,
        default: 1
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