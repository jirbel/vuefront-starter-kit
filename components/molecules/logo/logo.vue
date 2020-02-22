<template>
  <vf-a-link to="/">
    <vf-a-amp-image
            v-if="$vuefront.isAMP"
            :src="logo"
            width="180"
            height="40"
            class="nav-section__logo"
    />
    <vf-a-image v-else :src="logo" alt class="nav-section__logo" height="51"/>
  </vf-a-link>
</template>
<script>
  import {mLogo} from "vuefront/lib/components/molecules/logo";

  export default {
    mixins: [mLogo]
  };
</script>

<style lang="scss">
  .nav-section__logo {
    margin-top: -25px;
  }
</style>
