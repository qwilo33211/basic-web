$(document).ready(function () {
  console.log('adc');
  var inputer = $('.inputer');
  var clearOn = $('.btn6');
  var getNumAOn = $('.btn1, .btn2, .btn3, .btn4');
  var gogoOn = $('.btn5');
  var dataCalc = '';

  var numA;
  var numB;
  
  function clear() {
    inputer.val('');
    // console.log('clear');
  }

  function getNumA() {
    if (inputer.val() === '') {
      alert('請輸入正確數值');
    } else {
      numA = Number(inputer.val());
      inputer.val('');
    }
    console.log('numA', numA);
  }

  function gogo() {
    if (inputer.val() === '') {
      alert('請輸入正確數值');
    } else {
      
      numB = Number(inputer.val());
      console.log('我做運算', dataCalc);
      if (dataCalc === '+') { 
        inputer.val(numA + numB);
      }
      if (dataCalc === '-') { 
        inputer.val(numA - numB);
      }
      if (dataCalc === 'x') { 
        inputer.val(numA * numB);
      }
      if (dataCalc === '/') { 
        inputer.val(numA / numB);
      }
      
    }
    console.log('numB', numB);
  }
  
  getNumAOn.click(function() {
    dataCalc = $(this).attr('data-calc');
    getNumA();
  })
  
  clearOn.click(function() {
    // console.log('click');
    clear();
  })

  gogoOn.click(function() {
    gogo();
  })
})