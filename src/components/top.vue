<template lang="ja">
    <div class =top>
       <div style="background: url(../assets/top_background.jpg);">
            
            <h2>
                {{name}}'s portfolio
            </h2>
            <div class = "share">
        
        <a class = 'github' href="https://github.com/NatsukiFukazawa/">
      <font-awesome-icon :icon="['fab', 'github']" /></a
    > <a class = 'twitter' href="https://twitter.com/nNrzdpt05AQkVAD"
      ><font-awesome-icon :icon="['fab', 'twitter']" /></a
    >
      </div>
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
  h2 {
    color: cyan;
    font-family: "Courier New", Courier, monospace;
    padding-top: 150px;
    font-size: 50px;
    text-shadow: black;
  }
  .twitter {
    font-size: 3em;
    margin: 10px;
    &:hover {
      opacity: 0.5;
    }
  }
  .github {
    color: black;
    font-size: 3em;
    margin: 10px;

    &:hover {
      opacity: 0.5;
    }
  }
  .share {
    margin: 30px;
  }
}
</style>
