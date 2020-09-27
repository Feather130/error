<template>
  <div class="hello">
    {{time}}
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'HelloWorld',
  data(){
    return{
      time:''
    }
  },
  mounted(){
    this.time=this.momentFormat()
  },
  methods:{
    momentFormat(){
      return moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style scoped>

</style>
