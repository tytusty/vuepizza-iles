const cart = ref([])
/* ref([]) - crea un array
  fa si che il componente è reattivo
  e funzionante. Si auto importa grazie
  al plugin di vite.
  [Cap. 27 - 3:37:05 https://www.youtube.com/watch?v=VC83FrXbeTI&t=11751s]
  */

export const useCart = () => {
  // 01 - addToCart
  const addToCart = (pizza) => {
    cart.value.push(pizza)
  }

  // 02 - cartText
  //        ↳ displayText
  const cartText = computed(() => {
    /* computed - come ottenere un valore computato.
   è importante il "[...] .value.length" perche come sopra
   abbiamo dovuto aggiungere il cart.value.push --> = cart.value. * length * 
    [assume una forma il fatto che pusshi dentro un valore] 
   per vedere i cambiamenti dinamici (grazie al ref)*/
    const displayText =
      cart.value.length === 0
        ? 'A nun ghé ninte'
        : `Total ${cart.value.length} items`
    return displayText
    /* ↳ Valuato il contenuto,
     la stringa adeguata */
  })
  return {
    cart,
    addToCart,
    cartText,
  }
}
