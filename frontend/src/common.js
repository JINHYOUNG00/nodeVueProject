import { reactive, computed, toRefs, ref, onMounted, onUnmounted } from "vue";
function plusCalculator() {
    let state = reactive(
        {
            num1: 20,
            num2: 20,
            result: computed(() => {
                return state.num1 + state.num2
            })
        }
    );
    return toRefs(state);
}

function useMouse() {
    const x = ref(0)
    const y = ref(0)
    function update(event){
        x.value = event.pageX
        y.value = event.pageY
    }
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
    return {x,y};
}
export {plusCalculator, useMouse};