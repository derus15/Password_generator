  let column_1 = document.querySelector('.password_1');
  let column_2 = document.querySelector('.password_2');
  let column_3 = document.querySelector('.password_3');
  let button = document.querySelector('button');
  let input = document.querySelector('input');
  let count = document.querySelector('.count_in');
  let attention = document.querySelector('.attention');

  let char = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123453126789qwertsdcjf'
  let password_b;
  let num = 0;
  let len_column = 0;


button.onclick = function() {
    for (let i = 0; i < count.value; i++){
        let li = document.createElement('li');
        password_b = ''
        len_column ++;
        if (len_column <= 15){
            for (let j = 0; j < input.value; j++) {
                num = Math.floor(Math.random() * 100);
                password_b += char[num];
        }
        li.textContent = password_b;
        column_1.append(li);
        }

        if(len_column > 15 && len_column <= 30){
            for (let j = 0; j < input.value; j++) {
                num = Math.floor(Math.random() * 100);
                password_b += char[num];
        }
        li.textContent = password_b;
        column_2.append(li);
        }

        if(len_column > 30){
            for (let k = 0; k < input.value; k++) {
                num = Math.floor(Math.random() * 100);
                password_b += char[num];
        }
        li.textContent = password_b;
        column_3.append(li);
        }
        console.log(len_column)
        if(len_column === 45){
            attention.classList.remove('attention_display')
            button.setAttribute("disabled", "disabled");
        }
    }
}

