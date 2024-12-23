// Hamburger
const hamburger = document.getElementsByClassName('bx-menu')
const menuHamburger = document.getElementById('hamburger')

hamburger[0].addEventListener('click', () => {
  menuHamburger.classList.toggle('hamburger')
})

// Logout
const profil = document.getElementById('profil')
const gambar = document.getElementById('login')

gambar.addEventListener('click', () => {
  profil.classList.toggle('logout')
})


