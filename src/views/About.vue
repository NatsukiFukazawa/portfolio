<template>
  <div class="about">
    <h1>About</h1>

    <table
      class="about-table"
      border="1"
      cellspacing="0"
      cellpadding="5"
      bordercolor="white"
    >
      <tr>
        <td bgcolor align="right">name</td>
        <td>深澤那月</td>
      </tr>
      <tr>
        <td bgcolor align="right" nowrap>Univercity</td>
        <td>大阪市立大学大学院工学研究科電子情報系専攻</td>
      </tr>
      <tr>
        <td bgcolor align="right" nowrap>
          twitter
          <font-awesome-icon
            style="color: #55acee;"
            :icon="['fab', 'twitter']"
          />
        </td>
        <td>
          <a href="https://twitter.com/nNrzdpt05AQkVAD">なつき</a>
        </td>
      </tr>
      <tr>
        <td bgcolor align="right" nowrap>
          github
          <font-awesome-icon :icon="['fab', 'github']" />
        </td>
        <td>
          <a href="https://github.com/NatsukiFukazawa/">なつき</a>
        </td>
      </tr>
      <tr>
        <td bgcolor align="right" nowrap>qiita</td>
        <td>
          <a href="https://qiita.com/natsuki999">なつき</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.about {
  hi {
    margin: 0 auto;
  }
  table {
    width: "500px";
  }
  @include top-height;
  padding: auto;
  .about-table {
    margin: 0 auto;
  }
}
@media (max-width: 1000px) {
  .top {
    flex-wrap: wrap;
    height: 200px;
    font-size: 5px;
  }
  .flex-list li {
    width: 50%;
  }
}

/* スマホ向けレイアウト */
/* ブレイクポイントが670px以下の時のメディアクエリを設定してください */
@media (max-width: 670px) {
  table {
    width: 300px;
  }

  .flex-list li {
    margin: 0 auto;
  }
}
</style>
