document.getElementById('button').addEventListener('click', lines)
let age = 0

function lines () {
  age = document.getElementById('input').value
  age = parseInt(age)

  if (age >= 17) {
    document.getElementById('line1').innerHTML = 'You can see an R movie alone.'
  } else if (age >= 13) {
    document.getElementById('line1').innerHTML = 'You can see a PG-13 movie alone.'
  } else if (age >= 5) {
    document.getElementById('line1').innerHTML = 'You can see a G or PG movie alone.'
  } else {
    "Uh. You're too young for most things."
  }

  document.getElementById('line2').innerHTML = 'Thank you for verifying your age!'
}