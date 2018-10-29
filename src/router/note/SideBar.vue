<template>
  <div class="note-sideBar">
    <ul class="note-sideBar_first">
      <li>
        <!-- 第一栏 -->
        <a href="">first</a> 
        <ul class="note-sideBar_second">
          <li>
            <!-- 第二栏 -->
            <a href="">second</a>
            <ul class="note-sideBar_third">
              <li>
                <!-- 第三栏 -->
                <a href="">third</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      SideBarList: []
    }
  }
}
</script>
<style lang="scss" scoped>
.note-sideBar {
  line-height: 1.5rem;
  width: 260px;
  li {
    margin-top: 0.5em;
  }
  &_first {
    font-size: 1rem;
    font-weight: 600;
  }
  &_first > li > a  {
    border-bottom: 1px solid #42b983;
  } 
  &_second {
    padding-left: 1rem;
    font-weight: 400;
    font-size: 0.8571428571rem;
  }
  &_third {
    padding-left: 1rem;
    font-weight: 400;
    font-size: 0.8571428571rem;
  }
}
</style>


