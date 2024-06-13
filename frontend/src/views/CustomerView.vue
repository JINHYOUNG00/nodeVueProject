<template>
    <div>고객관리</div>
    <div class="row">
        <div class="col-md-12 col-lg-7 border p-3">
            <select v-model="pageUnit" @change="goPage(1)">
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select>
        <table class="table splite-table table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(c, i) in customers" @click="updateFormHandler(c)">
                    <td v-text="c.id"></td>
                    <td v-text="c.name"></td>
                    <td v-text="c.email"></td>
                    <td v-text="c.phone"></td>
                    <td v-text="c.address"></td>
                </tr>
            </tbody>
        </table>
        <PagingComponent v-bind="page" @go-page="goPage"></PagingComponent>
    
        </div>
        <div class="col-md-12 col-lg-5 border p-3">
            <CustomerInsertView :customer="customerdata" ref="updateCForm"></CustomerInsertView>
        </div>
    </div>

    
</template>

<script>
import PagingComponent from '@/components/PagingComponent.vue'
import CustomerInsertView from './CustomerInsertView.vue';
import PageMixin from '../mixin.js'
import axios from "axios";
export default {
    components: {PagingComponent, CustomerInsertView},
    mixins: [PageMixin],
    data() {
        return {
            customers: [],
            customer: {},
            page:{},
            pageUnit:10
        }
    },
    created() {
        this.goPage(1);
    },
    
    methods: {
        goPage: async function(page){
            // fetch
            const url = `/api/customer?page=${page}&pageUnit=${this.pageUnit}`;
            let result = await axios.get(url)
            this.customers = result.data.list;
            // console.log("ddd",result.data.count);
            this.page = this.pageCalc(page, result.data.count,5 ,this.pageUnit);
        },
        updateFormHandler : function(customer){
            this.customer = this.customer;
            this.$refs.updateCForm.customer = {...customer};
        }
        
        
    }
}
</script>

<style>
</style>