export const formatPrice = (cantidad) => {
  return cantidad.toLocaleString('en-US',{
    style: 'currency',
    currency: 'USD',
  });
}