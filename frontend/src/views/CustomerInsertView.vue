<template>
    <div>등록</div>
    <div>
        <label class="form-label">id</label><input disabled class="form-control" v-model="customer.id">
        <label class="form-label">name</label><input class="form-control" v-model="customer.name">
        <label class="form-label">email</label><input class="form-control" v-model="customer.email">
        <label class="form-label">phone</label><input class="form-control" v-model="customer.phone">
        <label class="form-label">address</label><input class="form-control" v-model="customer.address">
    </div>
    <button v-if="customer.id == null" class="btn btn-primary" @click="addCusHandler">등록</button>
    <button v-if="customer.id != null" class="btn btn-primary" @click="modCusHandler">수정</button>
    <button v-if="customer.id != null" class="btn btn-primary" @click="delCusHandler">삭제</button>
    <button v-if="customer.id != null" class="btn btn-primary" @click="cleanHandler">초기화</button>
</template>

<script>
import axios from "axios";
export default {
    props : {
        customerdata : {
            type: Object
        }
    },
    watch : {
        customerdata(newQuestion, oldQuestion) {
            this.customer = {...newQuestion};
        }
    },
    data() {
        return {
            customer: {
                // id: 100,
                // namd: '',
                // email: '',
                // phone: '',
                // address: ''
                ...this.customerdata
            }
        }
    },
    created() {
        
    },
    methods: {
        addCusHandler : function(){
            let c = this.customer;
            console.log(c);
            delete c.id
            console.log(c);
            if(this.check()){
                axios.post('/api/customer', c)
                    .then(json => console.log(json.data))
                    // this.$router.push("/customer");
            }
        },
        modCusHandler : function(){
            if(this.check()){
                axios.put(`/api/customer/${this.customer.id}`, this.customer,this.customer.id)
                    .then(json => console.log(json.data))
            }
        },
        delCusHandler: function(){
            axios.delete(`/api/customer/${this.customer.id}`,this.customer.id)
                .then(json => console.log(json.data));
        },
        cleanHandler : function(){
            this.customer = ''
        },
        check(){
            if(!this.customer.name) {
                alert('이름입력');
                return false;
                } else if (!this.customer.email) {
                    alert('이메일 입력');
                    return false;
                } else if (!this.customer.phone) {
                    alert('연락처 입력');
                    return false;
                }else if (!this.customer.address) {
                    alert('주소 입력');
                    return false;
                }
                 
        }
    }
}
</script>

<style>
</style>