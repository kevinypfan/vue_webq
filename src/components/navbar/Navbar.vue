<template>
  <div id="navbar">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <ul class="nav navbar-nav">
            <li><router-link to="/main" class="dropdown-toggle">首頁</router-link> </li>
            <li><router-link to="#" class="dropdown-toggle">個人資訊</router-link></li>
            <li class="dropdown ">
              <router-link to="" class="dropdown-toggle" data-toggle="dropdown">我的筆記
                <span class="caret"></span>
              </router-link>
              <ul class="dropdown-menu">
                <li><router-link to="/Note_new" >管理筆記</router-link></li>
                <li><router-link to="/Note_upload" >新增筆記</router-link></li>
                <li><router-link to="/My_note" >上傳筆記</router-link></li>   <!-- 沒功能 -->
              </ul>
            </li>
            <li><router-link to="#" class="dropdown-toggle">我要發問</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">我要回答</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">英文話劇</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">任務</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">題庫</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">競賽</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">競賽訊息</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">競賽大廳</router-link></li>
            <li><router-link to="#" class="dropdown-toggle">幫助</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="#" ><span class="glyphicon glyphicon-user"></span> Sign Up</router-link></li>
            <li><router-link to="/login" ><span class="glyphicon glyphicon-user"></span> Login</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
