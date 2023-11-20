const menu = document.getElementById (
    'menu'
)

document.getElementById (
    'menu'
).addEventListener ('click', (event) => {
    // menu.style.color = 'red'
    console.log("click")
    console.log(event.target.classList)
    event.target.classList.toggle("menu-red")
})