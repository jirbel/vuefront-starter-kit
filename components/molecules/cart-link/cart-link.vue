<template>
  <vf-a-button nuxt to="/store/cart" color="secondary" block size="lg">
    <vf-a-icon icon="shopping-cart" class="fa-fw mr-2" />
    <span class="d-none d-md-inline-block">{{ $t('elements.common.header.nav.shoppingCartText') }}</span>
  </vf-a-button>
</template>

<script>
import { mCartLink } from 'vuefront/lib/components/molecules/cart-link'

export default {
  mixins: [mCartLink],
  name: 'mCartLink'
}
</script>
