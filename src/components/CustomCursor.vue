<template>
  <div class="custom-cursor" :class="{ 'is-hovering': isHovering }">
    <div class="cursor-dot"></div>
    <div class="cursor-outline"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isHovering = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  const cursor = document.querySelector('.custom-cursor') as HTMLElement
  const dot = document.querySelector('.cursor-dot') as HTMLElement
  const outline = document.querySelector('.cursor-outline') as HTMLElement
  
  if (cursor && dot && outline) {
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
    
    // Add slight delay to outline for smooth effect
    setTimeout(() => {
      outline.style.left = `${e.clientX}px`
      outline.style.top = `${e.clientY}px`
    }, 50)
  }
}

const handleMouseOver = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
    isHovering.value = true
  }
}

const handleMouseOut = () => {
  isHovering.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}

.cursor-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.cursor-outline {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.custom-cursor.is-hovering .cursor-dot {
  width: 12px;
  height: 12px;
}

.custom-cursor.is-hovering .cursor-outline {
  width: 60px;
  height: 60px;
}

@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
}
</style>