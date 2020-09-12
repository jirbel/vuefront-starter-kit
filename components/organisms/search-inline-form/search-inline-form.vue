<template>
  <div class="vf-o-search-inline-form--wrapper">
    <vf-m-input-group class="vf-o-search-inline-form">
      <vf-a-input
              v-model="keyword"
              :placeholder="$t('elements.common.header.navSearch.placeholderText')"
              :hide-details="!$vuefront.isAMP"
              trim
              @keypress.stop="handleKeyPress"
      />
      <template v-slot:append>
        <vf-a-button color="primary" @click="doSearch">
          <vf-a-icon icon="search" />
        </vf-a-button>
      </template>
    </vf-m-input-group>
  </div>
</template>
<script>
    import { oSearchInlineForm } from 'vuefront/lib/components/organisms/search-inline-form'
    export default {
        mixins: [oSearchInlineForm]
    }
</script>
<style lang="scss">
  .vf-o-search-inline-form--opencart {
    .vf-a-input,
    .vf-a-button {
      padding: 10px 25px !important;
      font-size: 12px !important;
      height: 40px;
    }
  }

  .vf-o-search-inline-form--wrapper {
    padding: 5px;
    background-color: #fbfbfb;
    border-radius: 0.3125rem;
    .vf-a-input,
    .vf-a-button {
      border: none;
      box-shadow: none;
      border-radius: 0;
      font-size: 1rem;
    }
    .vf-a-input {
      background-color: transparent;
    }
    .input-group > .input-group-append > .btn.vf-a-button {
      border-radius: 0.3125rem;
      padding: 10px 20px !important;
    }
  }
</style>


