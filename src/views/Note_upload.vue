<template>
  <div class = "container">
      <div class="row">
          <div class = "col-sm-7">
              <table  border="0" cellpadding="0" cellspacing="0" style="padding-top:3px;padding-left:10px;">
            <tr>
                <td width="100px" align="right">主題分類:</td>
                <td>
                    <select v-model="new_ask_group">
                        <option>二元一次方程式</option>
                        <option>多項式</option>
                        <option>三角形</option>
                    </select> &nbsp;
                    <input type="text" name="ask_grp_title"  style="width:200px" v-model="new_ask_ask_grp_title" placeholder="請輸入分類標題">
                </td>
            </tr>
            <tr>
                <td width="100px" align="right">關鍵字:</td>
                <td>
                    <input type="text" value="" style="width:300px;">&nbsp;請用逗點(,)分隔
                </td>
            </tr>
            <tr>
                <td width="100px" align="right">分享權限:</td>
                <td>
                    <select v-model="new_ask_group">
                        <option>僅限好友</option>
                        <option>公開</option>
                        <option>不公開</option>
                    </select> &nbsp;&nbsp;
                </td>
            </tr>

        </table>
              <br>
              
                  <div>
                      <input id="fileupload" name="myfile" type="file" class="btn btn-info btn-sm" accept=".pdf, .doc" style="width:400px;" @change="onFileChange" />
                      <br>
                      <embed :src="up_pdf" width="500px" height="200px" /><br><br>
                      <button class="btn btn-primary btn-sm" v-on:click="upload_chk">上傳檔案</button>
                      <br>
                      <p class="errorMessage" v-if="err_flag"> {{errorMessage}} </p>
                  </div>
          </div>
          <Note/>
      </div>
  </div>
</template>
<script>
   import Note from './../components/note/note.vue';
  export default {
    components: {
      Note
    }
  }
</script>

<style lang="css">
    .navbar-color {
        background-color: #f2d4bf;
        border-color: #E7E7E7;
    }
</style>