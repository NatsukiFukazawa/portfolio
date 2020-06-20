<template lang="ja">
    <div class =top>
       <div style="background: url(../assets/top_background.jpg);">
            <div id="nav">
                 <router-link to="/">Home</router-link> |
                 <router-link to="/about">About</router-link>
            </div>
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

<style scoped>
.top {
  background-image: url("../assets/top_background_2.jpg");
  height: 400px;
  background-size: cover;
}

.top h2 {
  color: cyan;
  font-family: cursive;
  margin-top: 90px;
  font-size: 50px;
}
</style>
