<template>
  <div>
    <h1>
      このページはTwitterなどで見かけた面白そうなアニメーションなどを盛り込んだものになっております
    </h1>
    <h2>csvfilereader</h2>
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
