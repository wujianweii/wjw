<template>
  <div class='parent'>
    <div class="item-1"></div>
    <div class="item-2"></div>
    <div class="item-3"></div>
  </div>
</template>
<style lang="scss" scoped>
  .parent {
    display: flex;
    width: 60px;
  }
  .parent > div {
    height: 100px;
  }
  .item-1 {
    width: 140px;
    flex: 2 1 0%;
    background: red;
  }
  .item-2 {
    width: 100px;
    flex: 2 1 auto;
    background: yellow;
  }
  .item-3 {
    flex: 2 1 200px;
    background: blue;
  }
</style>
