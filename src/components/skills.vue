<template>
  <div class="skills">
    <h2>skills</h2>
    <p>カーソルを上に置くと詳細が見れます(無さすぎて恥ずかしい)</p>
    <ul class="flex-list">
      <li class="flex-child">
        <div class="container">
          <p>python</p>
          <div class="description">
            <p>実務未経験で研究でニューラルネットワークを用いた分類器の実装やログの整形などで使用しています。</p>
          </div>
        </div>
      </li>
      <li class="flex-child">
        <div class="container">
          <p>java</p>
          <div class="description">
            <p>大学の教授が自作して一時的に使用していた出席管理用のjavaで書かれたandroidアプリケーションの一部改良を行ったことがあります。</p>
          </div>
        </div>
      </li>
      <li class="flex-child">
        <div class="container">
          <p>C#</p>
          <div class="description">
            <p>大学の教授が自作して一時的に使用していた出席管理用のC#で書かれたwindowsアプリケーションの一部改良を行ったことがあります。</p>
          </div>
        </div>
      </li>
      <li class="flex-child">
        <div class="container">
          <p>javascript</p>
          <div class="description">
            <p>このポートフォリオを作るレベルの知識しかありません。</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  margin-top: 20px;
  @include top-height;

  ul {
    margin: 100px 0;

    list-style: none;
    display: flex;

    .flex-child {
      flex: auto;
      width: 25%;
      padding: 0 10px;
      border-color: sandybrown;
    }
  }
  .container {
    background-color: seagreen;
    height: 150px;
    border-radius: 10px;
    color: cornsilk;
    margin-right: 50px;
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
}
</style>
