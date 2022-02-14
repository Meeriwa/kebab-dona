new Splide('.splide', {
  height: '100%',
  type: 'loop',
  perPage: 1,
  direction: 'ttb',
  arrows: false,
}).mount()

const container = document.querySelector('.services-inner')
const btns = document.querySelectorAll('.services__btn')

for (const btn of btns) {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      container.classList.toggle('active')
    }
    clearActiveClasses()
    btn.classList.add('active')
  })
}

function clearActiveClasses() {
  btns.forEach((btn) => btn.classList.remove('active'))
}

const requestBtn = document.querySelector('#request-btn')
const modal = document.querySelector('#custom-modal')
const requestCloseBtn = document.querySelector('#request-close-btn')
const modalRequest = document.querySelector('#modal-request')
const submitBtn = document.querySelector('#modal-request-submit')
const modalThanks = document.querySelector('#modal-thanks')

requestBtn.addEventListener('click', () => {
  openModal(modal)
  openModal(modalRequest)
})

requestCloseBtn.addEventListener('click', () => {
  closeModal(modal)
  closeModal(modalRequest)
})

submitBtn.addEventListener('click', () => {
  closeModal(modalRequest)
  openModal(modalThanks)
  setTimeout(() => {
    closeModal(modalThanks)
    closeModal(modal)
  }, 5000)
})

function closeModal(selector) {
  selector.classList.remove('active')
}

function openModal(selector) {
  selector.classList.add('active')
}
