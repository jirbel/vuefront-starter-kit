<template>
  <b-carousel v-model="active" class="vf-e-common-slideshow mb-5" :interval="4000" controls indicators>
    <b-carousel-slide v-for="(item,i) in items" :key="i" :img-src="item">
      <template v-if="$vuefront.isAMP" #img>
        <amp-img :src="item" width="1110" height="370" />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>
<script>
import { eSlideshow } from 'vuefront/lib/components/extensions/common/slideshow'
export default {
  mixins: [eSlideshow],
  name: 'eSlideshow'
}
</script>
