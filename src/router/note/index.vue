<template>
  <div>
    <nav-bar></nav-bar>
    <side-bar style="padding-top: 60px;"></side-bar>
  </div>
</template>
<script>
import NavBar from './NavBar'
import SideBar from './SideBar'

export default {
  data () {
    return {
      NavBarList: [],
      SideBarList: []
    }
  },
  components: {
    NavBar,
    SideBar
  }
}
</script>
