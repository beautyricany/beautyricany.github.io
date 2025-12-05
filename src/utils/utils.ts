/**
 * Format a price value for display
 * @param price - The price as a number (0 indicates consultation required)
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
    if (price === 0 || price === 42) return "Cena na dotaz";
    return `${price} Kč`;
}
