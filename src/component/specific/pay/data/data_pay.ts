// components/PayDonate/PayDonate.ts
export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export const paymentMethods: PaymentMethod[] = [
  { id: 'paypal', name: 'PayPal', icon: '/images/paypal.png' },
  { id: 'credit-card', name: 'Credit Card', icon: '/images/credit-card.png' },
  { id: 'stripe', name: 'Stripe', icon: '/images/stripe.png' },
  { id: 'bitcoin', name: 'Bitcoin', icon: '/images/bitcoin.png' },
];
