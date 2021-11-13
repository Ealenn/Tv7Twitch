<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';
import { useStore } from '@/store';

@Options({
  components: {
    NavBar,
  }
})
export default class App extends Vue {
  mounted(): void {
    const store = useStore();
    store.dispatch('refreshEvents');
  }
}
</script>

<style lang="less">
body {
  font-family: 'Open Sans', sans-serif;
}
</style>
