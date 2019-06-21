// var navBtn = document.getElementsByClassName('allBtn')[0];
// var a1 = 1;
// var b1 = '1';
// var c1 = 5;

// a1 = a1 * c1;
// a1 = a1 + c1;

// console.log('結果: ', a1);

// jquery 起手式
$(document).ready(function () {
  // console.log('安安你好');
  
  var navBtn = $('.navBtn');
  var navBlock = $('.allBtn');
  var st;

  // navBlock.hide();
  // console.log('結果: ', navBtn);

  function clickEvent() {
    st = navBtn.attr('data-click');
    console.log(st);

    if(st === 'off') {
      navBlock.addClass('active');
      navBtn.attr('data-click', 'on');
    } else {
      navBlock.removeClass('active');
      navBtn.attr('data-click', 'off');
    }
  }

  navBtn.click(function () {
    clickEvent();
  })
});

console.log('行問年好胖 該減肥！！')
