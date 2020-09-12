import Api from '@/services/Api'

export default {
  index (blockId) {
    return Api().get(`block/${blockId}/sites`)
  },
  show (siteId) {
    return Api().get(`sites/${siteId}`)
  },
}
