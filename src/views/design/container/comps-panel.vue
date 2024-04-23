<script setup>
import emitter from '@/utils/eventBus'

defineOptions({
  name: 'CompsPanel',
})

const comps = ref([
  { name: 'Comp1', value: 'Comp1', icon: 'https://pic8.58cdn.com.cn/nowater/webim/big/n_v21f14da311aba406e8ea7069c98a683e5.png', width: 100, height: 100, },
  { name: 'Comp2', value: 'Comp2', icon: 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png', width: 100, height: 100, },
  { name: 'Comp3', value: 'Comp3', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v22f591629407b4ae3bbc938fa9978b749.gif', width: 100, height: 100, },
  { name: 'Comp4', value: 'Comp4', icon: 'https://pic3.58cdn.com.cn/nowater/webim/big/n_v2d365e4497ce143f98d171269d5388be5.png', width: 100, height: 100, },
  { name: 'Comp5', value: 'Comp5', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp6', value: 'Comp6', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp7', value: 'Comp7', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp8', value: 'Comp8', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp9', value: 'Comp9', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp10', value: 'Comp10', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp11', value: 'Comp11', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp12', value: 'Comp12', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp13', value: 'Comp13', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp14', value: 'Comp14', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp15', value: 'Comp15', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp16', value: 'Comp16', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp17', value: 'Comp17', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp18', value: 'Comp18', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp19', value: 'Comp19', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp20', value: 'Comp20', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp21', value: 'Comp21', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp22', value: 'Comp22', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp23', value: 'Comp23', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp24', value: 'Comp24', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp25', value: 'Comp25', icon: 'https://pic2.58cdn.com.cn/nowater/webim/big/n_v2c2373cfc56dc44fc8330337d88334695.gif', width: 100, height: 100, },
  { name: 'Comp26', value: 'Comp26', icon: 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png', width: 100, height: 100, },
  { name: 'Comp27', value: 'Comp27', icon: 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png', width: 100, height: 100, },
  { name: 'Comp28', value: 'Comp28', icon: 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png', width: 100, height: 100, },
  { name: 'Comp29', value: 'Comp29', icon: 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png', width: 100, height: 100, },
  { name: 'Comp30', value: 'Comp30', icon: 'https://pic5.58cdn.com.cn/nowater/webim/big/n_v20c4ed2775ad3462ab44d361a6a72c83b.png', width: 100, height: 100, },
])

function onMouseDown(e, nodeData) {
  emitter.emit('on-drag-start', { mouseEvent: e, nodeData })
}
</script>

<template>
  <div class="w-300px comps-panel">
    <n-scrollbar>
      <div class="flex flex-row flex-wrap justify-start items-start content-start">
        <div v-for="item in comps" :key="item.value" class="comp-box" :style="`background-image: url(${item.icon})`" @mousedown="onMouseDown($event, item)" />
      </div>
    </n-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.comps-panel {
  background-color: #eee;
  padding: 2px;
  border-radius: 5px;
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
