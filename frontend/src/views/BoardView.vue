<template>
    <div>board</div>
    <select v-model="pageUnit" @change="goPage(1)">
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
    </select>
    <table class="table splite-table table-hover">
        <thead>
            <tr>
                <th>no</th>
                <th>title</th>
                <th>writer</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(b, i) in boards" @click="getBoardHandler(b.no)">
                <td v-text="b.no"></td>
                <td v-text="b.title"></td>
                <td v-text="b.writer"></td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary" @click="insertBoardHandler">글쓰기</button>
    <PagingComponent v-bind="page" @go-page="goPage"></PagingComponent>
</template>

<script>
import axios from 'axios'
import PagingComponent from '@/components/PagingComponent.vue'
import PageMixin from '../mixin.js'
export default {
    components: { PagingComponent },
    mixins: [PageMixin],
    data() {
        return {
            boards: [],
            page: {},
            pageUnit: 10
        }
    },
    created() {
        this.goPage(1);
    },
    methods: {
        goPage: function (page) {
            // fetch
            const url = `/api/board?page=${page}&pageUnit=${this.pageUnit}`;
            axios.get(url)
                .then(result => {
                    this.boards = result.data.list
                    this.page = this.pageCalc(page, result.data.count, 5, this.pageUnit);
                })
            // console.log("ddd",result.data.count);
        },
        getBoardHandler(no) {
            this.$router.push({ name: 'boardGet', params: { no } })
        },
        insertBoardHandler() {
            this.$router.push('boardInsert');
        }
    }
}
</script>

<style></style>