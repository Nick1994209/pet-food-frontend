<template>
  <div class="home">
    <!-- Hero Section -->
    <section ref="heroSection" class="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-black z-0"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 ref="heroTitle" class="text-5xl md:text-7xl font-bold mb-6 tracking-tight opacity-0">PET & FOOD</h1>
        <p ref="heroSubtitle" class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light opacity-0">Избранное питание для избранных питомцев</p>
        <button ref="exploreButton" class="explore-button border border-white px-8 py-3 text-lg opacity-0 hover:bg-white hover:text-black transition-all duration-500 ease-out">
          ИССЛЕДОВАТЬ
        </button>
      </div>
    </section>

    <!-- Brand Philosophy Section -->
    <section ref="philosophySection" class="philosophy-section py-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-16">
          <h2 ref="philosophyTitle" class="text-3xl md:text-4xl font-semibold mb-6 opacity-0">ФИЛОСОФИЯ БРЕНДА</h2>
        </div>
        <div class="philosophy-content">
          <p ref="philosophyText1" class="text-lg md:text-xl leading-relaxed text-center mb-8 opacity-0">
            Мы верим, что каждый питомец достоин безупречного питания, созданного с любовью и вниманием к деталям. 
            Наша философия основана на принципах кулинарного мастерства и курируемом качестве.
          </p>
          <p ref="philosophyText2" class="text-lg md:text-xl leading-relaxed text-center opacity-0">
            Каждый ингредиент тщательно отобран для создания исключительного состава, 
            который обеспечивает оптимальное здоровье и благополучие вашего любимца.
          </p>
        </div>
      </div>
    </section>

    <!-- Collection Section -->
    <section class="collection-section py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 ref="collectionTitle" class="text-3xl md:text-4xl font-semibold mb-6 opacity-0">КОЛЛЕКЦИЯ</h2>
        </div>
        
          <!-- Horizontal Swipe Container -->
        <div 
          ref="swipeContainer"
          class="swipe-container overflow-hidden cursor-grab active:cursor-grabbing"
          @mousedown="startSwipe"
          @touchstart="startSwipe"
          @mousemove="onSwipe"
          @touchmove="onSwipe"
          @mouseup="endSwipe"
          @touchend="endSwipe"
          @mouseleave="endSwipe"
        >
          <div 
            ref="swipeTrack"
            class="swipe-track flex gap-8 transition-transform duration-0"
            :style="{ transform: `translateX(${swipeOffset}px)` }"
          >
            <!-- Product Cards -->
            <div 
              v-for="(product, index) in products"
              :key="product.id"
              :ref="el => { if (el) productCards[index] = el as HTMLElement }"
              class="product-card group opacity-0 flex-shrink-0 w-full md:w-[calc(33.333%-21px)] cursor-pointer"
              :style="{ transform: `rotate(${cardRotations[index] || 0}deg)` }"
              @click="openModal(product)"
            >
              <div class="overflow-hidden mb-6">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full aspect-square object-cover"
                />
              </div>
              <h3 class="text-2xl font-medium mb-2">{{ product.name }}</h3>
              <p class="text-lg mb-4">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <div class="price text-xl">₽ {{ product.price.toLocaleString() }}</div>
                <div class="flex gap-2">
                  <button 
                    @click.stop="toggleFavorite(product)"
                    class="text-2xl hover:scale-110 transition-transform duration-300"
                  >
                    {{ isFavorite(product.id) ? '❤️' : '🤍' }}
                  </button>
                  <button 
                    @click.stop="addToCart(product)"
                    class="bg-white text-black px-4 py-2 text-sm hover:bg-gray-200 transition-all duration-300"
                  >
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer ref="footer" class="footer py-12 px-4 border-t border-gray-800">
      <div class="container mx-auto text-center">
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4">PET & FOOD</h3>
          <p class="text-sm uppercase tracking-widest">Премиальное питание для избранных</p>
        </div>
        <div class="contact-info mb-8">
          <p class="text-sm mb-2">ИНФОРМАЦИЯ@PET-FOOD.RU</p>
          <p class="text-sm mb-2">+7 (495) 123-45-67</p>
          <p class="text-sm">МОСКВА, УЛ. ПРЕМИУМ, 1</p>
        </div>
        <div class="social-links mb-8">
          <ul class="flex justify-center space-x-6">
            <li><a href="#" class="text-sm uppercase tracking-widest hover:underline">Instagram</a></li>
            <li><a href="#" class="text-sm uppercase tracking-widest hover:underline">Facebook</a></li>
            <li><a href="#" class="text-sm uppercase tracking-widest hover:underline">Twitter</a></li>
          </ul>
        </div>
        <div class="copyright">
          <p class="text-xs uppercase tracking-widest">© 2025 PET & FOOD. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </div>
    </footer>

    <!-- Product Modal -->
    <div 
      v-if="selectedProduct"
      class="modal-overlay fixed inset-0 z-50 flex items-center justify-center"
      @click="closeModal"
    >
      <div 
        class="modal-content bg-black/90 p-8 md:p-12 max-w-2xl w-full mx-4 relative"
        @click.stop
      >
        <button 
          @click="closeModal"
          class="modal-close absolute top-4 right-4 text-white text-3xl hover:text-black hover:bg-white transition-all duration-300 w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>
        
        <h2 class="modal-title text-white text-3xl md:text-[32px] font-medium mb-6" style="font-family: 'Playfair Display', serif;">
          {{ selectedProduct.name }}
        </h2>
        
        <div class="mb-6">
          <h3 class="text-white text-lg mb-3" style="font-family: 'Inter', sans-serif;">Состав:</h3>
          <p class="text-[#888888] text-[14px] leading-relaxed" style="font-family: 'Inter', sans-serif;">
            {{ selectedProduct.ingredients }}
          </p>
        </div>
        
        <div class="mb-6">
          <h3 class="text-white text-lg mb-3" style="font-family: 'Inter', sans-serif;">Рекомендация:</h3>
          <p class="text-white text-[16px] leading-relaxed" style="font-family: 'Inter', sans-serif;">
            {{ selectedProduct.recommendation }}
          </p>
        </div>
        
        <div class="mb-8">
          <h3 class="text-white text-lg mb-3" style="font-family: 'Inter', sans-serif;">Особенность:</h3>
          <p class="text-white text-[16px] leading-relaxed italic" style="font-family: 'Inter', sans-serif;">
            {{ selectedProduct.feature }}
          </p>
        </div>
        
        <div class="flex items-center justify-between">
          <div class="text-white text-2xl" style="font-family: 'Inter', sans-serif;">₽ {{ selectedProduct.price.toLocaleString() }}</div>
          <button 
            @click="addToCart(selectedProduct); closeModal()"
            class="bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition-all duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            В КОРЗИНУ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useStore } from '../store/useStore'
