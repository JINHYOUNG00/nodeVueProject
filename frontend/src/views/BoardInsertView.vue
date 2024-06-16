<template>
    <div>글등록</div>
    <label class="form-label">제목</label><input class="form-control" v-model="board.title">
    <label class="form-label">내용</label>
    <textarea class="form-control" v-model="board.content"></textarea>
    <button type="button" class="btn btn-primary" @click="addBoardHandler">글등록</button>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            board: {}
        }
    },
    created() {
        this.board.writer = this.$store.state.user.userid;
        console.log(this.board.writer);
    },
    computed: {
    },
    methods: {
        addBoardHandler() {
            console.log(this.board);
            axios.post('/api/board', this.board)
                .then(json => {
                    console.log(json.data);
                    this.$router.push('board');
                })
        }
    }
}
</script>

<style></style>