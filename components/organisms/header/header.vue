<template>
  <section class="vf-o-header">
    <div class="vf-o-header__top">
      <vf-m-container>
        <vf-m-row class="mb-4 py-2">
          <vf-m-col align-self="center" class="text-sm-left">
            <vf-o-currency />
            <vf-o-language />
          </vf-m-col>
          <vf-m-col align-self="center" class="text-sm-right">
            <vf-m-compare-link class="ml-auto" />
            <vf-m-wishlist-link />
            <vf-m-account-menu />
          </vf-m-col>
        </vf-m-row>
      </vf-m-container>
    </div>
    <div class="vf-o-header__bottom">
      <vf-m-container>
        <vf-m-row class="mb-4">
          <vf-m-col md="auto" class="text-md-left py-2" align-self="center">
            <vf-m-logo />
          </vf-m-col>
          <vf-m-col md align-self="center">
            <vf-o-search-inline-form class="mx-auto" />
          </vf-m-col>
          <vf-m-col md="3" class="text-md-right" align-self="center">
            <vf-m-cart-link />
          </vf-m-col>
        </vf-m-row>
      </vf-m-container>
    </div>
    <div class="vf-o-header__menu">
      <vf-m-container>
        <vf-o-position name="headerMenu" />
      </vf-m-container>
    </div>
  </section>
</template>

<script>
  import { oHeader } from 'vuefront/lib/components/organisms/header'
  export default {
    mixins: [oHeader]
  }
</script>
