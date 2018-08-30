<template>
  <div class="comment-list" v-if="comments.length>0">
    <div v-for="(item,index) in comments">
         <comment :key="index" :message="item" :this_index="index"></comment>
    </div>
     
  </div>
</template>
<script>

import { mapState, mapMutations, mapGetters } from "vuex";
import comment from "./comment.vue"
export default {
  name: 'comment-list',
  data () {
    return {

    }
  },
  components:{
    comment,
    
  },
  created(){
    console.log(this.comments)
  },
  methods:{
    
  },
  computed:{
    comments(){
      return this.$store.state.comments;
    },
  },
  mounted(){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
	.comment-list {
	  background-color: #fff;
	  border: 1px solid #f1f1f1;
	  padding: 20px;
	}
	/* 评论组件样式 */
.comment {
  position: relative;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  min-height: 50px;
}

.comment .comment-user {
  flex-shrink: 0;
}

.comment-username {
  color: #00a3cf;
  font-style: italic;
}

.comment-createdtime {
  padding-right: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
}

.comment:hover .comment-delete {
  color: #00a3cf;
}

.comment-delete {
  position: absolute;
  right: 0;
  top: 0;
  color: transparent;
  font-size: 12px;
  cursor: pointer;
}

.comment p {
  margin: 0;
  /*text-indent: 2em;*/
}

code {
  border: 1px solid #ccc;
  background: #f9f9f9;
  padding: 0px 2px;
}


</style>