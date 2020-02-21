<template>
  <vf-a-button nuxt to="/store/cart" color="secondary" block size="lg">
    <vf-a-icon icon="shopping-cart" />
    <span class="d-none d-md-inline-block">{{$t('elements.common.header.nav.shoppingCartText')}}</span>
  </vf-a-button>
</template>

<script>
  import {mCartLink} from "vuefront/lib/components/molecules/cart-link";

  export default {
    mixins: [mCartLink]
  };
</script>
