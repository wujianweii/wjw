<template>
  <div class="wrap">
    <loading v-model="loading"></loading>
    <p>{{ data.first }}</p>
  </div>
</template>
<script>
import { Loading } from 'vux'
import { getFirst } from '@/store/api'

export default {
  data () {
    return {
      loading: true,
      data: {}
    }
  },
  components: {
    Loading
  },
  methods: {
    getFirstData () {
      getFirst().then(res => {
        if (res.data.code === 1) {
          this.data = res.data.data
          this.loading = false
        }
      })
    }
  }
}
</script>
