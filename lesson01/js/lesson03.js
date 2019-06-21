$(document).ready(function () {
  // console.log('哈囉');
  
  var navBtn = $('.navBtn');
  var navBlock = $('.allBtn');
  var st;

  function clickEvent() {
    st = navBtn.attr('data-click');
    console.log(st);

    if(st === 'off') {
      navBlock.addClass('active');
      navBtn.attr('data-click', 'on');
    }else {
      navBlock.removeClass('active');
      navBtn.attr('data-click', 'off');
    }
  }

  navBtn.click(function () {
    clickEvent();
  })
})