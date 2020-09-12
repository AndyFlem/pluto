<template>
  <div>
    <template v-if="(typeof block.block_ref == 'undefined')" />
    <template v-else> 
      <div id="block">
        <h2>Block Ref: {{ block.block_ref }}</h2>
        <template v-if="(typeof block.rows !== 'undefined')">
          Rows: {{block.rows.length}}
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Block",
  data() {
    return {
      state: 'none'
    }
  },
  props: {
    block: Object
  },
  computed:{
    
  }
}
</script>

<style scoped>

</style>