<template>
    <div>
        <WorkAsDetail :work="work"/>
    </div>
</template>

<script>
  import WorkAsDetail from './WorkAsDetail'
  import AppSection from '../AppSection'

  export default {
    components: {WorkAsDetail, AppSection},
    props:      {
      work: {type: Object, default: () => {}},
    },
    mounted () {
//      debugger
      console.log(this.work);
    }
  }
</script>

