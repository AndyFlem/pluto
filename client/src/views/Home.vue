<template>
  <div class="text-center">
    <h1 class="mb-4">LHMP</h1>
    <div id="map"></div>
  </div>
  
</template>

<script>
//import Grave from '../components/Sites/Grave'
import {Map, View} from 'ol';
import {get as getProjection} from 'ol/proj';

const view = new View({
  center: [0,0],
  projection: getProjection("EPSG:32735"),
  zoom: 13
});
new Map({
  target: 'map', view: view
});

export default {
  name: "Home",
  async mounted() {

  },
  components:{
   
  }
};
</script>


<style lang="scss" scoped>

</style>
