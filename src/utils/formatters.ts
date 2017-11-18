export const telephone = (num: string): string => {
  return ['(', num.slice(0, 3), ') ', num.slice(3, 6), '-', num.slice(6)].join('');
}

export const noop = () => {};
