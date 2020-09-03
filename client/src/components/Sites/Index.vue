<template>
  <v-layout>
    <div v-for="site in sites"
      :key="site.ref">
      {{site.ref}}
    </div>
  </v-layout>
</template>

<script>
import SitesService from '@/services/SitesService'
import {mapState} from 'vuex'
export default {

  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.sites = (await SitesService.index()).data
  }
}
</script>

<style scoped>
.site {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

</style>