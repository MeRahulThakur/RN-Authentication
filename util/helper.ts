/**
 * Formats a date to a string based on its relation to the current date.
 * 
 * @param date - The date to format, either as a Date object or a date string.
 * @returns A formatted date string.
 */
export const getFormattedDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date');
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Check if the date is today
  if (dateObj.toDateString() === today.toDateString()) {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return `Today, ${dateObj.toLocaleDateString('en-US', options)}`;
  }

  // Check if the date is yesterday
  if (dateObj.toDateString() === yesterday.toDateString()) {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return `Yesterday, ${dateObj.toLocaleDateString('en-US', options)}`;
  }

  // Calculate the difference in days
  const timeDiff = today.getTime() - dateObj.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

  // Format "X Days ago"
  if (daysDiff > 1) {
    return `${daysDiff} Days ago`;
  }

  // If the date is within the last day but not yesterday, return a custom message
  return "Less than a day ago";
};