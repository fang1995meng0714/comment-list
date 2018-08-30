<template>
    <div class='comment'>
        <div class='comment-user'>
          <span class='comment-username'>
          {{message.username}}：
          </span>
        </div>
        <p>{{message.content}}</p>
        <span class='comment-createdtime'>
         {{timeString}}
        </span>
        <span class='comment-delete' @click="handleDeleteComment(this_index)">
          删除
        </span>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'comment-list',
  props:["message","this_index"],
  data () {
    return {
        timeString:"",
        timer:Object
    }
  },
  created(){
    // console.log(this.message)
    this._updateTimeString();
    this.timer = setInterval(this._updateTimeString,5000)
  },
  methods:{
    _updateTimeString(){
        let comment = this.message;
        let duration = (+Date.now() - comment.dataTime) / 1000;
        // console.log(this)
        this.timeString = duration > 60
                        ? `${Math.round(duration / 60)} 分钟前`
                        : `${Math.round(Math.max(duration, 1))} 秒前`
        return  this.timeString
    },

    handleDeleteComment(index){ 
      this.$store.dispatch("handleDeleteComment",index)
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);        
    this.timer = null;
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
































