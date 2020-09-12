<template>
    <div class="vf-o-position" :class="`vf-o-position--${name}`">
        <slot v-if="modules.length === 0"></slot>
        <div
                v-else
                v-for="(value, index) in modules"
                :key="index"
                :is="$vuefront.extensions[value.component]"
                v-bind="value.props"
                class="vf-o-position__module"
        ></div>
    </div>
</template>
<script>
    import { oPosition } from 'vuefront/lib/components/organisms/position'

    export default {
        mixins: [oPosition]
    }
</script>
