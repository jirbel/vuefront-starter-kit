<template>
    <vf-a-input
            v-model="keyword"
            :placeholder="$t('elements.common.header.navSearch.placeholderText')"
            size="lg"
            :hide-details="!$vuefront.isAMP"
            @keypress.stop="handleKeyPress"
            trim
    />
</template>
<script>
    import {oSearchInlineForm} from "vuefront/lib/components/organisms/search-inline-form";

    export default {
        mixins: [oSearchInlineForm]
    };
</script>
