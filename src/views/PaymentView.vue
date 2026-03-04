<template>
  <div class="payment-page">
    <div class="container">
      <h1 class="page-title">Оформление заказа</h1>
      
      <div class="payment-content">
        <!-- Left Column: Payment Methods and Address -->
        <div class="left-column">
          <!-- Payment Methods Tabs -->
          <div class="payment-methods">
            <h2 class="section-title">Способ оплаты</h2>
            <div class="tabs">
              <button
                v-for="method in paymentMethods"
                :key="method.id"
                :class="['tab', { active: selectedPaymentMethod === method.id }]"
                @click="selectPaymentMethod(method.id)"
              >
                <span class="tab-icon">{{ method.icon }}</span>
                <span class="tab-label">{{ method.label }}</span>
              </button>
            </div>

            <!-- Payment Method Content -->
            <transition name="fade-slide" mode="out-in">
              <!-- Card Payment -->
              <div v-if="selectedPaymentMethod === 'card'" key="card" class="payment-content-panel">
                <div class="card-form">
                  <div class="form-group">
                    <label>Номер карты</label>
                    <input
                      v-model="cardNumber"
                      v-mask="'#### #### #### ####'"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      maxlength="19"
                      @input="validateCardNumber"
                      @blur="validateCardNumber"
                    />
                    <span v-if="errors.cardNumber" class="error-message">{{ errors.cardNumber }}</span>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label>Срок действия</label>
                      <input
                        v-model="cardExpiry"
                        v-mask="'##/##'"
                        type="text"
                        placeholder="MM/YY"
                        maxlength="5"
                        @input="validateCardExpiry"
                        @blur="validateCardExpiry"
                      />
                      <span v-if="errors.cardExpiry" class="error-message">{{ errors.cardExpiry }}</span>
                    </div>

                    <div class="form-group">
                      <label>CVV</label>
                      <input
                        v-model="cardCvv"
                        v-mask="'###'"
                        type="password"
                        placeholder="•••"
                        maxlength="3"
                        @input="validateCardCvv"
                        @blur="validateCardCvv"
                      />
                      <span v-if="errors.cardCvv" class="error-message">{{ errors.cardCvv }}</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Имя на карте</label>
                    <input
                      v-model="cardName"
                      type="text"
                      placeholder="IVAN IVANOV"
                      @input="validateCardName"
                      @blur="validateCardName"
                    />
                    <span v-if="errors.cardName" class="error-message">{{ errors.cardName }}</span>
                  </div>
                </div>
              </div>

              <!-- SBP Payment -->
              <div v-else-if="selectedPaymentMethod === 'sbp'" key="sbp" class="payment-content-panel">
                <div class="sbp-content">
                  <div class="qr-code-container">
                    <div class="qr-code">
                      <svg viewBox="0 0 200 200" class="qr-svg">
                        <!-- QR Code Pattern -->
                        <rect x="10" y="10" width="50" height="50" fill="black"/>
                        <rect x="20" y="20" width="30" height="30" fill="white"/>
                        <rect x="25" y="25" width="20" height="20" fill="black"/>
                        
                        <rect x="140" y="10" width="50" height="50" fill="black"/>
                        <rect x="150" y="20" width="30" height="30" fill="white"/>
                        <rect x="155" y="25" width="20" height="20" fill="black"/>
                        
                        <rect x="10" y="140" width="50" height="50" fill="black"/>
                        <rect x="20" y="150" width="30" height="30" fill="white"/>
                        <rect x="25" y="155" width="20" height="20" fill="black"/>
                        
                        <!-- Random pattern -->
                        <rect x="70" y="10" width="10" height="10" fill="black"/>
                        <rect x="90" y="10" width="10" height="10" fill="black"/>
                        <rect x="110" y="10" width="10" height="10" fill="black"/>
                        <rect x="70" y="30" width="10" height="10" fill="black"/>
                        <rect x="90" y="30" width="10" height="10" fill="black"/>
                        <rect x="110" y="30" width="10" height="10" fill="black"/>
                        <rect x="70" y="50" width="10" height="10" fill="black"/>
                        <rect x="90" y="50" width="10" height="10" fill="black"/>
                        <rect x="110" y="50" width="10" height="10" fill="black"/>
                        
                        <rect x="10" y="70" width="10" height="10" fill="black"/>
                        <rect x="30" y="70" width="10" height="10" fill="black"/>
                        <rect x="50" y="70" width="10" height="10" fill="black"/>
                        <rect x="10" y="90" width="10" height="10" fill="black"/>
                        <rect x="30" y="90" width="10" height="10" fill="black"/>
                        <rect x="50" y="90" width="10" height="10" fill="black"/>
                        <rect x="10" y="110" width="10" height="10" fill="black"/>
                        <rect x="30" y="110" width="10" height="10" fill="black"/>
                        <rect x="50" y="110" width="10" height="10" fill="black"/>
                        
                        <rect x="70" y="70" width="10" height="10" fill="black"/>
                        <rect x="90" y="70" width="10" height="10" fill="black"/>
                        <rect x="110" y="70" width="10" height="10" fill="black"/>
                        <rect x="130" y="70" width="10" height="10" fill="black"/>
                        <rect x="150" y="70" width="10" height="10" fill="black"/>
                        <rect x="170" y="70" width="10" height="10" fill="black"/>
                        <rect x="70" y="90" width="10" height="10" fill="black"/>
                        <rect x="90" y="90" width="10" height="10" fill="black"/>
                        <rect x="110" y="90" width="10" height="10" fill="black"/>
                        <rect x="130" y="90" width="10" height="10" fill="black"/>
                        <rect x="150" y="90" width="10" height="10" fill="black"/>
                        <rect x="170" y="90" width="10" height="10" fill="black"/>
                        <rect x="70" y="110" width="10" height="10" fill="black"/>
                        <rect x="90" y="110" width="10" height="10" fill="black"/>
                        <rect x="110" y="110" width="10" height="10" fill="black"/>
                        <rect x="130" y="110" width="10" height="10" fill="black"/>
                        <rect x="150" y="110" width="10" height="10" fill="black"/>
                        <rect x="170" y="110" width="10" height="10" fill="black"/>
                        
                        <rect x="70" y="140" width="10" height="10" fill="black"/>
                        <rect x="90" y="140" width="10" height="10" fill="black"/>
                        <rect x="110" y="140" width="10" height="10" fill="black"/>
                        <rect x="130" y="140" width="10" height="10" fill="black"/>
                        <rect x="150" y="140" width="10" height="10" fill="black"/>
                        <rect x="170" y="140" width="10" height="10" fill="black"/>
                        <rect x="70" y="160" width="10" height="10" fill="black"/>
                        <rect x="90" y="160" width="10" height="10" fill="black"/>
                        <rect x="110" y="160" width="10" height="10" fill="black"/>
                        <rect x="130" y="160" width="10" height="10" fill="black"/>
                        <rect x="150" y="160" width="10" height="10" fill="black"/>
                        <rect x="170" y="160" width="10" height="10" fill="black"/>
                        <rect x="70" y="180" width="10" height="10" fill="black"/>
                        <rect x="90" y="180" width="10" height="10" fill="black"/>
                        <rect x="110" y="180" width="10" height="10" fill="black"/>
                        <rect x="130" y="180" width="10" height="10" fill="black"/>
                        <rect x="150" y="180" width="10" height="10" fill="black"/>
                        <rect x="170" y="180" width="10" height="10" fill="black"/>
                      </svg>
                    </div>
                    <p class="qr-instruction">Отсканируйте QR-код через приложение банка</p>
                  </div>

                  <div class="timer-container">
                    <div class="timer-label">Время на оплату:</div>
                    <div class="timer" :class="{ 'timer-warning': timeLeft < 300 }">
                      {{ formatTime(timeLeft) }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cash on Delivery -->
              <div v-else-if="selectedPaymentMethod === 'cash'" key="cash" class="payment-content-panel">
                <div class="cash-info">
                  <div class="info-block">
                    <h3>Оплата при получении</h3>
                    <p>Вы можете оплатить заказ наличными или банковской картой при получении курьером.</p>
                  </div>

                  <div class="info-details">
                    <div class="detail-item">
                      <span class="detail-icon">💳</span>
                      <div class="detail-text">
                        <strong>Комиссия:</strong>
                        <span>0 ₽</span>
                      </div>
                    </div>

                    <div class="detail-item">
                      <span class="detail-icon">📦</span>
                      <div class="detail-text">
                        <strong>Срок доставки:</strong>
                        <span>1-3 рабочих дня</span>
                      </div>
                    </div>

                    <div class="detail-item">
                      <span class="detail-icon">🕐</span>
                      <div class="detail-text">
                        <strong>Время доставки:</strong>
                        <span>с 10:00 до 22:00</span>
                      </div>
                    </div>

                    <div class="detail-item">
                      <span class="detail-icon">✅</span>
                      <div class="detail-text">
                        <strong>Проверка заказа:</strong>
                        <span>Возможна при получении</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Delivery Address -->
          <div class="address-section">
            <h2 class="section-title">Адрес доставки</h2>
            <div class="address-form">
              <div class="form-row">
                <div class="form-group">
                  <label>Индекс</label>
                  <input
                    v-model="address.postalCode"
                    v-mask="'######'"
                    type="text"
                    placeholder="000000"
                    maxlength="6"
                    @input="validatePostalCode"
                    @blur="validatePostalCode"
                  />
                  <span v-if="errors.postalCode" class="error-message">{{ errors.postalCode }}</span>
                </div>

                <div class="form-group">
                  <label>Город</label>
                  <input
                    v-model="address.city"
                    type="text"
                    placeholder="Москва"
                    @input="validateCity"
                    @blur="validateCity"
                  />
                  <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
                </div>
              </div>

              <div class="form-group">
                <label>Улица</label>
                <input
                  v-model="address.street"
                  type="text"
                  placeholder="Улица Пушкина"
                  @input="validateStreet"
                  @blur="validateStreet"
                />
                <span v-if="errors.street" class="error-message">{{ errors.street }}</span>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label>Дом</label>
                  <input
                    v-model="address.house"
                    type="text"
                    placeholder="1"
                    @input="validateHouse"
                    @blur="validateHouse"
                  />
                  <span v-if="errors.house" class="error-message">{{ errors.house }}</span>
                </div>

                <div class="form-group">
                  <label>Квартира</label>
                  <input
                    v-model="address.apartment"
                    type="text"
                    placeholder="1"
                    @input="validateApartment"
                    @blur="validateApartment"
                  />
                  <span v-if="errors.apartment" class="error-message">{{ errors.apartment }}</span>
                </div>
              </div>

              <div class="form-group">
                <label>Комментарий к заказу</label>
                <textarea
                  v-model="address.comment"
                  placeholder="Код домофона, ориентиры и т.д."
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Order Summary -->
        <div class="right-column">
          <div class="order-summary">
            <h2 class="section-title">Ваш заказ</h2>
            
            <div class="order-items">
              <div v-for="item in cartItems" :key="item.id" class="order-item">
                <div class="item-image">
                  <img :src="item.image" :alt="item.name" />
                </div>
                <div class="item-details">
                  <div class="item-name">{{ item.name }}</div>
                  <div class="item-quantity">{{ item.quantity }} шт.</div>
                </div>
                <div class="item-price">{{ formatPrice(item.price * item.quantity) }}</div>
              </div>
            </div>

            <div class="order-breakdown">
              <div class="breakdown-row">
                <span>Товары</span>
                <span>{{ formatPrice(cartTotal) }}</span>
              </div>
              <div class="breakdown-row">
                <span>Доставка</span>
                <span>{{ formatPrice(deliveryCost) }}</span>
              </div>
              <div v-if="discount > 0" class="breakdown-row discount">
                <span>Скидка</span>
                <span>-{{ formatPrice(discount) }}</span>
              </div>
              <div class="breakdown-row total">
                <span>Итого</span>
                <span>{{ formatPrice(finalTotal) }}</span>
              </div>
            </div>

            <button
              class="pay-button"
              :disabled="!isFormValid || isProcessing"
              @click="processPayment"
            >
              <span v-if="!isProcessing">Оплатить {{ formatPrice(finalTotal) }}</span>
              <span v-else>Обработка...</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <transition name="modal">
      <div v-if="showSuccessModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="success-icon">✓</div>
          <h2>Заказ успешно оформлен!</h2>
          <p class="order-number">Номер заказа: #{{ orderNumber }}</p>
          <p class="success-message">Мы отправили подтверждение на вашу электронную почту.</p>
          <button class="back-button" @click="goToCatalog">Вернуться в каталог</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store/useStore'

const router = useRouter()
const { state, cartTotal, clearCart } = useStore()

// Payment methods
const paymentMethods = [
  { id: 'card', label: 'Онлайн картой', icon: '💳' },
  { id: 'sbp', label: 'СБП', icon: '📱' },
  { id: 'cash', label: 'При получении', icon: '💵' }
]

const selectedPaymentMethod = ref('card')

// Card payment data
const cardNumber = ref('')
const cardExpiry = ref('')
const cardCvv = ref('')
const cardName = ref('')

// Address data
const address = ref({
  postalCode: '',
  city: '',
  street: '',
  house: '',
  apartment: '',
  comment: ''
})

// Errors
const errors = ref<Record<string, string>>({})

// Timer for SBP
const timeLeft = ref(900) // 15 minutes in seconds
let timerInterval: number | null = null

// Order processing
const isProcessing = ref(false)
const showSuccessModal = ref(false)
const orderNumber = ref('')

// Computed
const cartItems = computed(() => state.cart)

const deliveryCost = computed(() => {
  return cartTotal.value > 5000 ? 0 : 500
})

const discount = computed(() => {
  return cartTotal.value > 10000 ? cartTotal.value * 0.1 : 0
})

const finalTotal = computed(() => {
  return cartTotal.value + deliveryCost.value - discount.value
})

const isFormValid = computed(() => {
  // Check address fields
  if (!address.value.postalCode || !address.value.city || 
      !address.value.street || !address.value.house || !address.value.apartment) {
    return false
  }

  // Check payment method specific fields
  if (selectedPaymentMethod.value === 'card') {
    return cardNumber.value.length === 19 &&
           cardExpiry.value.length === 5 &&
           cardCvv.value.length === 3 &&
           cardName.value.length > 0 &&
           Object.keys(errors.value).length === 0
  }

  return Object.keys(errors.value).length === 0
})

// Methods
const selectPaymentMethod = (method: string) => {
  selectedPaymentMethod.value = method
  if (method === 'sbp') {
    startTimer()
  } else {
    stopTimer()
  }
}

const startTimer = () => {
  timeLeft.value = 900
  timerInterval = window.setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      stopTimer()
    }
  }, 1000)
}

const stopTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Validation functions
const validateCardNumber = () => {
  const cleaned = cardNumber.value.replace(/\s/g, '')
  if (cleaned.length !== 16) {
    errors.value.cardNumber = 'Введите 16 цифр номера карты'
  } else if (!luhnCheck(cleaned)) {
    errors.value.cardNumber = 'Неверный номер карты'
  } else {
    delete errors.value.cardNumber
  }
}

const luhnCheck = (cardNumber: string): boolean => {
  let sum = 0
  let isEven = false
  
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10)
    
    if (isEven) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    
    sum += digit
    isEven = !isEven
  }
  
  return sum % 10 === 0
}

const validateCardExpiry = () => {
  const parts = cardExpiry.value.split('/')
  if (parts.length !== 2) {
    errors.value.cardExpiry = 'Неверный формат (MM/YY)'
    return
  }

  const month = parseInt(parts[0], 10)
  const year = parseInt('20' + parts[1], 10)
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1

  if (month < 1 || month > 12) {
    errors.value.cardExpiry = 'Неверный месяц'
  } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
    errors.value.cardExpiry = 'Карта просрочена'
  } else {
    delete errors.value.cardExpiry
  }
}

const validateCardCvv = () => {
  if (cardCvv.value.length !== 3) {
    errors.value.cardCvv = 'Введите 3 цифры CVV'
  } else {
    delete errors.value.cardCvv
  }
}

