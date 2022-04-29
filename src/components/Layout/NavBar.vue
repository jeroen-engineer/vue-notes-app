<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <strong>VUE NOTES</strong>
        </div>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        @click.prevent="showMobileNav = !showMobileNav"
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">
            Notes
          </RouterLink>

          <RouterLink to="/stats" class="navbar-item" active-class="is-active">
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
//IMPORTS=============================================IMPORTS//
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

//MOBILE_NAV==========================================MOBILE_NAV//
const showMobileNav = ref(false);

//CLICK_OUTSIDE_TO_CLOSE=================CLICK_OUTSIDE_TO_CLOSE//
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);
onClickOutside(
  navbarMenuRef,
  () => {
    showMobileNav.value = false;
  },
  {
    ignore: [navbarBurgerRef],
  }
);
</script>

<style>
@media (max-width: 1021px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
