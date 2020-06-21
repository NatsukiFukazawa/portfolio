<template>
  <div class="about">
    <About></About>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/views/About.vue";

export default {
  name: "Home",
  components: {
    About,
  },
};
</script>
