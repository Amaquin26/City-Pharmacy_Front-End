export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('fil-PH', {
        style: 'currency',
        currency: 'PHP',
    }).format(amount);
};

export const formatDate = (inputDate?: Date | string ): string  => {
    let date: Date;
    
    // Check if inputDate is provided and parse it if it's a string
    if (inputDate instanceof Date) {
      date = inputDate;
    } else if (typeof inputDate === 'string') {
      date = new Date(inputDate);
      if (isNaN(date.getTime())) {
        return inputDate;
      }
    } else {
      // If no inputDate is provided, use the current date
      date = new Date();
    }
  
    const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }