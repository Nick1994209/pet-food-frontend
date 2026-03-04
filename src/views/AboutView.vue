<template>
  <div class="about-view min-h-screen bg-black text-white">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl md:text-5xl font-bold mb-16 text-center">О КОМПАНИИ</h1>
      
      <div class="max-w-4xl mx-auto">
        <div class="manifesto-section mb-20">
          <h2 class="text-3xl md:text-4xl font-semibold mb-8 text-center">НАШ МАНИФЕСТ</h2>
          
          <div class="space-y-8 text-lg md:text-xl leading-relaxed">
            <p class="manifesto-paragraph">
              Мы верим, что каждый питомец заслуживает питания, созданного с той же страстью и мастерством, 
              что и лучшие блюда для гурманов. PET & FOOD — это не просто бренд, это движение за переосмысление 
              того, что значит кормить любимца.
            </p>
            
            <p class="manifesto-paragraph">
              В мире, где массовое производство стало нормой, мы выбираем путь исключительности. 
              Каждый ингредиент в наших продуктах — это результат тщательного отбора, 
              каждый рецепт — это симфония вкусов, созданная экспертами-нутрициологами.
            </p>
            
            <p class="manifesto-paragraph">
              Мы не идем на компромиссы. Никаких искусственных добавок, никаких заменителей, 
              никаких сокращений. Только чистое, натуральное питание высочайшего качества, 
              которое мы бы с радостью подавали на собственном столе.
            </p>
            
            <p class="manifesto-paragraph">
              Наша миссия — превратить каждый прием пищи вашего питомца в праздник. 
              Мы создаем не просто корм, мы создаем моменты радости, здоровья и гармонии 
              между вами и вашим любимцем.
            </p>
            
            <p class="manifesto-paragraph">
              PET & FOOD — это выбор тех, кто понимает: качество жизни питомца напрямую зависит 
              от качества его питания. Мы здесь для тех, кто не согласен на «достаточно хорошо», 
              кто стремится к совершенству во всём.
            </p>
            
            <p class="manifesto-paragraph font-semibold text-2xl text-center mt-12">
              ИЗБРАННОЕ ПИТАНИЕ ДЛЯ ИЗБРАННЫХ ПИТОМЦЕВ
            </p>
          </div>
        </div>

        <div class="values-section grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div class="value-card text-center p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <div class="text-5xl mb-4">🌿</div>
            <h3 class="text-xl font-semibold mb-3">НАТУРАЛЬНОСТЬ</h3>
            <p class="text-gray-400">Только натуральные ингредиенты без искусственных добавок и консервантов</p>
          </div>
          
          <div class="value-card text-center p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <div class="text-5xl mb-4">⭐</div>
            <h3 class="text-xl font-semibold mb-3">КАЧЕСТВО</h3>
            <p class="text-gray-400">Строгий контроль на каждом этапе производства от фермы до упаковки</p>
          </div>
          
          <div class="value-card text-center p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300">
            <div class="text-5xl mb-4">💚</div>
            <h3 class="text-xl font-semibold mb-3">ЛЮБОВЬ</h3>
            <p class="text-gray-400">Каждый продукт создан с любовью и заботой о здоровье вашего питомца</p>
          </div>
        </div>

        <div class="story-section text-center">
          <h2 class="text-3xl md:text-4xl font-semibold mb-8">НАША ИСТОРИЯ</h2>
          <p class="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            PET & FOOD родился из простой, но мощной идеи: питомцы заслуживают того же уровня заботы и внимания, 
            что и мы сами. Основатели бренда — эксперты в области ветеринарии и кулинарии — объединили свои знания, 
            чтобы создать питание, которое не просто насыщает, но и приносит радость.
          </p>
          <p class="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mt-6">
            Сегодня мы гордимся тем, что тысячи питомцев по всей стране наслаждаются нашими продуктами, 
            а их владельцы спят спокойно, зная, что их любимцы получают лучшее.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const manifestoParagraphs = ref<HTMLElement[]>([])

onMounted(() => {
  const paragraphs = document.querySelectorAll('.manifesto-paragraph')
  paragraphs.forEach((p, index) => {
    gsap.fromTo(p, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay: index * 0.2,
        ease: "power3.out"
      }
    )
  })

  const valueCards = document.querySelectorAll('.value-card')
  valueCards.forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5 + (index * 0.2),
        ease: "power3.out"
      }
    )
  })
})
</script>

<style scoped>
.manifesto-paragraph {
  opacity: 0;
}

.value-card {
  opacity: 0;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
}
</style>
