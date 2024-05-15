export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('fil-PH', {
        style: 'currency',
        currency: 'PHP',
    }).format(amount);
};