import type { Product } from '../store/useStore'

// Store
const { state, addToCart, toggleFavorite, isFavorite } = useStore()
const products = state.products

// Modal state
const selectedProduct = ref<Product | null>(null)

// Modal functions
const openModal = (product: Product) => {
  selectedProduct.value = product
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProduct.value = null
  document.body.style.overflow = ''
}

// Refs for animation elements
const heroSection = ref<HTMLElement | null>(null)
const heroTitle = ref<HTMLElement | null>(null)
const heroSubtitle = ref<HTMLElement | null>(null)
const exploreButton = ref<HTMLElement | null>(null)
const philosophySection = ref<HTMLElement | null>(null)
const philosophyTitle = ref<HTMLElement | null>(null)
const philosophyText1 = ref<HTMLElement | null>(null)
const philosophyText2 = ref<HTMLElement | null>(null)
const collectionTitle = ref<HTMLElement | null>(null)
const productCards = ref<HTMLElement[]>([])
const footer = ref<HTMLElement | null>(null)

// Swipe functionality
const swipeContainer = ref<HTMLElement | null>(null)
const swipeTrack = ref<HTMLElement | null>(null)
const swipeOffset = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const cardRotations = ref<number[]>([])

const startSwipe = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  startX.value = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
  currentX.value = swipeOffset.value
  if (swipeTrack.value) {
    swipeTrack.value.style.transition = 'none'
  }
}

const onSwipe = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return
  const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX
  const deltaX = clientX - startX.value
  swipeOffset.value = currentX.value + deltaX
  
  // Calculate card rotations based on swipe position for all products
  const rotationFactor = 0.05
  cardRotations.value = products.map((_, index) => {
    const factor = Math.max(0.3, 1 - index * 0.1)
    return Math.min(Math.max(deltaX * rotationFactor * factor, -5), 5)
  })
}

