export const STRIPE_LINK_PDF = "https://buy.stripe.com/aFa4gy0ZM7bn31Ca716J202";
export const STRIPE_LINK_FULL = "https://buy.stripe.com/14A5kC23Q8fr6dO2Ez6J201";

/**
 * Appends the standard campaign UTM params to a Stripe Payment Link.
 * `location` identifies where on the site the click originated (hero,
 * pricing_full, pricing_pdf, footer, nav, resources_<slug>, etc.) so
 * conversion can be attributed per placement.
 */
export function withUtm(url: string, location: string): string {
  const params = new URLSearchParams({
    utm_source: "site",
    utm_medium: "cta",
    utm_campaign: "os_launch",
    utm_content: location,
  });
  return `${url}?${params.toString()}`;
}
