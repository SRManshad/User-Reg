export function phoneValidator(number) {
    const re = /\S+@\S+\.\S+/
    if (!number) return "Phone number can't be empty."
    if (!re.test(number)) return 'Ooops! We need Valid Number'
    return ''
  }