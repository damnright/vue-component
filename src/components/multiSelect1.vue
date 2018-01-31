<template>
  <div :class="[{'is-focus':isFocus},'wrapper']" tabindex="-1" @focus="wf" @blur="wb" v-if="ok">
    <div class="clickArea" @click="change"></div>
    <span class="label">
      {{value}}
    </span>
    <span :class="['suffix',{'is-reverse':isOpen}]"></span>
    <div :class="[{'menus-h':isOpen},'menus']" ref="ul1">
      <ul :class="[{'menu-h':isOpen},'menu']">
        <li :class="[{'item-h':isOpen},'item']" @click="check(index)"
            v-for="(item,index) in options" :key="index" ref="li1" :title="item[key1]">{{item[key1]}}
        </li>
      </ul>
    </div>
    <div class="menus2" :style="{left:left+'px'}" tabindex="-1" @blur="m2Focusout" v-show="isMenu2" ref="m2">
      <ul class="menu2" ref="ul2">
        <li class="item2 tip">{{ tip }}</li>
        <li v-for="(obj,index) in list" :key="index" ref="li2">
          <div class="item3 title">{{Object.keys(obj)[0]}}</div>
          <div class="item3" v-for="(item,i) in Object.values(obj)[0]" :key="i" :ref="level0+''+item" :title="item"
               @click="click(item)">{{item}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
  li {
    display: block;
  }

  ::-webkit-scrollbar{
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.16);
    border-radius: 4px;
  }



  .wrapper {
    font-family: HiraginoSansGB-W3;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0px;
    color: #4e4e4e;
    outline: none;
    height: 32px;
    width: 152px;
    position: relative;
    display: inline-block;
    border-radius: 3px;
    border: solid 1px #aaa;
    cursor: pointer;
    background: #fff;
    transition: all .2s;
    box-sizing: border-box;
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
    border-color: #2ab6eb;
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
    right: 16px;
    top: 12px;
    height: 8px;
    width: 8px;
    border-top: 2px solid #bfcbd9;
    border-right: 2px solid #bfcbd9;
    transform: rotate(135deg);
    color: #c0c4cc;
    pointer-events: none;
    overflow: hidden;
    transform-origin: 66% 36%;
    transition: all .3s;
  }

  .is-reverse {
    transform: rotate(-45deg);
  }

  .menus {
    overflow: hidden;
    transform-origin: center top 0px;
    z-index: 2000;
    transition: all .3s;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 5px;
    height: 0;
    width: 158px;
    background: #fff;
    white-space: nowrap;
    opacity: 0;
    box-sizing: border-box;
    .menu {
      transform-origin: center top 0px;
      transition: height, opacity, padding 300ms;
      display: inline-block;
      vertical-align: top;
      width: 146px;
      height: 0;
      box-sizing: border-box;
      background: #fff;
      margin: 0;
      padding: 0;
    }
  }

  .menus-h {
    top: 30px;
    opacity: 1;
    height: 274px;
    background-color: #ffffff;
    box-shadow: 0px 3px 6px 0px rgba(0, 6, 2, 0.15);
    border-radius: 2px;
    border: 1px solid #d5d5d5;
    overflow-y: scroll;
    overflow-x: hidden;
    .menu-h {
      position: relative;
      height: 272px;
    }
  }

  .item {
    outline: none;
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    height: 0;
    line-height: 30px;
    box-sizing: border-box;
    cursor: pointer;
    width: 138px;
    text-align: left;
    text-overflow: ellipsis;
    pointer-events: none;
  }

  .item-h {
    outline: none;
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    cursor: pointer;
    pointer-events: auto;
    &:hover {
      background: #F9F9F9;
    }
  }

  .menus2 {
    z-index: 2001;
    position: absolute;
    top: 30px;
    left: 0;
    width: 173px;
    padding: 0 5px;
    background: #fff;
    white-space: nowrap;
    height: 274px;
    color: #4e4e4e;
    outline: none;
    box-shadow: 0px 3px 6px 0px rgba(0, 6, 2, 0.15);
    border-radius: 2px;
    border: 1px solid #d5d5d5;
    border-left: 0;
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .menu2 {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background: #fff;
    width: 162px;
    position: relative;
    opacity: 1;
    height: 272px;
    border-right: 1px solid #e4e7ed;
    margin: 0;
    padding: 0;
  }

  .item2 {
    width: 154px;
    outline: none;
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    pointer-events: none;
    cursor: none;
    font-family: HiraginoSansGB-W6;
    font-size: 12px;
    letter-spacing: 0px;
    color: #c6c6c6;
  }

  .title {
    background: #efefef;
    pointer-events: none;
    cursor: none;
  }

  .item3 {
    width: 154px;
    padding: 0 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background: #F9F9F9;
    }
  }
