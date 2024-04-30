const del = () => {
  // Находим все элементы с классом 'todo__trash'
  const trash = document.querySelectorAll(".todo__trash")

  // Для каждого найденного элемента устанавливаем обработчик события клика
  trash.forEach((item) => {
    item.addEventListener("click", (e) => {
      // При клике на элемент 'todo__trash' удаляем его родительский элемент
      item.parentElement.remove()
      // Останавливаем всплытие события, чтобы предотвратить его дальнейшую обработку
      e.stopPropagation()
    })
  })
}

const clean = () => {
  const clear = document.querySelector("#clear")
  const input = document.querySelector("#input")

  clear.addEventListener("click", () => {
    input.value = ""
  })
}
del()
clean()
