/**
 * Determine if the given password contains at least 8 characters
 * and at least one uppercase letter and one digit.
 *
 * @param password
 * @returns
 */
export function isStrongPassword(password: string): boolean {
  // Check if password has at least 8 characters
  if (password.length < 8) {
    return false;
  }
  
  // Check if password has at least one uppercase letter
  let hasUppercase = false;
  // Check if password has at least one digit
  let hasDigit = false;
  
  for (const char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }
    if (char >= '0' && char <= '9') {
      hasDigit = true;
    }
  }
  
  return hasUppercase && hasDigit;
}

/**
 * Determines the day of the week on the given 0-based number.
 *
 * @param day
 * @returns
 */
export function getDayOfWeek(day: number): string {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
}

/**
 * Determines the ticket price based on the given age. The price is
 * determined as follows:
 * - Children under 5 years old get in for free.
 * - Children between 5 and 17 years old pay 10 dollars.
 * - Adults between 18 and 59 years old pay 20 dollars.
 * - Seniors 60 years old and older pay 15 dollars.
 *
 * @param age
 * @returns
 */
export function getTicketPrice(age: number): number {
  if (age < 5) {
    return 0; // Free for children under 5
  } else if (age >= 5 && age <= 17) {
    return 10; // Children between 5 and 17
  } else if (age >= 18 && age <= 59) {
    return 20; // Adults between 18 and 59
  } else if (age >= 60) {
    return 15; // Seniors 60 and older
  }
  return 0; // Default case (shouldn't reach here)
}
