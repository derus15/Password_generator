  let column_1 = document.querySelector('.password_1');
  let column_2 = document.querySelector('.password_2');
  let column_3 = document.querySelector('.password_3');
  let button_add = document.querySelector('button');
  let input = document.querySelector('input');
  let count = document.querySelector('.count_in');
  let attention = document.querySelector('.attention');
  let button_delete = document.querySelector('.delete');
  let int = document.getElementById('int')

  let char = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjQWERTYIOPASDklzxcvbnmqwertsdcjf'
  let int_char = '1567890qwhertyuio234pasdf840klzgh345xcvbnm5QW465YUIOP17a890ASDF3GHJKL909VBNMyuiop2asdfg26yuiopasdfgh'
  let password_b;
  let num = 0;
  let len_column = 0;
  attention.hidden = true;

  function CreateElement(ul,li){
      for (let j = 0; j < input.value; j++){
          num = Math.floor(Math.random() * 100);
          if (int.checked){
            password_b += int_char[num];
            li.textContent = password_b;
            ul.append(li);
            console.log('hi_int');
          }else{
            password_b += char[num];
            li.textContent = password_b;
            ul.append(li);
            console.log('hi_char');
          }
      }
}

button_add.onclick = function() {
    for (let i = 0; i < count.value; i++) {
        let li = document.createElement('li');
        password_b = ''
        len_column++;

        if (len_column <= 15) {
            CreateElement(column_1, li);
        }

        if (len_column > 15 && len_column <= 30) {
            CreateElement(column_2, li);
        }

        if (len_column > 30) {
            CreateElement(column_3, li);
        }

        if (len_column === 45) {
            attention.hidden = false;
            button_add.setAttribute("disabled", "disabled");
            break
        }
    }
}

button_delete.onclick = function() {
    let list = document.querySelectorAll('ul');
    for (let column of list){
        column.textContent = ''
    }
    attention.hidden = true;
    button_add.removeAttribute("disabled");
    len_column = 0;
}