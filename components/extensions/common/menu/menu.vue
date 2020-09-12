<template>
  <section class="vf-e-common-menu">
    <div class="vf-e-common-menu__item">
      <vf-a-link to="/" exact class="vf-e-common-menu__link">
        <span v-b-toggle.menu-collapse class="nav-menu-section__item_title body-2">
          <vf-a-icon
            icon="home"
          />
        </span>
      </vf-a-link>
    </div>
    <div v-for="(item, index) in menuItems" :key="index" class="vf-e-common-menu__item">
      <vf-a-link :to="item.to" class="vf-e-common-menu__link">
        <span v-b-toggle.menu-collapse class="vf-e-common-menu__title">
          {{ item.title }}
        </span>
        <vf-a-icon
          v-if="item.children && item.children.length > 0"
          icon="angle-down"
          class="vf-e-common-menu__icon"
        />
      </vf-a-link>
      <div
        v-if="item.children && item.children.length > 0"
        class="vf-e-common-menu__submenu vf-e-common-menu__submenu--vertical"
        :class="[ ( item.children.length > 5 && item.children.length <= 10 ? 'vf-e-common-menu__submenu--two-columns' : ''), (item.children.length > 10 ? 'vf-e-common-menu__submenu--three-columns': '' ) ]"
      >
        <div v-for="(subItem, key) in item.children" :key="key" class="vf-e-common-menu__item">
          <vf-a-link
            v-b-toggle.menu-collapse
            :to="subItem.to"
            class="vf-e-common-menu__link vf-e-common-menu__link--lg"
          >
            <span class="vf-e-common-menu__title">
              {{ subItem.title }}
            </span>
            <vf-a-icon
              v-if="subItem.children.length > 0"
              icon="angle-right"
              class="vf-e-common-menu__icon vf-e-common-menu__icon--float"
            />
          </vf-a-link>
          <div
            v-if="subItem.children.length > 0"
            class="vf-e-common-menu__submenu vf-e-common-menu__submenu--horizontal"
          >
            <div
              v-for="(value, subKey) in subItem.children"
              :key="subKey"
              v-b-toggle.menu-collapse
              class="vf-e-common-menu__item"
            >
              <vf-a-link :to="value.to" class="vf-e-common-menu__link vf-e-common-menu__link--md">
                <span class="vf-e-common-menu__title">
                  {{ value.title }}
                </span>
              </vf-a-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { eMenu } from 'vuefront/lib/components/extensions/common/menu'

export default {
  mixins: [eMenu],
  name: 'eMenu'
}
</script>
