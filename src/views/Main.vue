<template>
  <div class="bgc1">
    <div class="container">
      <Scrollspy />
      <div class="row">
        <div class="col-sm-2"></div>
        <!-- Main -->
        <div class="col-sm-8">
          <nav class="navbar navbar-color">
            <div class="container-fluid">
              <ul class="nav navbar-nav">
                <li style="padding-left:12px;padding-right:12px;text-align:center;line-height:50px;color:#fff;background-color:#c2a49f;font-size:16px;display: block; ">知識新聞</li>
                <li><a href="#">每日數學觀念</a></li>
                <li><a href="#">每日一單字</a></li>
                <li><a href="#">新活動</a></li>
              </ul>
            </div>
          </nav>
          <div class="block_line" style="min-height:200px;color:#fff;background-color:#c2a49f;">
            <div style="padding:5px 5px 5px 5px;">
              <img class="img-circle" src="/00_mywebq/images/news_001.jpg" width="120" height="120"> 在「以學生學習為中心的教師發展」一文中，作者曾提到若要周全的運用此種以學生學習為中心的反傳統教學方式，必須考量三方面的改變。 第一，教師必須調整角色；第二，改變評量學生學習成效的方式；第三，學生的「學習方式」需要改變（史美瑤，2012）。 這樣的教學方式鼓勵學生主動學習，讓學生互動，內化所學到的知識，以及永遠「擁有」由他們自己建構而得的知識。>
            </div>
          </div>
          熱門討論: <br>
          <div class="block_line" style="min-height:120px;color:#fff;background-color:#f2d4bf;">
          </div>
          你可能有興趣: <br>
          <div class="block_line" style="min-height:80px;color:#fff;background-color:#f2d4bf;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scrollspy from '../components/scrollspy/Scrollspy.vue';
export default {
  components: {
    Scrollspy,
  }
}
</script>

<style lang="css">
  .navbar-color {
      background-color: #f2d4bf;
      border-color: #E7E7E7;
  }
  .bgc1 {
    background-image: url(../assets/background2.jpg);
    background-repeat: repeat;
    background-size: cover;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -888;
  }
</style>
