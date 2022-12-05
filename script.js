  let columns = document.querySelectorAll('ul');
  let button_add = document.querySelector('button');
  let input = document.querySelector('.len_in');
  let count = document.querySelector('.count_in');
  let attention = document.querySelector('.attention');
  let button_delete = document.querySelector('.delete');
  let spec = document.getElementById('spec');
  let int = document.getElementById('int');

  let char = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjQWERTYIOPASDklzxcvbnmqwertsdcjf'
  let int_char = '1567890qwhe65yuio234pasdf840klzgh345xcvbnm5QW465YUIOP17a890ASDF3GHJKL909V32Myuiop2asdfg26yuiopasdfgh'
  let spec_char = '!#$%/.,qwerty!*$%/.,uiopasd!#$%/.,fghjklzxcv!#$%/.,bnmQWERTYUIOPASD!#$%/.,FGHJKLZX!#$%/.,CVfhBNMrfas'
  let specint_char = 'qwer!#$%/.,tyu123456789io!#$%/.,pasdfghjk!#$%/.,lzxcvbnmQWER!#$%/.,TYUIOPASD1234567890FGHJKLZX0CVBNM'
  let password_b;
  let num = 0;
  let len_column = 0;
  attention.hidden = true;

  function Checked(ul, li, char) {
       for (let j = 0; j < input.value; j++) {
          num = Math.floor(Math.random() * 100);
          password_b += char[num];
          li.textContent = password_b;
          ul.append(li);
       }
  }

  function CreateElement(ul, li) {
      if(spec.checked && int.checked){
        Checked(ul, li, specint_char);

      }else if (int.checked) {
        Checked(ul, li, int_char);

      }else if (spec.checked) {
        Checked(ul, li, spec_char);

      }else {
        Checked(ul, li, char);
      }
  }

button_add.onclick = function() {
    for (let i = 0; i < count.value; i++) {
        let li = document.createElement('li');
        password_b = ''
        len_column++;

        if (len_column <= 15) {
            CreateElement(columns[0], li);
        }

        if (len_column > 15 && len_column <= 30) {
            CreateElement(columns[1], li);
        }

        if (len_column > 30) {
            CreateElement(columns[2], li);
        }

        if (len_column === 45) {
            attention.hidden = false;
            button_add.setAttribute('disabled', 'disabled');
            break
        }
    }
}

button_delete.onclick = function() {
    for (let column of columns) {
        column.textContent = ''
    }
    attention.hidden = true;
    button_add.removeAttribute('disabled');
    len_column = 0;
}