<template>
  <div class="scrap">
    <h2>scraps</h2>

    <p>ここには具体的な使用法を見つけられなかった実装を置いています。</p>

    <!--<div class="scrap-list">
      <csvfilereader></csvfilereader>
    </div>

    <div class="scrap-list">
      <h2>2 namechange</h2>
      <p>portfolioの名前を変更することができます。</p>
    </div>

    <div class="scrap-list">
      <h2>3 watcher使用</h2>
      <p>せっかくなので</p>
    </div>

    <div class="scrap-list">
      <h2>4 api使用</h2>
      <p></p>
    </div>-->
    <div class="scrap-list">
      <todo />
    </div>
  </div>
</template>

<script>
//import csvfilereader from "./csvfilereader.vue";
import todo from "@/components/todo";

export default {
  name: "test1",
  components: {
    //csvfilereader,
    todo,
  },
};
</script>
<style lang="scss" scoped>
.scrap {
  margin-top: 20px;
  height: 1000px;

  .scrap-list {
    margin-top: 20px;
  }
  @media (max-width: 1000px) {
  }

  /* スマホ向けレイアウト */

  @media (max-width: 670px) {
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 15px;
      margin: 0 20px;
    }
  }
}
</style>
