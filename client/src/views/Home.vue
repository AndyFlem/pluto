<template>
  <div class="row">
    <div class="col col-sm-9">
      <div id="map"></div>
    </div>
    <div class="col col-sm-3">
        <block   
      v-bind:key="block.id"
      v-bind:block="block" />

    </div>    
  </div>
  
</template>

<script>
import {Map, View} from 'ol';
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';
import Select from 'ol/interaction/Select';
import {click} from 'ol/events/condition';
import {Fill, Stroke, Style} from 'ol/style';
import {get as getProjection} from 'ol/proj';
import BlocksService from '@/services/BlocksService'
import SitesService from '@/services/SitesService'

import Block from '../components/Block'

export default {
  name: "Home",
  data:function () {
    return {
      block: {}
    }
  },
  components:{
   Block
  },
  async mounted(){
    let _this=this

    const block_features=(await BlocksService.index()).data
    const blocksSource = new VectorSource()
    const blocksLayer=new VectorLayer({source: blocksSource})
    const sitesSource= new VectorSource()
    const sitesLayer=new VectorLayer({source: sitesSource})
    
    const blocks={}
    block_features.forEach(block => {
      blocks[block.block_id]=block
      const feat=new GeoJSON().readFeature(block.geometry) 
      feat.setId(block.block_id)
      blocksSource.addFeature(feat)   
    });

    
    blocksLayer.setStyle((feature)=>{
      const block=blocks[feature.getId()]
      if (block.block_status_id==1) {
        return new Style({
          stroke: new Stroke({color: 'rgb(200,200,200)',width: 1.5}),
          fill: new Fill({color: 'rgba(220,220,220, 0.1)'}),
        })
      }else{
        return new Style({
          stroke: new Stroke({color: '#28a745',width: 1.5}),
          fill: new Fill({color: 'rgba(0, 200, 0, 0.1)'}),
        })
      }
    })

    const view = new View({
      center: [1700,150],
      projection: getProjection("EPSG:32735"),
      zoom: 17
    });
    const selectClick = new Select({condition: click});
    const map=new Map({
      layers:[blocksLayer, sitesLayer],
      target: 'map', view: view
    });
    map.addInteraction(selectClick);
    selectClick.on('select', function (e) {
      const blockId=e.target.getFeatures().item(0).getId()
      _this.block=blocks[blockId]
      
      SitesService.index(blockId).then((data)=>{
          const blk=data.data
          blocks[blockId]=blk
          _this.block=blk
          blk.rows.forEach(row=>{
            row.sites.forEach(site => {
              const feat=new GeoJSON().readFeature(site.geometry) 
              feat.setId(site.site_id)
              sitesSource.addFeature(feat)   
            });
          })


        }
      )

    })
  }
};
</script>


<style lang="scss" scoped>
  #map{
    background-color: #F9F9F9;
  }
</style>
