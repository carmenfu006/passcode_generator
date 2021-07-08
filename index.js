// window.addEventListener('load', (event) => {
//   // insert code here
// });

document.addEventListener('DOMContentLoaded', (event) => {
  let button = document.getElementById('button');
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let passcode = document.querySelector('.passcode');
  let history_board = document.querySelector('.passcode-history');
  let clear_button = document.getElementById('clear-button');
  let restore_button = document.getElementById('restore-button');

  let delete_record = [];

  button.addEventListener('click', generateNumber);
  clear_button.addEventListener('click', clearAllRecords);
  restore_button.addEventListener('click', restoreRecords);

  // Generate Digits
  function generateNumber() {
    let sevenDigits = '';

    for (let i = 0; i < 6; i++) {
      // Loops 6 times
      sevenDigits += number[getRandomNumber()]
      sevenDigits = sevenDigits.split('').join(' ');
      passcode.innerHTML = sevenDigits
    }

    getRecord(sevenDigits)
  }

  // Generate random number
  function getRandomNumber() {
    // number.length = 10
    return Math.floor(Math.random() * number.length)
  }

  // Add Record into HTML
  function getRecord(sevenDigits) {
    // codes to show passcode into HTML
    let element = document.createElement('div')

    element.classList.add('passcode-record')
    element.innerHTML = `<p class='record'>${sevenDigits}</p>
                        <button class='remove-button' type="button" name="button">delete</button>`

    // history_board.appendChild(element);
    history_board.insertBefore(element, history_board.childNodes[0]);

    // DOM method which do not support all browser
    // history_board.append(element);
    // history_board.prepend(element);

    let remove_button = element.querySelector('.remove-button');
    remove_button.addEventListener('click', removeRecord)

  }

  // Remove Single Record
  function removeRecord(e) {
    let record = e.currentTarget.parentElement
    history_board.removeChild(record)

    storeDeletedRecord(record);
  }

  // Remove All Records
  function clearAllRecords() {
    let records = document.querySelectorAll('.passcode-record');

    records.forEach( function (record) {
      history_board.removeChild(record)
      storeDeletedRecord(record)
    });
  }

  // Store Deleted Records
  function storeDeletedRecord(record) {
    delete_record.push(record)
  }

  // Restore Deleted Records
  function restoreRecords() {
    delete_record.forEach( function (record) {
      history_board.appendChild(record)
    })
    delete_record = [];
  }

});