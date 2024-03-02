// Визначення переліку для днів тижня
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Функція, яка визначає, чи це вихідний день
function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

// Приклад використання функції
const today: WeekDay = WeekDay.Saturday;
const isWeekendToday: boolean = isWeekend(today);

console.log(isWeekendToday); // Виведе true, оскільки Saturday - вихідний день
