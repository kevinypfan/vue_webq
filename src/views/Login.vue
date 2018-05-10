<template>
  <div >
    <div id="login_left">
      <!-- 輪播 -->

        <div class="text-center">
          <div class="tabPanel" id="box">
          <div class="tab-content" id="con1">
            <img src="../../src/assets/001.jpg"  width="450" height="200" alt="Photoshop">
            <div class="detail">
              <h1><router-link to="/Main">知識新聞</router-link></h1>
              <p>廣泛的知識，全方位的學習? 您不能錯過本單元喔！</p>
              <ul>
                <li><a href="javascript:;">直角坐標問題</a></li>
                <li><a href="javascript:;">如何預測天氣</a></li>
              </ul>
            </div>
          </div>
          <div class="tab-content" id="con2">
            <img src="../../src/assets/002.jpg"  width="450" height="200" alt="Illustrator">
            <div class="detail">
              <h1><a href="javascript:;">我要發問</a></h1>
              <p>問問題是進步的開始，也可以回答問題得金幣喔!</p>
            </div>
          </div>
          <div class="tab-content" id="con3">
            <img src="../../src/assets/003.jpg"  width="450" height="200" alt="Dreamweaver">
            <div class="detail">
              <h1><a href="javascript:;">每日一單字</a></h1>
              <p>sophisticated: <br>老練的,老於世故的;復雜的,尖端的.</p>
            </div>
          </div>
          <div class="tab-content" id="con4">
            <img src="../../src/assets/004.jpg"  width="450" height="200" alt="Javascript">
            <div class="detail">
              <h1><a href="javascript:;">我的筆記</a></h1>
              <p>紀錄方便,容易複習,打好基礎的好方法。</p>
            </div>
          </div>
          <div class="tab-content" id="con5">
            <img src="../../src/assets/005.jpg"  width="450" height="200" alt="CSS">
            <div class="detail">
              <h1><a href="javascript:;">競賽</a></h1>
              <p>徹底學會正確的觀念！有趣的競賽又有金幣可拿，加油！</p>
              <ul>
                <li><a href="javascript:;">溫習競賽</a></li>
                <li><a href="javascript:;">第一冊數學暑期挑戰賽</a></li>
                <li><a href="javascript:;">已報名人數:</a></li>
                <li><a href="javascript:;">金幣:</a></li>
              </ul>
            </div>
          </div>
          <ul calss="listReset switch">
            <font size="3">
              <li><a href="javascript:;" id="tab1">知識新聞</a></li>
              <li><a href="javascript:;" id="tab2">我要發問</a></li>
              <li><a href="javascript:;" id="tab3">每日一單字</a></li>
              <li><a href="javascript:;" id="tab4">我的筆記</a></li>
              <li><a href="javascript:;" id="tab5">競賽</a></li>
            </font>
          </ul>

        </div>
      </div>


    </div>
    <div id="login_right">
      <div id="form" class="text-right">
          <input type="text" name="user_id"  style="width:200px" v-model="login_data.user_id" placeholder="請輸入帳號(email)"> <br><br>
          <input type="password" name="user_pwd"  style="width:200px" v-model="login_data.user_pwd" placeholder="請輸入密碼"> <br><br>
          <router-link :to="{ name: 'Main'}" class="btn btn-primary">登入</router-link>
          <br><br>
    	    <a href="javascript:;" @click="test">忘記密碼? 重發認證信</a> &nbsp;&nbsp;&nbsp;<br><br>
    	    <button  class="btn btn-info" @click="test">FB快速登入</button> &nbsp;&nbsp;&nbsp;
    	    <button  class="btn btn-info" @click="test">G+快速登入</button> <br><br>
    	    <a href="javascript:;" @click="new_user">還沒有帳號? 註冊一個!</a>
          <p class="errorMessage" v-if="err_flag"> {{errorMessage}} </p>
          <p class="successMessage" v-if="successMessage">{{successMessage}} </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_data: {user_id: "", user_pwd: ""},
      errorMessage: "",
      successMessage: "",
      err_flag: false,
      form_submit_ok: false,
      get_users: [],
    }
	},
  methods: {
    login_chk: function(event) {
      this.err_flag=false;
      this.errorMessage="";
      if(!this.login_data.user_id) {
         this.err_flag=true;
         this.errorMessage="請輸入帳號!";
      }
      if(!this.login_data.user_pwd) {
         this.err_flag=true;
         this.errorMessage+="請輸入密碼!";
      }
      if(this.err_flag) return;
      // 檢查 database learn_db.member 帳密是否正確
      /*
      ppp = new URLSearchParams();
      ppp.append('user_id', this.login_data.user_id);
      ppp.append('user_pwd',this.login_data.user_pwd);
      axios.post('http://192.168.8.102/sql/member.php',ppp)
    			.then( response => {
              // alert(response.data);
    				 if(response.data.error) {
                this.err_flag=true;
        			  this.errorMessage =response.data.errmsg;
    				 } else {
                document.cookie="user_id="+this.login_data.user_id+";";
                var new_url = window.location.protocol + "//" + window.location.host + "/apps/main.html";
                // 正常寫法: parent.location.href(new_url); 但 CHROME 會失效 所以改成下列方式
                setTimeout(function(){document.location.href = new_url;},500);
             }
  	       })
         .catch(error => {
            alert('error');
          });
        */
    // FOR TEST  一律 login
    alert("準備登入....");
    document.cookie="user_id="+this.login_data.user_id+";";
    var new_url = window.location.protocol + "//" + window.location.host + "/apps/main.html";
    // 正常寫法: parent.location.href(new_url); 但 CHROME 會失效 所以改成下列方式
    setTimeout(function(){document.location.href = new_url;},500);
    //======================================================================
    },
    test() {
        this.err_flag=true;
        this.errorMessage = "建構中.....";
    },
    new_user() {
      var new_url = window.location.protocol + "//" + window.location.host + "/apps/register.html";
      window.location.href = new_url;
    }


  }
}
</script>

<style lang="css">

</style>
