<template>
  <div class="myheader-wrap">
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">home</b-nav-item>
          <b-nav-item to="/career">career</b-nav-item>
          <b-nav-item to="/skills">skills</b-nav-item>
          <b-nav-item to="/scrap">scrap</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.myheader-wrap {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
