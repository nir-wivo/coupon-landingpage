const countToDate = new Date("2022-07-30T00:00:00");
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600 ) % 24
  const days = Math.floor(time / 3600/ 24) 
  flip(document.querySelector("[data-day-tens]"), Math.floor(days / 10))
  flip(document.querySelector("[data-day-ones]"), days % 10)
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}

function addDynamicLink() {
  const queryParams = new URLSearchParams(window.location.search);
  const link = queryParams.get('link');
  const name = queryParams.get('name');
  document.getElementsByClassName('name')[0].innerText = name;
  const random = queryParams.get('random');
  const baseurl = "https://mega1.wiply-dev.xyz/?link=" + link +"&"+random+"&name="+name ;
      const res = baseurl.replaceAll(" ","%20");
      document.getElementById('smallLink').innerText = res; 
      document.getElementsByClassName('facebook')[0].href = "https://www.facebook.com/sharer/sharer.php?u=" +res;
      document.getElementsByClassName('whatapp')[0].href = "https://api.whatsapp.com/send?text="+ res.replaceAll("&","%26");
}
addDynamicLink()