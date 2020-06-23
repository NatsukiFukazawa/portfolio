<template lang="ja">
    <div class =top>
      <div> 
        <h2>
          {{name}}'s portfolio
        </h2>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Natsuki",
    };
  },

  methods: {
    changeName(name) {
      this.name = name;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  background-image: url("../assets/top_background_2.jpg");
  height: 400px;
  background-size: cover;

  justify-content: center;
  h2 {
    color: cyan;
    font-family: "M PLUS Rounded 1c", sans-serif;
    padding-top: 190px;
    font-size: 50px;
  }

  /* タブレット向けレイアウト */
  @media (max-width: 1000px) {
    .top {
      height: 200px;
      font-size: 5px;
    }
  }

  /* スマホ向けレイアウト */

  @media (max-width: 670px) {
  }
}
</style>
