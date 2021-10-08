$(function(){
    
    $(window).on('load scroll',function(){
    
      if ($(window).scrollTop() > 740) {  //740pxスクロールしたら
      $('.mv__catch').addClass('stop'); //class『stop』を追加
      } else{
      $('.mv__catch').removeClass('stop'); //『.end_box』より上部に戻ったらclass『none』を削除
      }

    })
        
  });





//   $(function(){
//     var scrollStart = $('.mv__catch').offset().top; //ページ上部からの距離を取得
//     var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
//     var distance = 0;
   
//     $(document).scroll(function(){
//       distance = $(this).scrollTop(); //スクロールした距離を取得

   
//       if (scrollEnd <= distance) { //スクロール距離が『.end_box』の位置を超えたら
//         $('.mv__catch').addClass('stop'); //class『stop』を追加
//       } else{
//         $('.mv__catch').removeClass('stop'); //『.end_box』より上部に戻ったらclass『none』を削除
//       }
//     });      
//   });