export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 }
}

export const slideIn = {
  initial: { x: -100, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 }
}

export const scaleUp = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1 },
  exit: { scale: 1.2, opacity: 0 }
}

export const carouselSlide = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

export const pageTransition = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export const popIn = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20
  }
}

// Efectos de hover
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3
  }
}

// Efectos de parallax
export const parallaxY = (y: number = 100) => ({
  initial: { y: -y },
  animate: {
    y: y,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
      ease: "linear"
    }
  }
})