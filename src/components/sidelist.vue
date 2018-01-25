<template>
  <div :class="[{'is-focus':isFocus},'wrapper']" tabindex="-1" @focus="wf" @blur="wb">
    <div class="clickArea" @click="change"></div>
    <span class="label">
      {{value}}
    </span>
    <span class="suffix"><i :class="[{'is-reverse':isOpen},'errow-down','material-icons']">&#xE313;</i></span>

    <div :class="[{'menus-h':isOpen},'menus']">
      <div class="triangle"></div>
      <ul :class="[{'menu-h':isOpen},'menu']" ref="ul1">
        <li :class="[{'item-h':isOpen},'item']" @click="check(index)"
            v-for="(item,index) in options" :key="index" ref="li1">{{item.serv}}
        </li>
      </ul>
    </div>
    <div class="menus2" :style="{left:left+'px'}" tabindex="-1" @blur="m2Focusout" v-show="isMenu2" ref="m2">
      <ul class="menu2" ref="ul2">
        <li class="item2 tip">按字母顺序（最多选择3个）</li>
        <li v-for="(obj,index) in list" :key="index" ref="li2">
          <div class="item3 title">{{Object.keys(obj)[0]}}</div>
          <div class="item3" v-for="(item,i) in Object.values(obj)[0]" :key="i" :ref="level0+''+item"
               @click="click(item)">{{item}}
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
  .wrapper {
    outline: none;
    height: 40px;
    width: 222px;
    position: relative;
    display: inline-block;
    font-size: 14px;
    line-height: 40px;
    border: 1px solid #e4e7ed;
    border-radius: 6px;
    cursor: pointer;
    color: #292b2c;
    background: #fff;
    transition: all .2s;
  }

  .clickArea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 3000;
  }

  .is-focus {
    border-color: #409eff;
  }

  .label {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 30px 0 15px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .suffix {
    position: absolute;
    top: 8px;
    bottom: 8px;
    right: 5px;
    text-align: center;
    color: #c0c4cc;
    pointer-events: none;
    overflow: hidden;
    .errow-down {
      transform-origin: 50% 44%;
      transition: all .3s;
    }
    .is-reverse {
      transform: rotate(180deg);
    }

  }

  .menus {
    transform-origin: center top 0px;
    z-index: 2000;
    transition: all .3s;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 0;
    margin-bottom: 5px;
    height: 0;
    min-width: 160px;
    background: #fff;
    white-space: nowrap;
    opacity: 0;
    .menu {
      transform-origin: center top 0px;
      transition: height, opacity, padding 300ms;
      display: inline-block;
      vertical-align: top;
      min-width: 160px;
      overflow: hidden;
      height: 0;
      border-right: 0 solid #e4e7ed;
      box-sizing: border-box;
      background: #fff;
      margin: 0;
      padding: 0;
    }
  }

  .menus-h {
    top: 42px;
    height: 182px;
    margin-top: 12px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 2px;
    opacity: 1;
    .triangle {
      position: absolute;
      left: 100px;
      top: -6px;
      margin-right: 3px;
      width: 0;
      height: 0;
      border-width: 6px;
      border-color: transparent;
      border-style: solid;
      border-top-width: 0;
      border-bottom-color: #ebeef5;
      filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
      transform: translateX(-400%);
      &::after {
        content: " ";
        position: absolute;
        top: 1px;
        margin-left: -6px;
        display: block;
        width: 0;
        height: 0;
        border-width: 6px;
        border-color: transparent;
        border-style: solid;
        border-top-width: 0;
        border-bottom-color: #fff;
      }
    }
    .menu-h {
      position: relative;
      overflow: auto;
      height: 182px;
      border-right: 1px solid #e4e7ed;
      padding: 6px 0;
    }
  }

  .item {
    outline: none;
    padding: 8px 30px 8px 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 0;
    line-height: 1.5;
    box-sizing: border-box;
    cursor: pointer;
    max-width: 300px;
    pointer-events: none;
  }

  .item-h {
    outline: none;
    padding: 8px 30px 8px 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 34px;
    line-height: 1.5;
    box-sizing: border-box;
    cursor: pointer;
    pointer-events: auto;
    &::after {
      content: '';
      position: absolute;
      right: 15px;
      top: 14px;
      height: 6px;
      width: 6px;
      border-top: 2px solid #bfcbd9;
      border-right: 2px solid #bfcbd9;
      transform: rotate(45deg)
    }
    &:hover {
      background: #f5f7fa;
    }
  }

  .menus2 {
    z-index: 2001;
    position: absolute;
    top: 42px;
    left: 0;
    margin-bottom: 5px;
    min-width: 120px;
    background: #fff;
    white-space: nowrap;
    height: 182px;
    margin-top: 12px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 2px;
    color: #292b2c;
    outline: none;
  }

  .menu2 {
    display: inline-block;
    vertical-align: top;

    box-sizing: border-box;
    background: #fff;
    margin: 0;

    position: relative;
    opacity: 1;
    overflow: auto;
    height: 182px;
    border-right: 1px solid #e4e7ed;
    padding-bottom: 6px;
  }

  .item2 {
    max-width: 210px;
    outline: none;
    padding: 8px 6px 8px 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
    line-height: 1.5;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background: #f5f7fa;
    }
  }

  .tip {
    border-top: 1px solid #EBEDF0;
    pointer-events: none;
    cursor: none;
  }

  .title {
    background: #D8D8D8;
    pointer-events: none;
    color: #aaaaa9;
    cursor: none;
  }

  .item3 {
    max-width: 210px;
    padding: 8px 6px 8px 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;
    line-height: 1.5;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background: #f5f7fa;
    }
  }
