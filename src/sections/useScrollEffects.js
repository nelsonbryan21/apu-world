import { useEffect } from 'react'

function useScrollEffects(enabled) {
  useEffect(() => {
    if (
      !enabled
      || !('IntersectionObserver' in window)
    ) {
      return undefined
    }

    document.documentElement.classList.add('has-scroll-reveal')

    const observedElements = new WeakMap()
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targets = observedElements.get(entry.target) || [entry.target]
          targets.forEach((target) => target.classList.add('is-revealed'))
          observedElements.delete(entry.target)
          revealObserver.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -48px 0px',
    })

    const observeTree = (root) => {
      const groups = []
      if (root.matches?.('[data-reveal-stagger]')) groups.push(root)
      root.querySelectorAll?.('[data-reveal-stagger]').forEach((group) => groups.push(group))

      groups.forEach((group) => {
        group.querySelectorAll('[data-reveal]').forEach((element, index) => {
          if (element.closest('[data-reveal-stagger]') === group) {
            element.style.setProperty('--reveal-delay', `${Math.min(index * 90, 450)}ms`)
          }
        })
      })

      const targets = []
      if (root.matches?.('[data-reveal]')) targets.push(root)
      root.querySelectorAll?.('[data-reveal]').forEach((element) => targets.push(element))
      targets.forEach((element) => {
        if (element.classList.contains('is-revealed')) return

        const observerTarget = ['image', 'title'].includes(element.getAttribute('data-reveal'))
          ? element.parentElement
          : element
        if (!observerTarget) return

        const observedTargets = observedElements.get(observerTarget) || new Set()
        observedTargets.add(element)
        observedElements.set(observerTarget, observedTargets)
        revealObserver.observe(observerTarget)
      })
    }

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) observeTree(node)
        })
      })
    })

    let setupFrameId = window.requestAnimationFrame(() => {
      setupFrameId = window.requestAnimationFrame(() => {
        setupFrameId = 0
        observeTree(document.documentElement)
        mutationObserver.observe(document.body, { childList: true, subtree: true })
      })
    })

    return () => {
      window.cancelAnimationFrame(setupFrameId)
      revealObserver.disconnect()
      mutationObserver.disconnect()
      document.documentElement.classList.remove('has-scroll-reveal')
    }
  }, [enabled])

  useEffect(() => {
    if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let frameId = 0
    const updateParallax = () => {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        document.querySelectorAll('[data-parallax]').forEach((element) => {
          const speed = Number.parseFloat(element.getAttribute('data-parallax')) || 0.08
          const bounds = element.getBoundingClientRect()
          const distance = (window.innerHeight / 2 - bounds.top - bounds.height / 2) * speed
          const offset = Math.max(-100, Math.min(80, distance))
          element.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`)
        })
      })
    }

    window.addEventListener('scroll', updateParallax, { passive: true })
    window.addEventListener('resize', updateParallax)
    updateParallax()
  
    
    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateParallax)
      window.removeEventListener('resize', updateParallax)
    }
  }, [enabled])
}

export default useScrollEffects
