import { reactive, computed } from 'vue'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  ingredients: string
  recommendation: string
  feature: string
}

export interface CartItem extends Product {
  quantity: number
}

const state = reactive({
  cart: [] as CartItem[],
  favorites: [] as Product[],
  products: [
    {
      id: 1,
      name: 'WAGYU A5 BLEND',
      description: 'Мраморная говядина премиум-класса с добавлением трюфельного масла. Беззерновой состав для искушённых гурманов.',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Мраморная говядина Wagyu (45%), говяжье сердце, говяжья печень, трюфельное масло (0.5%), морковь, шпинат, витаминно-минеральный комплекс.',
      recommendation: 'Идеально для взрослых кошек с высокой активностью. Рекомендовано для питомцев с чувствительным пищеварением и требовательных к текстуре пищи. Беззерновая формула минимизирует риски аллергических реакций.',
      feature: 'Трюфельное масло стимулирует аппетит и придаёт шерсти благородный блеск.'
    },
    {
      id: 2,
      name: 'TRUFFLE SALMON',
      description: 'Атлантический лосось холодного копчения с чёрным трюфелем. Богат омега-3 для блестящей шерсти.',
      price: 9800,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Атлантический лосось (50%), лососевое масло, чёрный трюфель (0.3%), бурый рис, тыква, таурин, омега-3, витамин D3.',
      recommendation: 'Предназначено для кошек с чувствительной кожей и склонностью к линьке. Высокое содержание омега-3 поддерживает здоровье сердечно-сосудистой системы.',
      feature: 'Холодное копчение сохраняет максимальную питательную ценность рыбы.'
    },
    {
      id: 3,
      name: 'ORGANIC QUAIL',
      description: 'Фермерский перепел свободного выгула с органическими овощами. Гипоаллергенный рецепт.',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Фермерский перепел (55%), перепелиные яйца, органическая морковь, зелёный горошек, клюква, пробиотики, комплекс антиоксидантов.',
      recommendation: 'Гипоаллергенный рецепт для кошек с пищевой непереносимостью. Подходит для стерилизованных животных и питомцев преклонного возраста.',
      feature: 'Перепелиное мясо — один из самых легкоусвояемых источников белка в природе.'
    },
    {
      id: 4,
      name: 'ROYAL VENISON',
      description: 'Благородный олень с лесными ягодами и клюквой. Эксклюзивный белок для взрослых собак.',
      price: 11200,
      image: 'https://images.unsplash.com/photo-1606851096776-19b80d567e98?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Мясо благородного оленя (48%), оленье сердце, лесные ягоды (клюква, черника), корень цикория, экстракт юкки, глюкозамин.',
      recommendation: 'Рекомендовано для активных взрослых кошек. Поддерживает здоровье суставов благодаря натуральному глюкозамину.',
      feature: 'Оленина — эксклюзивный источник белка, редко вызывающий аллергические реакции.'
    },
    {
      id: 5,
      name: 'BLACK CAVIAR EDITION',
      description: 'Осетрина с добавлением чёрной икры. Лимитированная коллекция для особых случаев.',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1534939561126-855f86210546?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Осетрина (40%), чёрная икра (2%), рыбный бульон, морские водоросли, витамин E, селен, цинк.',
      recommendation: 'Лимитированная коллекция для особых случаев. Подходит для беременных и кормящих кошек благодаря высокому содержанию микроэлементов.',
      feature: 'Икра обогащает рацион редкими аминокислотами и поддерживает иммунитет.'
    },
    {
      id: 6,
      name: 'GOLD DUCK PÂTÉ',
      description: 'Утиный паштет с добавлением съедобного золота 24К. Влажный корм премиум-класса.',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Утиное филе (60%), утиная печень, съедобное золото 24К (0.01%), яблочное пюре, шалфей, витамин B12.',
      recommendation: 'Влажный корм для кошек с деликатным пищеварением. Паштетная текстура подходит для питомцев с проблемами зубов.',
      feature: 'Золото инертно и безопасно, придаёт корму визуальную исключительность.'
    },
    {
      id: 7,
      name: 'LAMB & LAVENDER',
      description: 'Ягнёнок с прованскими травами и лавандой. Успокаивающий рецепт для чувствительного пищеварения.',
      price: 10500,
      image: 'https://images.unsplash.com/photo-1623366262663-8a8e24340f37?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Мясо ягнёнка (52%), ягнячий жир, лаванда (0.2%), ромашка, сладкий картофель, пребиотики FOS/MOS.',
      recommendation: 'Успокаивающий рецепт для кошек со стрессом и тревожностью. Поддерживает баланс микрофлоры кишечника.',
      feature: 'Лаванда и ромашка оказывают мягкий седативный эффект через аромат.'
    },
    {
      id: 8,
      name: 'TUNA & SAFFRON',
      description: 'Голубой тунец с шафраном. Средиземноморский рецепт для кошек с изысканным вкусом.',
      price: 7900,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1000&auto=format&fit=crop',
      ingredients: 'Голубой тунец (55%), тунцовое масло, шафран (0.1%), цукини, петрушка, витамин A, калий.',
      recommendation: 'Средиземноморский рецепт для привередливых кошек. Подходит для поддержания оптимального веса благодаря низкой калорийности.',
      feature: 'Шафран — один из самых редких ингредиентов в питании для животных.'
    }
  ] as Product[]
})

export const useStore = () => {
  const addToCart = (product: Product) => {
    const existingItem = state.cart.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      state.cart.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    const index = state.cart.findIndex(item => item.id === productId)
    if (index > -1) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      } else {
        state.cart.splice(index, 1)
      }
    }
  }

  const clearCart = () => {
    state.cart = []
  }

  const toggleFavorite = (product: Product) => {
    const index = state.favorites.findIndex(item => item.id === product.id)
    if (index > -1) {
      state.favorites.splice(index, 1)
    } else {
      state.favorites.push(product)
    }
  }

  const isFavorite = (productId: number) => {
    return state.favorites.some(item => item.id === productId)
  }

  const cartTotal = computed(() => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  const cartCount = computed(() => {
    return state.cart.reduce((count, item) => count + item.quantity, 0)
  })

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    toggleFavorite,
    isFavorite,
    cartTotal,
    cartCount
  }
}
