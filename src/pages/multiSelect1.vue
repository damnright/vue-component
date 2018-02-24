<template>
  <div class="wrapper">
    <p class="head">multiSelect1</p>
    <div style="background: #fff;height: 42px;font-size: 14px;margin-left:60px;">
      <multiSelect1 v-if="ok" :options="options" :num="num" :key1="key1" :key2="key2" :param1="p1" :param2="p2" v-model="value" @change="change"></multiSelect1>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    font: 24px PingFangSC-Regular, sans-serif;
    text-align: left;
  }

  .head {
    font-size: 28px;
    color: #B700FF;
    text-align: center;
  }

  .tip {
    text-align: left;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .tipTitle{
    color: #FF9103;
  }

  .tip li{
    display: inline-block;
    margin-right: 30px;
  }
</style>

<script>
  import multiSelect1 from '../components/multiSelect1'

  export default {
    components: {
      multiSelect1
    },
    data(){
      return {
        num:3,
        options:[],
        value:'',
        key1:'serv',
        key2:'child',
        p1:'serv',
        p2:'app'
      }
    },
    computed:{
      ok(){
        return (this.options instanceof Array) && (this.options.length > 0) && (this.options[0][this.key1].length > 0)
      }
    },
    methods:{
      change(){
        // console.log(this.value)
      }
    },
    mounted(){
      setTimeout(()=>{
        this.options=[
          {serv:'闷声大发财闷声大发财闷声大发财闷声大发财',child:[]},
          {serv:'Calvin Harris',child:[]},
          {serv:'Calvin Harris',child:['我滴个龟龟']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
          {serv:'Calvin Harris',child:['你们这样子啊，是不行的！','黑框长者','你们给我搞的这本东西，excited!']},
        ]
      },0)
    }
  };
</script>

