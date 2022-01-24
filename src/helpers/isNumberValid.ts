export const isNumberValid = (value: string) => {
  if (value === '00') return false;

  return value.match(/^\d*\.?\d{0,2}$/);
};
