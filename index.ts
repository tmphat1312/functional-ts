import { allOf, anyOf, when, otherwise, match } from "match-iz";
import { nthSun, isMar, isFri, isEvening, isSat, isSun } from "match-iz/dates";

const isLastSundayOfMarch = allOf(nthSun(-1), isMar);
const isTheWeekend = anyOf(allOf(isFri, isEvening), isSat, isSun);

const str = match(new Date())(
  when(isLastSundayOfMarch, () => "Last Sunday of March: Clocks go forward"),
  when(isTheWeekend, () => "Ladies and Gentlemen; The Weekend"),
  otherwise((dateObj) => {
    return `The clock is ticking: ${dateObj.toString()}`;
  })
);

console.log(str);
