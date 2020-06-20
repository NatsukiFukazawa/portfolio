<template>
  <div>
    <h2>
      ガラクタ置き場
    </h2>
    <h2>１,csvfilereader</h2>
    <p>csvファイルを読み込んで表示します</p>
    <csvfilereader></csvfilereader>
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
