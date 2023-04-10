const getNum = () => Math.floor(Math.random() * 10) + 1;

const counter = {
  total: 0,
  right: 0,
  wrong: 0
}

for (let i = 0; i < 10; i++) {
  const num1 = getNum();
  const num2 = getNum();

  const answer = prompt(`${num1} x ${num2} = `);

  counter.total++;

  if (+answer === num1 * num2) {
    counter.right++;
    alert(`Ура!!! Все вірно!!! :)`)
  } else {
    alert(`Хм... Не вірно ... :(`)
    counter.wrong++;
  }
}

const elemResults = document.getElementById("results");
elemResults.innerHTML = `
totals:
total: ${counter.total}
right: ${counter.right}
wrong: ${counter.wrong}
`;