</style>

<script>
  const pinyin = require("pinyin");

  export default {
    name: 'cascader',
    props: {
      options: {
        type: Array,
        default: function () {
          return [
            {
              'serv': 'IM',
              'child': [
                'QQ', '微信', '诸葛村夫', 'asdf', '哈哈哈哈哈哈哈哈隔', '我滴个龟龟', '3xx', '~e$'
              ]
            },
            {
              'serv': '546456456',
              'child': [
                'QQ', '微信', '诸葛村夫', 'aaa', 'bbb', 'ccc'
              ]
            },
            {
              'serv': 'IM',
              'child': [
                'QQ', '微信', '诸葛村夫'
              ]
            },
            {
              'serv': 'IM',
              'child': [
                'QQ', '微信', '诸葛村夫'
              ]
            },
            {
              'serv': 'IM',
              'child': [
                'QQ', '微信', '诸葛村夫'
              ]
            },
            {
              'serv': 'IM',
              'child': [
                'QQ', '微信', '诸葛村夫'
              ]
            }
          ]
        }
      }
    },
    data() {
      return {
        isFocus: false,
        isOpen: false,
        isCheck: false,
        isMenu2: false,
        level0: 0,
        level1: [],
        level1Old: [],
        level1First: '',
        left: 0,
        state: true,
      }
    },
    created(){
      // 点击其他不在的区域触发事件
      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)){
          this.isOpen = false;
        }
      })
    },
    mounted() {
      this.level1 = [this.level1First]
      this.styleBlue(false, this.level0)
    },
    computed: {
      value() {
        let temp
        temp = '' + this.options[this.level0].serv
        if (this.level1.length === 1) {
          temp += '/' + this.level1[0]
        }
        else if (this.level1.length === 2) {
          temp += '/' + this.level1[0] + ',' + this.level1[1]
        }

        return temp
      },
      list() {
        let init = this.options[this.level0].child
        let initA = init.map(x => this.py(x))
        let result = {'other': []}
        let temp = []
        //归类
        for (let [index, letter] of initA.entries()) {
          if (letter.charCodeAt(0) < 65 || letter.charCodeAt(0) > 90) {
            result['other'].push(init[index])
          }
          else {
            if (result.hasOwnProperty(letter)) {
              result[letter].push(init[index])
            }
            else {
              result[letter] = []
              result[letter].push(init[index])
            }
          }
        }
        //数组化
        for (let [key, value] of Object.entries(result)) {
          let o = {}
          o[key] = value
          temp.push(o)
        }
        //排序
        temp.sort((a, b) => {
          if (Object.keys(a)[0].charCodeAt(0) < Object.keys(b)[0].charCodeAt(0)) {
            return -1
          }
          else {
            return 1
          }
        })
        result = temp
        this.level1First = Object.values(result[0])[0][0]
        // console.log(this.level1First)
        return result
      }
    },
    watch: {
      isOpen(now){
        if(!now){
          let results={serv:this.options[this.level0].serv,app:this.level1.join(',')}
          this.$emit('change',results)
          // console.log(results.serv+results.app)
        }
      },
      level0(now, old) {
        this.$nextTick(() => {
          this.styleBack(false, old)
          this.styleBlue(false, now)
          this.level1Old = []
          this.level1 = [this.level1First]
        })
      },
      level1(now) {
        if (this.state) {
          this.$nextTick(() => {
            this.styleBack(true, this.level1Old)
            this.styleBlue(true, now)
          })
        }

      }
    },
    methods: {
      py(text) {
        let letter = pinyin(text, {
          style: pinyin.STYLE_FIRST_LETTER
        })[0][0][0].toLocaleUpperCase()
        return letter
      },
      wf() {
        this.isFocus = true
      },
      wb() {
        this.isFocus = false
      },
      change() {
        this.isOpen = !this.isOpen
      },
      out() {
        this.isOpen = false
      },
      m2Focusout() {
        this.isMenu2 = false
      },
      check(index) {
        this.isMenu2 = true
        this.left = this.$refs.ul1.getBoundingClientRect().width
        if (this.level0 !== index) {
          this.state = false
          this.level1Old = JSON.parse(JSON.stringify(this.level1))
          this.styleBack(true, this.level1Old)
          this.$nextTick(() => {
            this.level1 = []
            this.level0 = index
            this.state = true
            this.$refs.m2.focus()
          })
        }
        this.$nextTick(() => {
          this.$refs.m2.focus()
        })
      },
      click(app) {

        this.level1Old = JSON.parse(JSON.stringify(this.level1))
        // console.log('old:' + this.level1Old + ' ' + 'new:' + this.level1)

        let index = this.level1.indexOf(app)
        let length = this.level1.length
        if (index > -1) {
          this.level1.splice(index, 1)
        }
        else {
          if (length < 2) {
            this.level1.push(app)
          }
        }
        // console.log('old:' + this.level1Old + ' ' + 'new:' + this.level1)
      },
      styleBlue(child, i) {
        if (!child) {
          this.$refs.li1[i].setAttribute('style', 'color: #409eff;')
        }
        else {
          i.forEach((item) => {
            let key = '' + this.level0 + item
            this.$refs[key] && this.$refs[key][0].setAttribute('style', 'color: #409eff;')
          })
        }
      },
      styleBack(child, i) {
        if (!child) {
          this.$refs.li1[i].removeAttribute('style')
        }
        else {
          i.forEach((item) => {
            let key = '' + this.level0 + item
            this.$refs[key] && this.$refs[key][0].removeAttribute('style')
          })
        }
      }
    }
  }
</script>

