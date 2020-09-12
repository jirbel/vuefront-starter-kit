<template>
    <b-button
            v-on="$listeners"
            v-bind="$attrs"
            :variant="color"
            :to="to"
            :nuxt="nuxt"
            :disabled="disabled"
            :pressed="pressed"
            :active="active"
            :type="type"
            :pill="rounded"
            :size="size"
            :class="{'vf-a-button__animated': animatedX || animatedY, 'vf-a-button__animated-x': animatedX, 'vf-a-button__animated-y': animatedY }"
            class="vf-a-button"
    >
        <slot></slot>
        <span v-if="$slots.visible" class="btn-inner--visible">
      <slot name="visible"></slot>
    </span>
        <span v-if="$slots.hidden" class="btn-inner--hidden">
      <slot name="hidden"></slot>
    </span>
    </b-button>
</template>
<script>
    import {aButton} from "vuefront/lib/components/atoms/button";

    export default {
        mixins: [aButton],
        props: {
            size: {
                type: String,
                default() {
                    return "md";
                }
            }
        }
    };
</script>
