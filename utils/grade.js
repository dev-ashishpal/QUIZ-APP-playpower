export const grade = (value) => {
  const percent = value * 100;
  let name;
  let color;

  if (percent >= 80) {
    name = "Excellent";
    color = "#4ade80";
  } else if (percent >= 60) {
    name = "Good";
    color = "#6366f1";
  } else if (percent >= 40) {
    name = "Average";
    color = "#efef1c";
  } else if (percent < 40) {
    name = "Failed";
    color = "red";
  }

  return { name, color };
};

export const checkAnswer = (data) => {
  const flag = true;
  const mine = data.answer.sort();
  const actual = data.correctAnswer.sort();
  if (mine.length == actual.length) {
    for (let i = 0; i < mine.length; i++) {
      if (mine[i] != actual[i]) {
        flag = false;
        break;
      }
    }
  } else flag = false;

  return flag;
};

export const removeItem = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) arr.splice(i, 1);
  }
}