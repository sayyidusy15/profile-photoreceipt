export const WHATSAPP_NUMBER: string | undefined = undefined;

export function createWhatsAppUrl(message: string) {
  if (!WHATSAPP_NUMBER) return undefined;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
