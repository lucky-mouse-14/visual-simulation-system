<script setup>
import emitter from '@/utils/eventBus'

defineOptions({
  name: 'CompsPanel',
})

const getCompsGroupChildren = (groupValue, icon) => {
  const arr = []
  for(let i = 0; i < 20; i++) {
    arr.push({
      name: `${groupValue}--comp${i+1}`,
      value: `${groupValue}--comp${i+1}`,
      icon: icon,
      width: 100,
      height: 100,
    })
  }
  return arr
}
const compsGroup = ref([
  {
    name: '组件分组-A',
    value: 'a',
    children: getCompsGroupChildren('a', 'https://pic8.58cdn.com.cn/nowater/webim/big/n_v21f14da311aba406e8ea7069c98a683e5.png'),
  },
  {
    name: '组件分组-B',
    value: 'b',
    children: getCompsGroupChildren('b', 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png'),
  },
  {
    name: '组件分组-C',
    value: 'c',
    children: getCompsGroupChildren('c', 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v22f591629407b4ae3bbc938fa9978b749.gif'),
  },
  {
    name: '组件分组-D',
    value: 'd',
    children: getCompsGroupChildren('d', 'https://pic3.58cdn.com.cn/nowater/webim/big/n_v2d365e4497ce143f98d171269d5388be5.png'),
  },
  {
    name: '组件分组-E',
    value: 'e',
    children: getCompsGroupChildren('e', 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif'),
  },
])

console.log('aaaa', compsGroup)

function onMouseDown(e, nodeData) {
  emitter.emit('on-drag-start', { mouseEvent: e, nodeData })
}
</script>

<template>
  <div class="comps-panel">
    <n-scrollbar>
      <n-collapse arrow-placement="right" accordion class="p-10px">
        <n-collapse-item v-for="group in compsGroup" :key="group.value" :title="group.name" :name="group.value">
          <div class="flex flex-row flex-wrap justify-start items-start content-start">
            <div v-for="comp in group.children" :key="comp.value" class="comp-box" :style="`background-image: url(${comp.icon})`" @mousedown="onMouseDown($event, comp)" />
          </div>
        </n-collapse-item>
      </n-collapse>
    </n-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.comps-panel {
  background-color: #fff;
  border-right: 1px solid #000;
}
.comp-box {
  width: 33.3%;
  height: 0;
  padding-bottom: 33.3%;
  cursor: move;
  background-color: #fff;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 2px solid #eee;
  user-select: none;
}
</style>
