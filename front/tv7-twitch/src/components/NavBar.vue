<template>
  <div id="nav">
    <router-link :to="item.Path" v-for="(item, index) in this.navItems" :key="index">
      {{ item.Title }} &nbsp;
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

interface NavItem {
  Title: string;
  Icon: string;
  Path: string;
}

@Options({
})
export default class Calendar extends Vue {
  private navItems: NavItem[] = [
    {
      Title: 'Home',
      Icon: 'schedule',
      Path: '/'
    },
    {
      Title: 'About',
      Icon: 'info-circle',
      Path: '/about'
    }
  ];
}
</script>

<style scoped lang="less">
#nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
