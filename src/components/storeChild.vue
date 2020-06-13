<template>
    <div>
        子コンポーネント：{{$store.state.count}}
        <div>
            Getter:{{countGetter}}
        </div>
        <div>
            <button @click="total">1秒遅れてカウントします</button>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        countGetter(){
            return this.$store.getters.countGetter;
        },
    },
    methods:{
        total(){
             this.$store.dispatch("total",1);
        }
    }
}
</script>