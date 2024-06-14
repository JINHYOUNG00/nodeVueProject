<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageTitle title="컴포넌트 사용 예제" :menuno="10"></PageTitle>
    <MenuBar :menu="['신발','상의','하의']"></MenuBar>
    <HelloWorld :user/>
    <hr>
    <!-- 부모가 자식 컴포넌트 이벤트 직접 발생 -->
    <ChildComponent ref="child_component"></ChildComponent>

    <!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트/데이터 전달 -->
    <ChildComponent4 @send-message="sendMessage"></ChildComponent4>

    
    <!-- 이름 있는 slot -->
    <SlotModalLayout>
      <template v-slot:header>header</template>
      <template v-slot:footer><button>푸터터터</button></template>
      디폴트
      </SlotModalLayout>
      
      <ProvideInjectChild></ProvideInjectChild>
    <!-- <FooterTitle>카피라이트</FooterTitle> -->
     <PagingComponent v-bind="page" @go-page="goPage"></PagingComponent>
    
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import FooterTitle from '@/components/FooterTitle.vue'
import ChildComponent from '@/components/ChildComponent.vue'
import ChildComponent4 from '@/components/ChildComponent4.vue'
import SlotModalLayout from '@/components/SlotModalLayout.vue'
import ProvideInjectChild from '@/components/ProvideInjectChild.vue'
import PagingComponent from '@/components/PagingComponent.vue'
// import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle, MenuBar, ChildComponent, ChildComponent4, SlotModalLayout, ProvideInjectChild, PagingComponent
  },
  data(){
    return {
      user:
        {username: 'choi', msg: 'hi'},
      page:
        {}
    }
  },
  created(){
    // fetch => total, currentPage
    this.page = this.pageCalc(6, 124, 5, 10);
  },
  provide(){
    return {
      itemlength: 4
    }
  },
  methods: {
    goPage: function(page){
      // fetch
      console.log('parent event', page)
    },
    sendMessage : function(data){
      console.log(data);
    },
    increment(){
      this.$store.commit('increment');
    },
    pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
            let firstPage = 1;
            let lastPage =
                Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
            let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
            let endIdx = startIdx + pageSize - 1;
            if (endIdx > lastPage) {
                endIdx = lastPage;
            }
            console.log(firstPage, lastPage, startIdx, endIdx);
            return { currentPage, firstPage, lastPage, startIdx, endIdx };
        }
  },
  computed : {
    count() {
      return this.$store.state.count;
    }
  },
  mounted(){
    // 자식 컴포넌트 이벤트 발생
    // this.$refs.child_component.$refs.btn.click();
    // 자식 컴포넌트 함수 직접호출
    this.$refs.child_component.childFunc();
    this.$refs.child_component.$refs.username.value = 'aaaa';
    this.$refs.child_component.$refs.username.focus();
  }
}
</script>