const endSwipe = () => {
  if (!isDragging.value) return
  isDragging.value = false
  
  // Inertia effect
  const velocity = swipeOffset.value - currentX.value
  const inertia = velocity * 0.3
  const targetOffset = swipeOffset.value + inertia
  
  // Clamp offset
  const maxOffset = 0
  const minOffset = -200
  swipeOffset.value = Math.min(Math.max(targetOffset, minOffset), maxOffset)
  
  // Reset card rotations
  cardRotations.value = products.map(() => 0)
  
  if (swipeTrack.value) {
    swipeTrack.value.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
}

// Parallax effect for hero section
const initParallax = () => {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    if (heroSection.value) {
      heroSection.value.style.backgroundPositionY = `${scrollPosition * 0.5}px`
    }
  })
}

// Scroll animations
const initScrollAnimations = () => {
  // Hero section animations
  if (heroTitle.value && heroSubtitle.value && exploreButton.value) {
    gsap.to(heroTitle.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    
    gsap.to(heroSubtitle.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    })
    
    gsap.to(exploreButton.value, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.6,
      ease: "power3.out"
    })
  }

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Philosophy section animations
        if (entry.target === philosophyTitle.value) {
          gsap.to(philosophyTitle.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          })
        } else if (entry.target === philosophyText1.value) {
          gsap.to(philosophyText1.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: "power3.out"
          })
        } else if (entry.target === philosophyText2.value) {
          gsap.to(philosophyText2.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.4,
            ease: "power3.out"
          })
        } else if (entry.target === collectionTitle.value) {
          gsap.to(collectionTitle.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          })
        } else if (productCards.value.includes(entry.target as HTMLElement)) {
          const index = productCards.value.indexOf(entry.target as HTMLElement)
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out"
          })
        } else if (entry.target === footer.value) {
          gsap.to(footer.value, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          })
        }
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  })

  // Observe elements
  if (philosophyTitle.value) observer.observe(philosophyTitle.value)
  if (philosophyText1.value) observer.observe(philosophyText1.value)
  if (philosophyText2.value) observer.observe(philosophyText2.value)
  if (collectionTitle.value) observer.observe(collectionTitle.value)
  productCards.value.forEach(card => observer.observe(card))
  if (footer.value) observer.observe(footer.value)
}

onMounted(() => {
  // Initialize animations
  initParallax()
  initScrollAnimations()
  
  // Set initial positions for animations
  if (heroTitle.value) gsap.set(heroTitle.value, { y: 30 })
  if (heroSubtitle.value) gsap.set(heroSubtitle.value, { y: 30 })
  if (exploreButton.value) gsap.set(exploreButton.value, { y: 30 })
  if (philosophyTitle.value) gsap.set(philosophyTitle.value, { y: 30 })
  if (philosophyText1.value) gsap.set(philosophyText1.value, { y: 30 })
  if (philosophyText2.value) gsap.set(philosophyText2.value, { y: 30 })
  if (collectionTitle.value) gsap.set(collectionTitle.value, { y: 30 })
  productCards.value.forEach(card => gsap.set(card, { y: 30 }))
  if (footer.value) gsap.set(footer.value, { y: 30 })
})
</script>

<style scoped>
.hero-section {
  background-color: #050505;
  background-size: cover;
  background-position: center;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7));
  z-index: 1;
}

.explore-button {
  letter-spacing: 0.2em;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.explore-button:hover {
  letter-spacing: 0.3em;
}

.philosophy-section {
  background-color: #050505;
}

.collection-section {
  background-color: #1a1a1a;
}

.swipe-container {
  user-select: none;
  -webkit-user-select: none;
  touch-action: pan-y;
}

.swipe-track {
  will-change: transform;
}

.product-card {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card .overflow-hidden {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card:hover .overflow-hidden {
  transform: scale(1.05);
}

.footer {
  background-color: #050505;
}

/* Modal Styles */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.9);
  animation: fadeIn 0.4s ease-out;
}

.modal-content {
  animation: modalScale 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-close {
  transition: all 0.3s ease;
}

.modal-close:hover {
  transform: rotate(90deg);
}
</style>