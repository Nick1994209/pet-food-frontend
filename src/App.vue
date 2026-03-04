<template>
  <div id="app">
    <CustomCursor />
    <Navigation />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import CustomCursor from './components/CustomCursor.vue'
import Navigation from './components/Navigation.vue'
</script>

<style>
/* Global styles will be imported via main.ts */

.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.02);
}

/* Shared element transitions */
.shared-element-enter-active,
.shared-element-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.shared-element-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.shared-element-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

/* Cart item animation */
.cart-item-enter-active {
  animation: cartItemIn 0.3s ease-out;
}

.cart-item-leave-active {
  animation: cartItemOut 0.3s ease-in;
}

@keyframes cartItemIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes cartItemOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
}

/* Favorite heart animation */
.heart-enter-active {
  animation: heartPop 0.3s ease-out;
}

@keyframes heartPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>