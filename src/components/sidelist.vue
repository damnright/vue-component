<template>
  <div :class="['btn',{btnHover:isHover}]" @mouseenter="isHover=true" @mouseleave="btnLeave" ref="btn">
    <div class="flex-center">
      <i class="material-icons" style="padding-top: 3px;">dehaze</i>{{'&nbsp' + menuName}}
    </div>
    <transition name="slide" @before-enter="disable(0)" @after-enter="enable(0)"
                @before-leave="disable(0)" @after-leave="disable(0)">
      <div class="sideLeft" :style="sideLc" ref="sideLeft" v-if="isHover">
        <ul :class="['sideLeftList',{prevent:state0}]" @mouseenter="mouseover(1)" @mouseleave="childLeave(1)">
          <li :class="['sideItem',{blue:c1===index}]" v-for="(item,index) in sideList" :key="index"
              @mouseenter="mouseoverItem(1,index)">{{item.text}}<span
            class="icon" v-if="item.child!==undefined"><i class="material-icons"
                                                          style="font-size: 30px;padding-top: 6px;">keyboard_arrow_right</i></span>
          </li>
          <transition name="child1" @before-enter="disable(1)" @after-enter="enable(1)"
                      @before-leave="disable(1)" @after-leave="disable(1)">
            <div class="child1" v-if="isHover1&&c1>-1&&sideList[c1].child!==undefined">
              <ul :class="['child1List',{prevent:state1}]" @mouseenter="mouseover(2)" @mouseleave="childLeave(2)">
                <li :class="['sideItem',{blue:c2===index1}]"
                    v-for="(item1,index1) in sideList[c1].child"
                    :key="index1" @mouseenter="mouseoverItem(2,index1)">{{item1.text}}<span class="icon"
                                                                                            v-if="item1.child!==undefined"><i
                  class="material-icons" style="font-size: 30px;padding-top: 6px;">keyboard_arrow_right</i></span>
                </li>
                <transition name="child2" @before-enter="disable(2)" @after-enter="enable(2)"
                            @before-leave="disable(2)" @after-leave="disable(2)">
                  <div class="child2"
                       v-if="isHover2&&c2>-1&&sideList[c1].child!==undefined&&sideList[c1].child[c2].child!==undefined">
                    <ul :class="['child2List',{prevent:state2}]" @mouseenter="mouseover(3)"
                        @mouseleave="childLeave(3)">
                      <li :class="['sideItem',{blue:c3===index2}]"
                          v-for="(item2,index2) in sideList[c1].child[c2].child"
                          :key="index2" @mouseenter="c3=index2">{{item2.text}}
                      </li>
                    </ul>
                    <div class="sideItem sideItemExtra">
                      {{sideList[c1].child !== undefined && sideList[c1].child[c2].childExtra !== undefined ? sideList[c1].child[c2].childExtra : ''}}
                    </div>
                  </div>
                </transition>
                <div class="child2Back" v-if="isHover2"></div>
              </ul>
              <div class="sideItem sideItemExtra">
                {{sideList[c1].childExtra !== undefined ? sideList[c1].childExtra : ''}}
              </div>
            </div>
          </transition>
          <div class="child1Back" v-if="isHover1"></div>
        </ul>
        <div class="sideItem sideItemExtra">yeah~take it boy</div>
        <div class="sideItem sideItemLast">有问题联系110</div>
      </div>
    </transition>
    <div class="sideLeftBack" v-if="isHover"></div>
  </div>
</template>

