<template>
    <div class="vf-l-o-breadcrumb">
        <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
            <vf-m-row>
                <vf-m-col sm="3" md="1" align-self="center">
                    <tb-skeleton height="24px" />
                </vf-m-col>
                <vf-m-col sm="3" md="1" align-self="center">
                    <tb-skeleton height="24px" />
                </vf-m-col>
                <vf-m-col sm="6" md="10" align-self="center">
                    <tb-skeleton height="24px" />
                </vf-m-col>
            </vf-m-row>
        </skeleton>
    </div>
</template>

<script>
    import { lOBreadcrumb } from 'vuefront/lib/components/organisms/breadcrumb'
    export default {
        mixins: [lOBreadcrumb]
    }
</script>