</style>

<script>
  import pinyin from 'pinyin'

  export default {
    name: 'multiSelect',
    props: {
      key1: String,
      key2: String,
      param1: String,
      param2: String,
      num: {
        //多选数量
        type: Number,
        default: 2
      },
      options: {
        type: Array
      }
    },
    model: {
      prop: 'value',
      event: 'change'
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
        state: true
      }
    },
    created() {
      // 点击其他不在的区域触发事件
      document.addEventListener('click', (e) => {
        if (!this.$el.contains(e.target)) {
          this.isOpen = false
        }
      })
    },
    mounted() {
      this.level1 = [this.level1First]
      this.styleBlue(false, this.level0)
      this.ok && this.$emit('change', {[this.param1]: this.options[this.level0][this.key1], [this.param2]: this.level1.join(',')})
    },
    computed: {
      tip() {
        return `按字母顺序(最多选${this.num}个)`
      },
      ok() {
        return (this.options instanceof Array) && (this.options.length > 0) && (this.options[0][this.key1].length > 0) && (this.options[0][this.key2].length > 0)
      },
      value() {
        return '' + this.options[this.level0][this.key1]
      },
      list() {
        let init = this.options[this.level0][this.key2]
        let initA = init.map(x => this.py(x))
        let result = {'other': []}
        let temp = []
        // 归类
        for (let [index, letter] of initA.entries()) {
          if (letter.charCodeAt(0) < 65 || letter.charCodeAt(0) > 90) {
            result['other'].push(init[index])
          } else {
            if (result.hasOwnProperty(letter)) {
              result[letter].push(init[index])
            } else {
              result[letter] = []
              result[letter].push(init[index])
            }
          }
        }
        if(!result['other'].length>0){
          delete result['other']
        }
        // 数组化
        for (let [key, value] of Object.entries(result)) {
          let o = {}
          o[key] = value
          temp.push(o)
        }
        // 排序
        temp.sort((a, b) => {
          if (Object.keys(a)[0].charCodeAt(0) < Object.keys(b)[0].charCodeAt(0)) {
            return -1
          } else {
            return 1
          }
        })
        result = temp
        this.level1First = Object.values(result[0])[0][0]
        return result
      }
    },
    watch: {
      isOpen(now) {
        if (!now) {
          let results = {[this.param1]: this.options[this.level0][this.key1], [this.param2]: this.level1.join(',')}
          this.$emit('change', results)
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
        return pinyin(text, {
          style: pinyin.STYLE_FIRST_LETTER
        })[0][0][0].toLocaleUpperCase()
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
        let index = this.level1.indexOf(app)
        let length = this.level1.length
        if (index > -1) {
          this.level1.splice(index, 1)
        } else {
          if (length < this.num) {
            this.level1.push(app)
          }
        }
      },
      styleBlue(child, i) {
        if (!child) {
          this.$refs.li1[i].setAttribute('style', 'color: #409eff;')
        } else {
          i.forEach((item) => {
            let key = '' + this.level0 + item
            this.$refs[key] && this.$refs[key][0].setAttribute('style', 'color: #409eff;')
          })
        }
      },
      styleBack(child, i) {
        if (!child) {
          this.$refs.li1[i].removeAttribute('style')
        } else {
          i.forEach((item) => {
            let key = '' + this.level0 + item
            this.$refs[key] && this.$refs[key][0].removeAttribute('style')
          })
        }
      }
    }
  }
</script>

