<template>
  <div class="note-navbar">
    <a href="" class="logo">
      <img src="./images/logo.png" alt="">
      <span class="logo">Note</span>
    </a>
    <ul class="note-navbar_ul">
      <li class="note-navbar_li" v-for="(item, index) in NavBarList" :key="index" >
        <a href="#">{{ item }}</a>
        <ul class="nav-dropdown">
          <li> </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NavBarList: [
        '学习',
        '多语言'
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.logo {
  img {
    width: 40px;
    line-height: 40px;
  }
  span {
    font-size: 20px;
    line-height: 40px;
    color: #2c3e50;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    position: relative;
    top: -10px;
  }
}
.note {
  &-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    padding: 10px 60px;
    background: rgba(255, 255, 255, .25);
  }
  &-navbar_ul {
    height: 40px;
    line-height: 40px;
    position: fixed;
    top: 10px;
    right: 30px;
  }
  &-navbar_li {
    display: inline-block;
    position: relative;
    padding: 0 0.6em;
  }
}
.nav-dropdown {
  display: none;
  box-sizing: border-box;
  max-height: calc(100vh - 61px);
  overflow-y: auto;
  position: absolute;
  top: 100%;
  right: -15px;
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-bottom-color: #ccc;
  text-align: left;
  border-radius: 4px;
  white-space: nowrap;
}

</style>
