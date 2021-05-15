export function debounce(func, timeoutId, timeout = 300) {
  let timer
  if (timeoutId) timer = timeoutId
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
    return timer
  }
}
