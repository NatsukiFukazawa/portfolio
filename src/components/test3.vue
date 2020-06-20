<template>
  <div class="skills">
    <h2>skills</h2>

    <ul class="flex-list">
      <li class="flex-child">
        <p>python</p>
        <div class="description">
          <p>
            実務未経験で研究でニューラルネットワークを用いた分類器の実装やログの整形などで使用しています。
          </p>
        </div>
      </li>
      <li class="flex-child">
        <p>java</p>
        <div class="description">
          <p>
            大学の教授が自作して一時的に使用していた出席管理用のjavaで書かれたandroidアプリケーションの一部改良を行ったことがあります。
          </p>
        </div>
      </li>
      <li class="flex-child">
        <p>C#</p>
        <div class="description">
          <p>
            大学の教授が自作して一時的に使用していた出席管理用のjavaで書かれたandroidアプリケーションの一部改良を行ったことがあります。
          </p>
        </div>
      </li>
      <li class="flex-child">
        <p>javascript</p>
        <div class="description">
          <p>
            このポートフォリオを作るレベルの知識しかありません。
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  ul {
    margin: 100px 0;

    list-style: none;
    display: flex;
    .flex-child {
      flex: auto;
      width: 25%;
      height: 60px;
    }
  }
  .flex-list {
    display: flex;
  }
  .description {
    font-size: 10px;
    margin: 0 20px;
  }
}
</style>
