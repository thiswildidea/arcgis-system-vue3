
<template>
  <div id="viewDiv">
 
  </div>
</template>

<script lang="ts">
import { onMounted,toRefs,reactive,defineComponent, getCurrentInstance } from "vue";
import * as esriloader from "esri-loader";
import { useStore } from '/@/store/index';
export default {
  name: "map",
  components: {  },
  setup() {
     const { proxy } = getCurrentInstance() as any;
     const store = useStore();
     const state = reactive({
           loading: false
     });
     const initmap = async () => {
        esriloader.loadModules(['esri/views/MapView', 'esri/WebMap'],
         {
           url: "https://gis.shac.cn/smiapi/arcgis/4.18/4.18/init.js",
           css: "https://gis.shac.cn/smiapi/arcgis/4.18/4.18/esri/themes/light/main.css"
         }
        ).then(([MapView, WebMap]
              ) => {
                console.log(store.state.SettingConfig.view);
                var webmap = new WebMap({
                  portalItem: { 
                    id: 'f2e9b762544945f390ca4ac3671cfa72'
                  }
                });
                var view = new MapView({
                  map: webmap,
                  container: 'viewDiv'
                });

                store.dispatch('SettingConfig/setview', view);
              })
              .catch(err => {
                console.error(err);
              });
           }
           onMounted(() => {
                 initmap();
             })
             return {
                initmap,
                ...toRefs(state),
             }
          }
}
</script>
<style scoped>
  #viewDiv {
       padding: 0;
       margin: 0;
       height:  100%;
       width:  100%;
   }
</style>