const validateCardName = () => {
  if (cardName.value.length < 2) {
    errors.value.cardName = 'Введите имя на карте'
  } else {
    delete errors.value.cardName
  }
}

const validatePostalCode = () => {
  if (address.value.postalCode.length !== 6) {
    errors.value.postalCode = 'Введите 6 цифр индекса'
  } else {
    delete errors.value.postalCode
  }
}

const validateCity = () => {
  if (address.value.city.length < 2) {
    errors.value.city = 'Введите название города'
  } else {
    delete errors.value.city
  }
}

const validateStreet = () => {
  if (address.value.street.length < 2) {
    errors.value.street = 'Введите название улицы'
  } else {
    delete errors.value.street
  }
}

const validateHouse = () => {
  if (address.value.house.length < 1) {
    errors.value.house = 'Введите номер дома'
  } else {
    delete errors.value.house
  }
}

const validateApartment = () => {
  if (address.value.apartment.length < 1) {
    errors.value.apartment = 'Введите номер квартиры'
  } else {
    delete errors.value.apartment
  }
}

// Process payment
const processPayment = async () => {
  if (!isFormValid.value) return

  isProcessing.value = true

  // Simulate payment processing
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Generate order number
  orderNumber.value = Date.now().toString().slice(-8)

  // Save address to localStorage
  localStorage.setItem('deliveryAddress', JSON.stringify(address.value))

  // Clear cart
  clearCart()

  // Show success modal
  showSuccessModal.value = true
  isProcessing.value = false
}

