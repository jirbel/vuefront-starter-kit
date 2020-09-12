<template>
    <b-container>
        <slot></slot>
    </b-container>
</template>
<script>
    import {mContainer} from "vuefront/lib/components/molecules/container";

    export default {
        mixins: [mContainer]
    };
</script>
