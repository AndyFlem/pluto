import Api from '@/services/Api'

export default {
    index () {
      return Api().get('blocks')
    },
    show (blockId) {
      return Api().get(`blocks/${blockId}`)
    },
  }