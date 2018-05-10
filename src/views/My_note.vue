<template>
  <div class = "container">
      <div class="row">
          <div class = "col-sm-8">
             <div >查詢筆記：
        <input type="text" /> &nbsp;<button  class="btn btn-primary btn-sm">查詢</button>　(可以輸入關鍵字)</div>
             <div class="block_line" style="padding-top:5px;padding-left:8px;padding-bottom:10px;padding-right:8px;">
             <table  border="1"  cellpadding="0" cellspacing="0" id="date" bordercolor="#FFFFFF">
                <tr>
                  <td class="ttl" width="80px">NO</td>
                  <td class="ttl" width="80px">主題分類</td>
                  <td class="ttl" width="380px">筆記標題</td>
                  <td class="ttl" width="80px">編寫日期</td>
                  <td class="ttl" width="80px">狀況</td>
                  <td class="ttl" width="80px">評價</td>
               </tr>
               <tr>
                        <td><a href="#" TITLE="點選可以編輯筆記">1001</a></td>
                        <td>多項式</td>
                        <td>一元二次多項式</td>
                        <td>2011-12-02</td>
                        <td>完成</td>
                        <td>5顆星</td>
                    </tr>
                    <tr>
                        <td><a href="#" TITLE="點選可以編輯筆記">1022</a></td>
                        <td>多邊形</td>
                        <td>三角形概念</td>
                        <td>2012-05-07</td>
                        <td>待編輯</td>
                        <td>5顆星</td>
                    </tr>
                    <tr>
                        <td><a href="#" TITLE="點選可以編輯筆記">1023</a></td>
                        <td>多邊形</td>
                        <td>直角三角形概念</td>
                        <td>2012-02-12</td>
                        <td>待編輯</td>
                        <td>5顆星</td>
                    </tr>
                    <tr>
                        <td><a href="#" TITLE="點選可以編輯筆記">1016</a></td>
                        <td>多項式</td>
                        <td>一元二次多項式</td>
                        <td>2011-12-02</td>
                        <td>完成</td>
                        <td>5顆星</td>
                    </tr>
                    <tr>
                        <td><a href="#" TITLE="點選可以編輯筆記">1038</a></td>
                        <td>多項式</td>
                        <td>一元一次多項式</td>
                        <td>2012-02-15</td>
                        <td>完成</td>
                        <td>4顆星</td>
                    </tr>
            </table>
            </div>
            
             <nav aria-label="Page navigation example" align=center>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="active"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
             
        </div>
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