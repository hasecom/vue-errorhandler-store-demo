<template>
<div id="app">
    <errorHandler />
    <div>
        現在のカウント数:{{$store.state.count}}
        <p>
            <button @click="increment">カウント増えます</button>
        </p>
        <div>
          <storeChild />
        </div>
    </div>
</div>
</template>

<script>
import errorHandler from './components/errorHandler';
import storeChild from './components/storeChild';
export default {
    name: 'App',
    components: {
        errorHandler,
        storeChild
    },
    created() {
        console.log(this.$store.state.count)
    },
    methods:{
      increment(){
        this.$store.commit('increment');
      }
    },
    computed: {},
    errorCaptured() {
        console.log("親コンポーネントからのお知らせです。「エラーじゃね？」")
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
