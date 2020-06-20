<template>
  <div class="scrap">
    <h2>
      ガラクタ置き場
    </h2>

    <p>ここには具体的な使用法を見つけられなかった実装を置いています。</p>

    <div class="csvfilereader">
      <h2>1csvfilereader</h2>
      <p>
        csvファイルを読み込んで表示します、ダウンロードボタンで表示したcsvファイルをダウンロードできます。
      </p>
    </div>
    <csvfilereader></csvfilereader>

    <div class="namechange">
      <h2>2 namechange</h2>
      <p>portfolioの名前を変更することができます。</p>
    </div>

    <div class="watcher">
      <h2>3 watcher使用</h2>
      <p>せっかくなので</p>
    </div>
  </div>
</template>

<script>
import csvfilereader from "./csvfilereader.vue";

export default {
  name: "test1",
  components: {
    csvfilereader,
  },
};
</script>
<style lang="scss" scoped>
.scrap {
  @include top-height;
}
</style>
