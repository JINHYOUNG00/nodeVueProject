<template>
    <div>boardInfo</div>
    <table class="table">
        <thead>
            <tr>
                <th>no</th>
                <th>title</th>
                <th>writer</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td v-text="board.no"></td>
                <td v-text="board.title"></td>
                <td v-text="board.writer"></td>
            </tr>
            <tr>
                <td colspan="3"v-text="board.content"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios'
export default { 
    data() { 
        return {
            no: 0,
            board : {}
        }
    },
    created() {
        this.no = this.$route.query.no;
        console.log(this.no)
        axios.get('/api/board/'+ this.no)
            .then(json => {
                this.board = json.data[0]
                console.log(json)
    })

    },
    methods: {
        
    }
}
</script>

<style>
</style>