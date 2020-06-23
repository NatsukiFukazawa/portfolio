<template>
  <div class="career">
    <b-container>
      <b-list-group flush horizontal>
        <b-list-group-item>
          <h2>History</h2>
        </b-list-group-item>
      </b-list-group>

      <b-list-group flush horizontal="lg">
        <b-list-group-item>
          <div class="center-block">
            <h4>
              <span>2019/04 大学でバイト</span>
            </h4>
            <p>ドッカーを用いたネットワーク構築</p>
            <p>apiを使用した勤怠管理システムの一部を作成</p>
          </div>
        </b-list-group-item>
      </b-list-group>
      <b-list-group flush>
        <b-list-group-item>
          <div class="center-block">
            <h4>
              <span>2019/04 toeic725</span>
            </h4>
            <p>院試のために受けました</p>
          </div>
        </b-list-group-item>
      </b-list-group>
      <b-list-group flush>
        <b-list-group-item>
          <div class="center-block">
            <h4>
              <span>2019/06 pythonでニューラルネットワーク実装</span>
            </h4>
            <p>本当に単純なものです</p>
          </div>
        </b-list-group-item>
      </b-list-group>
      <b-list-group flush>
        <b-list-group-item>
          <div class="center-block">
            <h4>
              <span>2020/06 Vue.jsでポートフォリオ作成</span>
            </h4>
            <p>SPA構成</p>
            <p>bootstrap使用</p>
            <p>ガラクタ置き場にいろいろ置いています</p>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.career {
  @include top-height;
  ul {
    list-style: none;
    text-align: center;
    li {
      margin-top: 50px;
      span {
        border-bottom: solid 1px cyan;
      }
    }
  }
}

@media (max-width: 1000px) {
}

/* スマホ向けレイアウト */

@media (max-width: 670px) {
  .center-block {
    h4 {
      font-size: 100%;
    }

    p {
      font-size: 80%;
    }
  }
}
</style>
