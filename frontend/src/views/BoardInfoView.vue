<template>
    <div>상세보기</div>
    <table class="table">
        <colgroup>
            <col style="width: 6%;" />
            <col style="width: 6%;" />
            <col style="width: 6%;" />
            <col style="width: 18%;" />
            <col style="width: 6%;" />
            <col style="width: 6%;" />
        </colgroup>
        <tbody>
            <tr>
                <th>글번호</th>
                <td v-text="board.no"></td>
                <th>제목</th>
                <td v-text="board.title"></td>
                <th>작성자</th>
                <td v-text="board.writer"></td>
            </tr>
            <tr>
                <td colspan="6" v-text="board.content"></td>
            </tr>
            <tr>
                <button class="btn btn-primary">글쓰기</button>
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
            board: {}
        }
    },
    created() {
        this.no = this.$route.params.no;
        console.log(this.no)
        axios.get(`/api/board/`, this.no)
            .then(json => {
                this.board = json.data[0]
                console.log(json)
            })

    },
    methods: {

    }
}
</script>

<style></style>