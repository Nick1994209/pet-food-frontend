<template>
  <div class="cart-view min-h-screen bg-black text-white">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl md:text-5xl font-bold mb-12 text-center">КОРЗИНА</h1>
      
      <div v-if="cartItems.length === 0" class="text-center py-20">
        <div class="text-6xl mb-6">🛒</div>
        <p class="text-xl text-gray-400">Ваша корзина пуста</p>
        <router-link to="/" class="inline-block mt-8 border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
          ВЕРНУТЬСЯ В КАТАЛОГ
        </router-link>
      </div>

      <div v-else class="max-w-4xl mx-auto">
        <transition-group name="cart-item" tag="div" class="space-y-6 mb-12">
          <div 
            v-for="item in cartItems" 
            :key="item.id"
            class="cart-item flex items-center justify-between p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
          >
            <div class="flex items-center gap-6">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-20 h-20 object-cover"
              />
              <div>
                <h3 class="text-xl font-medium mb-1">{{ item.name }}</h3>
                <p class="text-gray-400">{{ item.description }}</p>
                <p class="text-lg mt-2">₽ {{ item.price.toLocaleString() }}</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-3">
                <button 
                  @click="removeFromCart(item.id)"
                  class="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  -
                </button>
                <span class="text-xl w-8 text-center">{{ item.quantity }}</span>
                <button 
                  @click="addToCart(item)"
                  class="w-10 h-10 border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  +
                </button>
              </div>
              <div class="text-xl font-medium w-32 text-right">
                ₽ {{ (item.price * item.quantity).toLocaleString() }}
              </div>
            </div>
          </div>
        </transition-group>

        <div class="border-t border-gray-800 pt-8">
          <div class="flex justify-between items-center mb-8">
            <span class="text-xl">ИТОГО:</span>
            <span class="text-3xl font-bold">₽ {{ cartTotal.toLocaleString() }}</span>
          </div>
          
          <div class="flex gap-4 justify-center">
            <button 
              @click="clearCart"
              class="border border-gray-600 px-8 py-3 hover:bg-gray-800 transition-all duration-300"
            >
              ОЧИСТИТЬ КОРЗИНУ
            </button>
            <button 
              @click="checkout"
              class="bg-white text-black px-8 py-3 hover:bg-gray-200 transition-all duration-300 font-medium"
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store/useStore'

const router = useRouter()
const { state, addToCart, removeFromCart, clearCart, cartTotal } = useStore()

const cartItems = computed(() => state.cart)

const checkout = () => {
  router.push('/payment')
}
</script>

<style scoped>
.cart-item {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