<style scoped>
  .flex-center {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .btn {
    text-align: left;
    height: 100%;
    color: #fff;
    display: inline-block;
    position: relative;
  }

  .btnHover {
    background-color: #05E4FF;
  }

  .sideLeftBack {
    position: fixed;
    width: 301px;
    height: 100%;
    left: 0;
    opacity: 0;
    z-index: 9;
  }

  .sideLeft {
    position: fixed;
    background-color: #242524;
    width: 300px;
    height: 100%;
    left: 0;
    padding: 10px 0;
    border-right: 1px solid #515052;
    font-size: 16px;
    color: #fff;
    z-index: 10;
  }

  .child1Back {
    position: absolute;
    width: 301px;
    height: 100%;
    left: 301px;
    top: 0;
    opacity: 0;
    z-index: 8;
  }

  .child1 {
    position: absolute;
    background-color: #242524;
    width: 300px;
    height: 100%;
    left: 301px;
    top: 0;
    padding: 10px 0;
    border-right: 1px solid #515052;
    z-index: 9;
  }

  .child2Back {
    position: absolute;
    width: 301px;
    height: 100%;
    left: 301px;
    top: 0;
    opacity: 0;
    z-index: 7;
  }

  .child2 {
    position: absolute;
    background-color: #242524;
    width: 300px;
    height: 100%;
    left: 301px;
    top: 0;
    padding: 10px 0;
    border-right: 1px solid #515052;
    z-index: 8;
  }

  .sideLeftList, .child1List, child2List {
    z-index: 3;
    border-bottom: 1px solid #515052;
  }

  .sideItem {
    height: 30px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sideItemExtra:hover {
    color: #05E4FF;
  }

  .sideItemLast {
    position: fixed;
    bottom: 20px;
    left: 0;
  }

  .blue {
    color: #05E4FF;
  }

  .prevent {
    pointer-events: none;
  }

  .slide-enter-active, .slide-leave-active, .child1-enter-active, .child1-leave-active, .child2-enter-active, .child2-leave-active {
    transition: all 0.2s ease-out;
    pointer-events: none;
  }

  .slide-enter, .slide-leave-active, .child1-enter, .child1-leave-active, .child2-enter, .child2-leave-active {
    opacity: 0;
    transform: translateX(-300px);
    pointer-events: none;
  }

</style>

<script>

  export default {
    props: {
      menuName: {
        type: String,
        default: '菜单名',
      },
      sideList: {
        type: Array,
        default: function () {
          return [
            {
              text: '啊啊啊1',
              child: [{text: '啊啊啊啊11', child: [{text: '啊啊啊啊啊111'}, {text: '啊啊啊啊啊112'}], childExtra: '韩红听了想打人',}, {
                text: '啊啊啊啊12',
                child: [{text: '啊啊啊啊啊121'}]
              }, {text: '啊啊啊啊13'}],
              childExtra: '你妹的',
            },
            {
              text: '啊啊啊2',
              child: [{text: '啊啊啊啊21'}],
              childExtra: '嘟嘟',
            },
            {
              text: '啊啊啊3',
            },
            {
              text: '啊啊啊4',
              child: [{text: '啊啊啊啊41', child: [{text: '啊啊啊啊啊411'}]}],
              childExtra: '诸葛村夫',
            },
            {
              text: '啊啊啊5',
            },
            {
              text: '啊啊啊6',
              child: [{text: '啊啊啊啊61'}]
            }
          ]
        }
      },
    },
    data(){
      return {
        isHover: false,
        state0: false,
        pre: 0,
        isHover1: false,
        c1: -1,
        state1: false,
        isHover2: false,
        c2: -1,
        state2: false,
        isHover3: false,
        c3: -1,
        sideLc: {
          top: '0',
        },
      }
    },
    methods: {
      btnLeave(){
        this.c1 = this.c2 = this.c3 = -1;
        setTimeout(() => {
          this.isHover = false;
        }, 360)
      },
      childLeave(i){
        this['isHover' + i] = false;
        this['c' + i] = -1;
      },
      mouseover(i){
        this['isHover' + i] = true;
      },
      mouseoverItem(i, index){
        this['c' + i] = index;
      },
      disable(i){
        this['state' + i] = true;
      },
      enable(i){
        this['state' + i] = false;
      },
    },
    mounted(){
      let rect=this.$refs.btn.getBoundingClientRect();
      this.sideLc.top=rect.top+rect.height;
      console.log(this.sideLc.top);
    },
  };

</script>

