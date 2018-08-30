<template>
    <div class='comment-input'>
        <div class='comment-field'>
            <span class='comment-field-name'>用户名：</span>
            <div class='comment-field-input'>
                <input placeholder="用户名" ref="inputUserName"  @blur="_saveUserName"/>
            </div>
        </div>
        <div class='comment-field'>
            <span class='comment-field-name'>评论内容：</span>
            <div class='comment-field-input'>
                <textarea v-model="content" ref="textareaDOM"></textarea>
            </div>
        </div>
        <div class='comment-field-button'>
            <button @click="bandUserBtn">
                发布
            </button>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions, mapMutations, mapGetters } from "vuex";
//写个形式 都没用上
export default {
  name: 'comment_input',
  props:["show"],
  data () {
    return {
      content:"",
      timeString:""
    }
  },
  created(){

  },
  methods:{
    _saveUserName(){
      let userName = this.$refs.inputUserName.value;
      localStorage.setItem("username",JSON.stringify(userName));
    },
    _loadUserName(){
      if (localStorage.getItem("username")) {
        let userName =JSON.parse(localStorage.getItem("username"));
        this.$refs.inputUserName.value = userName
      }
    },
    bandUserBtn(){

      let userName = this.$refs.inputUserName.value;
      if (!userName || !this.content) {
        alert("信息不能为空");
        return
      }
      let comment = {
        username : userName,
        content : this.content,
        dataTime : +new Date()
      }
      // console.log(comment)
      this.$store.dispatch("addMessage",comment)
    },
    handUserContentFouce(){
      this.$refs.textareaDOM.focus()
    }
  },
  computed:{

  },
  mounted(){
    this._loadUserName();
    this.handUserContentFouce();
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 评论框样式 */
.comment-input {
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 20px;
  margin-bottom: 10px;
}

.comment-field {
  margin-bottom: 15px;
  display: flex;
}

.comment-field .comment-field-name {
  display: flex;
  flex-basis: 100px;
  font-size: 14px;
}

.comment-field .comment-field-input {
  display: flex;
  flex: 1;
}

.comment-field-input input,
.comment-field-input textarea {
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  padding: 5px;
  outline: none;
  font-size: 14px;
  resize: none;
  flex: 1;
}

.comment-field-input textarea {
  height: 100px;
}

.comment-field-button {
  display: flex;
  justify-content: flex-end;
}

.comment-field-button button {
  padding: 5px 10px;
  width: 80px;
  border: none;
  border-radius: 3px;
  background-color: #00a3cf;
  color: #fff;
  outline: none;
  cursor: pointer;
}

.comment-field-button button:active {
  background: #13c1f1;
}
</style>






