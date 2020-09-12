export default {

    // To intall a VueFront WordPress Default theme, run `yarn add @vuefront/theme-wordpress` and uncomment:
    //theme: '@vuefront/theme-wordpress',

    app: ['@vuefront/checkout-app'],
    css: {
        bootstrap: '@/assets/css/bootstrap.scss',
        theme: '@/assets/css/theme.scss',
        oHeader: '@/components/organisms/header/header.scss',
        eMenu: '@/components/extensions/common/menu/menu.scss',
        eCategory: '@/components/extensions/store/category/category.scss',
        mAccountMenu:'@/components/molecules/account-menu/account-menu.scss',
        oBreadcrumb:'@/components/organisms/breadcrumb/breadcrumb.scss',
    },
    image: {
        logo: {
            width: '380',
            height: '50',
            path: '~/assets/img/logo_header.png'
        },
        footerLogo: {
            path: '~/assets/img/logo_footer.svg'
        }
    },
    layouts: {
        '*': {
            headerMenu: [
                [
                    'Menu',
                    {
                        items: ['store', 'blog']
                    }
                ]
            ],
            footerLeft: ['Pages'],
            footerCenter: ['AccountLinks'],
            footerRight: [
                [
                    'ExtraLinks',
                    {
                        links: [{
                                to: '/store/special',
                                text: 'Special'
                            },
                            {
                                to: '/store/compare',
                                text: 'Compare'
                            },
                            {
                                to: '/contact',
                                text: 'Contact Us'
                            }
                        ]
                    }
                ]
            ]
        },
        '/': {
            contentTop: [
                [
                    'Slideshow',
                    {
                        items: [
                            // 'https://opencart.vuefront.com/image/cache/catalog/demo/banners/MacBookAir-1140x380.jpg',
                            // 'https://opencart.vuefront.com/image/cache/catalog/demo/banners/iPhone6-1140x380.jpg'
                            '/chameleon2-0.png'
                        ]
                    }
                ],
                [
                    'FeaturedProduct',
                    {
                        ids: JSON.parse(process.env.FEATURED_PRODUCT)
                    }
                ],
                'LatestProduct',
                'SpecialProduct',
                'LatestPost'
            ]
        },
        '/search/*': {
            contentBottom: ['SearchProduct', 'SearchPost']
        },
        '/store/category*': {
            columnLeft: [
                'StoreCategory', [
                    /* 'LatestProduct',
                    {
                        column: true
                    } */
                ]
            ]
        },
        '/blog/category*': {
            columnRight: [
                'Search',
                'BlogCategory', [
                    'LatestPost',
                    {
                        column: true
                    }
                ]
            ]
        },
        '/store/product/*': {
            contentBottom: ['RelatedProduct']
        },
        '/blog/post*': {
            columnRight: [
                [
                    'LatestPost',
                    {
                        column: true
                    }
                ]
            ]
        },
        '/account*': {
            columnRight: ['Account']
        },
        '/store/checkout': {
            contentTop: ['Checkout']
        }
    },
    atoms: {},
    molecules: {
        CartLink: '~/components/molecules/cart-link/cart-link.vue'
    },
    organisms: {
        Header: '~/components/organisms/header/header.vue',
        SearchInlineForm: '~/components/organisms/search-inline-form/search-inline-form.vue',
        Breadcrumb: '~/components/organisms/breadcrumb/breadcrumb.vue',
        Position: '~/components/organisms/position/position.vue'
    },
    templates: {},
    pages: {},
    loaders: {
        OBreadcrumb: '~/components/organisms/breadcrumb/breadcrumb.loader.vue'
    },
    extensions: {
        Menu: '~/components/extensions/common/menu/menu.vue',
        Slideshow: '~/components/extensions/common/slideshow/slideshow.vue',
        StoreCategory: '~/components/extensions/store/category/category.vue'
    }
}
