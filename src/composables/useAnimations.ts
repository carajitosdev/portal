import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useAnimations() {
  const animateOnScroll = (element: string, animation: object) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    })
    tl.from(element, animation)
  }

  const animateHero = (element: string) => {
    gsap.from(element, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.2
    })
  }

  const animateCards = (elements: string) => {
    gsap.from(elements, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: elements,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      }
    })
  }

  const parallaxEffect = (element: string) => {
    gsap.to(element, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  onMounted(() => {
    // Inicializar ScrollTrigger
    ScrollTrigger.refresh()
  })

  onUnmounted(() => {
    // Limpiar ScrollTrigger
    ScrollTrigger.getAll().forEach(t => t.kill())
  })

  return {
    animateOnScroll,
    animateHero,
    animateCards,
    parallaxEffect
  }
}