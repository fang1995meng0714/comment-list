<template>
  <div class="wrapper">
      <commentInput></commentInput>
      <commentList></commentList>
  </div>
</template>

<script>

import commentInput from "./comment_input.vue"
import commentList from "./comment_list.vue"

export default {
  name: 'wrapper',
  components:{
    commentInput,
    commentList
  },
  data () {
    return {
      
    }
  }
}
</script>
<style type="text/css">
    body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #fbfbfb;
}

.wrapper {
  width: 500px;
  margin: 10px auto;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 20px;
}

</style>
