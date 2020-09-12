<template>
    <nuxt-link :to="to" :exact="exact">
        <slot></slot>
    </nuxt-link>
</template>
<script>
    import {aLink} from "vuefront/lib/components/atoms/link";

    export default {
        mixins: [aLink],
        props: {
            exact: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
