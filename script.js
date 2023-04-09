const getNum = () => Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < 12; i++) {
  const num1 = getNum();
  const num2 = getNum();

  const answer = prompt(`${num1} x ${num2} = `);

  if (+answer === num1 * num2) {
    alert(`Ура!!! Все вірно!!! :)`)
  } else {
    alert(`Хм... Не вірно ... :(`)
  }
}