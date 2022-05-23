const threshold = .1
const options = {
  root: null, //on veut tout l'écran en temps que zone d'affichage
  rootMargin: "0px", //pas de marge
  threshold//10% de l'élément visible avant que l'animation se fasse
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add("reveal_visible")
      // entry.target.classList.remove("reveal")
      observer.unobserve(entry.target)
    }
  })
}


const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r);
})
