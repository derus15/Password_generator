  let char = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123453126789qwertsdcjf'
  let password_b;
  let num = 0;
  let ul = document.querySelector('ul');
  let button = document.querySelector('button');
  let input = document.querySelector('input');
  let count = document.querySelector('.count_in')

button.onclick = function() {
    for (let i = 0; i <= count.value; i++){
        let li = document.createElement('li');
        password_b = ''
        for (let i = 0; i < input.value; i++) {
            num = Math.floor(Math.random() * 100);
            password_b += char[num];
        }
        li.textContent = password_b;
        ul.append(li);
    }
}

