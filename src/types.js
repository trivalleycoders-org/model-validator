export const array = 'array'
export const boolean = 'boolean'
export const isoDateString = 'isoDateString'
export const number = 'number'
export const string = 'string'

export const isArray = (val) => Array.isArray(val)
export const isString = (val) => typeof val === 'string'
export const isISODateString = (val) => {

  const isoDateRegex = RegExp(/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/g)
  // TODO: simplify
  if (typeof val === 'string') {
    if (isoDateRegex.test(val)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
export const isNumber = (val) => typeof val === 'number'
export const isBoolean = (val) => typeof val === 'boolean'
