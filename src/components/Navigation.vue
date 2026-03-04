<template>
  <nav class="navigation fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="text-xl font-bold tracking-wider hover:text-gray-300 transition-colors">
          PET & FOOD
        </router-link>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
            active-class="text-white font-semibold"
          >
            Главная
          </router-link>
          <router-link 
            to="/about" 
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
            active-class="text-white font-semibold"
          >
            О компании
          </router-link>
          <router-link 
            to="/favorites" 
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
            active-class="text-white font-semibold"
          >
            Избранное
          </router-link>
          <router-link 
            to="/cart" 
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors relative"
            active-class="text-white font-semibold"
          >
            Корзина
            <span 
              v-if="cartCount > 0" 
              class="absolute -top-2 -right-3 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
            >
              {{ cartCount }}
            </span>
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-2xl"
        >
          {{ mobileMenuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden py-4 border-t border-gray-800"
      >
        <div class="flex flex-col space-y-4">
          <router-link 
            to="/" 
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
          >
            Главная
          </router-link>
          <router-link 
            to="/about" 
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
          >
            О компании
          </router-link>
          <router-link 
            to="/favorites" 
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
          >
            Избранное
          </router-link>
          <router-link 
            to="/cart" 
            @click="mobileMenuOpen = false"
            class="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors relative"
          >
            Корзина
            <span 
              v-if="cartCount > 0" 
              class="inline-block ml-2 bg-white text-black text-xs px-2 py-0.5 rounded-full font-bold"
            >
              {{ cartCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '../store/useStore'

const { cartCount } = useStore()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.navigation {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