const closeModal = () => {
  showSuccessModal.value = false
}

const goToCatalog = () => {
  router.push('/')
}

// Load saved address
const loadSavedAddress = () => {
  const saved = localStorage.getItem('deliveryAddress')
  if (saved) {
    try {
      address.value = JSON.parse(saved)
    } catch (e) {
      console.error('Failed to load saved address:', e)
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  loadSavedAddress()
})

onUnmounted(() => {
  stopTimer()
})

// Watch for payment method changes
watch(selectedPaymentMethod, (newMethod) => {
  if (newMethod === 'sbp') {
    startTimer()
  } else {
    stopTimer()
  }
})
</script>

<style scoped>
.payment-page {
  min-height: 100vh;
  padding: 40px 20px;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 40px;
  letter-spacing: -1px;
}

.payment-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

/* Payment Methods */
.payment-methods {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab:hover {
  border-color: #000;
}

.tab.active {
  background: #000;
  color: white;
  border-color: #000;
}

.tab-icon {
  font-size: 20px;
}

.tab-label {
  font-size: 14px;
}

.payment-content-panel {
  min-height: 300px;
}

/* Card Form */
.card-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

.form-group input,
.form-group textarea {
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #000;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #999;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.error-message {
  font-size: 12px;
  color: #ff4444;
  margin-top: 4px;
}

/* SBP Content */
.sbp-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
}

.qr-code-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.qr-code {
  width: 200px;
  height: 200px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.qr-svg {
  width: 100%;
  height: 100%;
}

.qr-instruction {
  font-size: 14px;
  color: #666;
  text-align: center;
}

.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.timer-label {
  font-size: 14px;
  color: #666;
}

.timer {
  font-size: 48px;
  font-weight: 300;
  font-family: 'Courier New', monospace;
  color: #000;
}

.timer-warning {
  color: #ff4444;
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Cash Info */
.cash-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-block h3 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
}

.info-block p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 6px;
}

.detail-icon {
  font-size: 24px;
}

.detail-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-text strong {
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

.detail-text span {
  font-size: 16px;
  font-weight: 400;
}

/* Address Section */
.address-section {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
}

.address-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Order Summary */
.order-summary {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  position: sticky;
  top: 20px;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  max-height: 300px;
  overflow-y: auto;
}

.order-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  background: white;
  border-radius: 6px;
}

.item-image {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
}

.item-quantity {
  font-size: 12px;
  color: #999;
}

.item-price {
  font-size: 16px;
  font-weight: 500;
}

.order-breakdown {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.breakdown-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}

.breakdown-row.total {
  font-size: 20px;
  font-weight: 500;
  color: #000;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
}

.breakdown-row.discount {
  color: #4CAF50;
}

.pay-button {
  width: 100%;
  padding: 18px 24px;
  background: #000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pay-button:hover:not(:disabled) {
  background: white;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pay-button:active:not(:disabled) {
  transform: translateY(0);
}

.pay-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  padding: 60px 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin: 0 auto 30px;
}

.modal-content h2 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 15px;
}

.order-number {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.success-message {
  font-size: 14px;
  color: #999;
  margin-bottom: 30px;
}

.back-button {
  padding: 16px 32px;
  background: #000;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: white;
  color: #000;
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}

/* Responsive */
@media (max-width: 1024px) {
  .payment-content {
    grid-template-columns: 1fr;
  }

  .order-summary {
    position: static;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 32px;
  }

  .tabs {
    flex-direction: column;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .timer {
    font-size: 36px;
  }
}
</style>
