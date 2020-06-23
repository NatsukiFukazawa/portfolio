<template>
  <div class="skills">
    <h2>skills</h2>
    <p>カーソルを上に置くと詳細が見れます(無さすぎて恥ずかしい)</p>
    <b-list-group flush class="flex-sm-row flex-md-row flex">
      <b-list-group-item class="flex-child">
        <div class="skill-wrapper">
          <p>python</p>
          <div class="description">
            <p>
              実務未経験で研究でニューラルネットワークを用いた分類器の実装やログの整形などで使用しています。
            </p>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item class="flex-child">
        <div class="skill-wrapper">
          <p>java</p>
          <div class="description">
            <p>
              大学の教授が自作して一時的に使用していた出席管理用のjavaで書かれたandroidアプリケーションの一部改良を行ったことがあります。
            </p>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item class="flex-child">
        <div class="skill-wrapper">
          <p>C#</p>
          <div class="description">
            <p>
              大学の教授が自作して一時的に使用していた出席管理用のC#で書かれたwindowsアプリケーションの一部改良を行ったことがあります。
            </p>
          </div>
        </div>
      </b-list-group-item>
      <b-list-group-item class="flex-child">
        <div class="skill-wrapper">
          <p>javascript</p>
          <div class="description">
            <p>このポートフォリオを作るレベルの知識しかありません。</p>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  margin-top: 20px;
  @include top-height;

  .flex {
    margin: 100px 0;

    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  .flex-child {
    flex: auto;
    width: 25%;
    z-index: 0;

    padding: 0 10px;
    border-color: sandybrown;
  }
  .skill-wrapper {
    background-color: seagreen;
    height: 150px;
    border-radius: 10px;
    color: cornsilk;
    margin: 0 auto;
    &:hover {
      opacity: 0.7;
      .description {
        color: white;
      }
    }
  }

  .flex-list {
    display: flex;
  }
  .description {
    font-size: 10px;
    margin: 0 20px;
    color: seagreen;
  }

  @media (max-width: 720px) {
    .flex-child {
      width: 50%;
      margin: 20px auto;
    }

    .flex-list li {
      width: 50%;
      margin-top: 25px;
    }
  }

  /* スマホ向けレイアウト */

  @media (max-width: 575px) {
    .flex-child {
      width: 75%;
      margin: 10px auto;
    }
  }
}
</style>
