<template>
  <div class="career">
    <ul>
      <li>
        <h2>History</h2>
      </li>
    </ul>

    <ul>
      <li>
        <h4>大学でバイト</h4>
        <p>ドッカーを用いたネットワーク構築</p>
        <p>apiを使用した勤怠管理システムの一部を作成</p>
      </li>

      <li>
        <h4>2019/04toeic725</h4>
        <p>院試のために受けました</p>
      </li>

      <li>
        <h4>2019/06 pythonでニューラルネットワーク実装</h4>
      </li>
      <p>本当に単純なものです</p>

      <li>
        <h4>2020/06 Vue.jsでポートフォリオ作成</h4>
        <p>SPA構成</p>
        <p>bootstrap使用</p>
        <p>ガラクタ置き場にいろいろ置いています</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.career {
  @include top-height;
  ul {
    list-style: none;
    text-align: center;

    li {
      &::before {
        content: "2019/04";
      }
    }
  }
}
</style>
