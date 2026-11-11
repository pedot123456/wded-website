import { contact, whatsappMessages } from '../content'

/** Builds a https://wa.me/<number>?text=<message> link */
export function waLink(message: string = whatsappMessages.general) {
  const number = contact.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
