<template>
  <div class="text-center">
    <h1 class="mb-4">LHMP</h1>
    <grave :grave=""/>
  </div>
</template>

<script>
import Grave from '../components/Sites/Grave'

export default {
  name: "Home",
  async mounted() {

  },
  components:{
    Grave
  }
};
</script>


<style lang="scss" scoped>

</style>
