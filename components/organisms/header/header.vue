<template>
    <section class="header">
        <div class="topbar">
            <vf-m-container>
                <vf-m-row class="topbar mb-3 py-2">
                    <vf-m-col align-self="center" class="text-sm-left">
                        <vf-o-currency/>
                        <vf-o-language/>
                    </vf-m-col>
                    <vf-m-col align-self="center" class="text-sm-right">
                        <vf-m-compare-link class="ml-auto"/>
                        <vf-m-wishlist-link/>
                        <vf-m-account-menu/>
                    </vf-m-col>
                </vf-m-row>
            </vf-m-container>
        </div>
        <div class="middlebar">
            <vf-m-container>
                <vf-m-row>
                    <vf-m-col md class="text-md-left py-2" align-self="center">
                        <vf-m-logo/>
                    </vf-m-col>
                    <vf-m-col md align-self="center">
                        <vf-o-search-inline-form class="mx-auto"/>
                    </vf-m-col>
                    <vf-m-col md="3" class="text-md-right" align-self="center">
                        <vf-m-cart-link/>
                    </vf-m-col>
                </vf-m-row>
            </vf-m-container>
        </div>
        <vf-m-container>
            <vf-o-position name="headerMenu"/>
        </vf-m-container>
    </section>
</template>
<script>
    import "./header.scss";
    import {oHeader} from "vuefront/lib/components/organisms/header";

    export default {
        mixins: [oHeader]
    };
</script>
