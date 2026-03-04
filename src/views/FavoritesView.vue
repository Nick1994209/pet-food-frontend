<template>
  <div class="favorites-view min-h-screen bg-black text-white">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center">ИЗБРАННОЕ</h1>
      
      <div v-if="favoriteItems.length === 0" class="text-center py-20">
        <div class="text-6xl mb-6">❤️</div>
        <p class="text-xl text-gray-400">Ваш список избранного пуст</p>
        <router-link to="/" class="inline-block mt-8 border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
          ВЕРНУТЬСЯ В КАТАЛОГ
        </router-link>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="item in favoriteItems" 
          :key="item.id"
          class="favorite-card group"
        >
          <div class="overflow-hidden mb-6">
            <img 
              :src="item.image" 
              :alt="item.name"
              class="w-full aspect-square object-cover"
            />
          </div>
          <h3 class="text-2xl font-medium mb-2">{{ item.name }}</h3>
          <p class="text-lg mb-4 text-gray-400">{{ item.description }}</p>
          <div class="flex items-center justify-between">
            <div class="price text-xl">₽ {{ item.price.toLocaleString() }}</div>
            <button 
              @click="toggleFavorite(item)"
              class="text-3xl hover:scale-110 transition-transform duration-300"
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../store/useStore'

const { state, toggleFavorite } = useStore()

const favoriteItems = computed(() => state.favorites)
</script>

<style scoped>
.favorite-card {
  animation: fadeIn 0.4s ease-out;
}

.favorite-card:nth-child(1) { animation-delay: 0s; }
.favorite-card:nth-child(2) { animation-delay: 0.1s; }
.favorite-card:nth-child(3) { animation-delay: 0.2s; }

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.favorite-card .overflow-hidden {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.favorite-card:hover .overflow-hidden {
  transform: scale(1.05);
}
</style>
