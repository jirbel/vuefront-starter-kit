<template>
    <vf-m-container :class="{'vf-o-breadcrumb-has-items': breadcrumbs.length > 0}" class="vf-o-breadcrumb">
        <vf-m-breadcrumb v-if="loaded && breadcrumbs.length > 0">
            <vf-m-breadcrumb-item>{{$t('elements.common.home.titleText')}}</vf-m-breadcrumb-item>
            <vf-m-breadcrumb-item
                    v-for="(value, key) in breadcrumbs"
                    :key="key"
                    :to="value.to"
            >{{ value.title }}</vf-m-breadcrumb-item>
        </vf-m-breadcrumb>
        <vf-l-o-breadcrumb v-else-if="!loaded" />
    </vf-m-container>
</template>
<script>
    // import { oBreadcrumb } from 'vuefront/lib/components/organisms/breadcrumb'
    import { mapGetters } from "vuex";
    export default {
        // mixins: [oBreadcrumb],
        computed: {
            ...mapGetters({
                breadcrumbs: "common/breadcrumbs/get",
                loaded: "common/breadcrumbs/loaded"
            })
        }
    };
</script>
