const input = document.getElementById("input");
function append(text) {
  input.focus();
  input.value = input.value + text;
}

function backSpace() {
  input.value = input.value.substring(0, input.value.length - 1);
}

function checkJolly() {
  var isSequence = true;
  var differenceArray = [];
  var inputArray = input.value.split(",").map((num) => {
    return Number(num);
  });

  for (let index = 0; index < inputArray.length - 1; index++) {
    const difference = Math.abs(inputArray[index] - inputArray[index + 1]);
    differenceArray.push(difference);
  }
  console.log(differenceArray);
  const initialValue = differenceArray[0] - differenceArray[1];
  for (let index = 1; index < differenceArray.length - 1; index++) {
    const temp = differenceArray[index] - differenceArray[index + 1];
    console.log("initial vale " + initialValue);
    console.log("temp " + temp);
    if (initialValue !== temp) {
      isSequence = false;
      break;
    }
  }

  isSequence ? alert("jolly") : alert("Not jolly");
}
