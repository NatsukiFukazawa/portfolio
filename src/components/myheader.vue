<template>
  <div class="myheader-wrap">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">home</b-nav-item>
          <b-nav-item to="/career">career</b-nav-item>
          <b-nav-item to="/skills">skills</b-nav-item>
          <b-nav-item to="/scrap">scrap</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
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
.menu-icon {
  color: white;
  float: right;

  padding: 21px 0;
  /* displayをnoneに指定してください */
  display: none;
}
@media all and (max-width: 670px) {
  .ul {
    display: none;
  }

  /* menu-iconクラスのdisplayをblockに指定してください  */
  .menu-icon {
    display: block;
  }
}
</style>
