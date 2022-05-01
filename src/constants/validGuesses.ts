let walkingL: string[];
walkingL = [""];
let i: number = 0;
while (i <= 9999) {
  walkingL.push(i.toString().padStart(4));
  i++;
}
export const VALID_GUESSES = walkingL;
