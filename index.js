console.log('bobbyhadz.com');

const child = document.getElementById('child');

child.addEventListener('click', function handleClick(event) {
  // 👇️ "parent"
  console.log(event.target.parentElement.id);
});
