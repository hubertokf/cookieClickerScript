var d=document.createElement('script');
 d.src = 'http://code.jquery.com/jquery-latest.js';
 d.onload = function(){
   cookieHack();
 };
 document.getElementsByTagName('head')[0].appendChild(d);




function cookieHack(){
    
    function centerObj(o){
        var offset = o.offset();
        var width = o.width();
        var height = o.height();
        
        var centerX = offset.left + width / 2;
        var centerY = offset.top + height / 2;
        var pos = {
            x: centerX,
            y: centerY
        };
        
        return pos;
    }
    
  $('body').on('mousedown', '#septop', function() {
    $(this).parent().addClass('draggable').parents().on('mousemove', function(e) {
        $('.draggable').offset({
            top: e.pageY-10,
            left: e.pageX - $('.draggable').outerWidth() / 2
        }).on('mouseup', function() {
            $(this).removeClass('draggable');
        });
    });
    e.preventDefault();
  }).on('mouseup', function() {
      $('.draggable').removeClass('draggable');
  });

  var headID = document.getElementsByTagName("head")[0];         
  var cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.rel = 'stylesheet';
  cssNode.href = 'https://cdn.rawgit.com/hubertokf/cookieClickerScript/master/cookiehack.css';
  cssNode.media = 'screen';
  headID.appendChild(cssNode);

  var botao = "<div id='hackbutton' class='button'>Menu Hack</div>";
  var box = "<div id='hackbox' class=''>    <div id='septop' class='separatorBottom'>        <div id='hackboxClose'>X</div>    </div>    <ul id='hacklist'>          <li><div class='hackitem'>Auto Click</div><div class='switch swcookie'><input id='autoclick' class='cmn-toggle cmn-toggle-round' type='checkbox'><label for='autoclick'></label></div></li>      <li><div class='hackitem'>Auto Gold Cookie</div><div class='switch swcookie'><input id='autogoldcookie' class='cmn-toggle cmn-toggle-round' type='checkbox'><label for='autogoldcookie'></label></div></li>		<li><div class='hackitem'>Auto Cervo Natal</div><div class='switch swcookie'><input id='autocervonatal' class='cmn-toggle cmn-toggle-round' type='checkbox'><label for='autocervonatal'></label></div></li>	  </ul>    <div id='hackcredits'>Made by Fozter | v0.6</div></div>";

  $(botao).insertAfter( "#commentsText" );
  $( "body" ).prepend(box);


  $("#hackbutton").click(function(){
  	$( "#hackbox" ).toggle();
  });


  $('body').on('click','#hackboxClose',function(){
  	$( "#hackbox" ).hide();
  });

  var autoclick;
  var autogoldcookie;
  var autocervonatal;

  

  $('body').on('click','#autoclick',function(){
    $(this).toggleClass("btactv");

    if ($(this).hasClass("btactv")){
      autoclick = setInterval(function () {
        $("#bigCookie").click();
        //$(document.elementFromPoint(centerObj($("#bigCookie")).x, centerObj($("#bigCookie")).y )).click();
      }, 10);
    }else{
      clearInterval(autoclick);
    }
  });

  $('body').on('click','#autocervonatal',function(){
    $(this).toggleClass("btactv");

    if ($(this).hasClass("btactv")){
      	autocervonatal = setInterval(function () {
			$("#seasonPopup").click();
		}, 5000);
    }else{
      clearInterval(autocervonatal);
    }
  });

  $('body').on('click','#autogoldcookie',function(){
    $(this).toggleClass("btactv");
    if ($(this).hasClass("btactv")){
      autogoldcookie = setInterval(function () {
        //$("#goldenCookie").click();
        $(".shimmer").click();
        //$(document.elementFromPoint(centerObj($("#goldenCookie")).x, centerObj($("#bigCookie")).y )).click();
      }, 5000);
    }else{
      clearInterval(autogoldcookie);
    }
  });

}






//http://callmenick.com/2014/05/13/css-toggle-switch-examples/

//https://1dc08b28d55df1f60e43787a3b1aaa7b3e62c5ae.googledrive.com/host/0B_8w_zdW-Unofnl6MHZHQlpBVU9kUVA2c3NjSmY3aUwtQVdlS05Ib2Q5RTZXRnYzdndSaXM/
//https://1dc08b28d55df1f60e43787a3b1aaa7b3e62c5ae.googledrive.com/host/0B_8w_zdW-Unofnl6MHZHQlpBVU9kUVA2c3NjSmY3aUwtQVdlS05Ib2Q5RTZXRnYzdndSaXM/cookiehack.js
//https://1dc08b28d55df1f60e43787a3b1aaa7b3e62c5ae.googledrive.com/host/0B_8w_zdW-Unofnl6MHZHQlpBVU9kUVA2c3NjSmY3aUwtQVdlS05Ib2Q5RTZXRnYzdndSaXM/cookiehack.css

//https://cdn.rawgit.com/hubertokf/cookieClickerScript/master/cookiehack.js
//https://cdn.rawgit.com/hubertokf/cookieClickerScript/master/cookiehack.css

//javascript:(function(){ var d=document.createElement('script'); d.src = 'https://1dc08b28d55df1f60e43787a3b1aaa7b3e62c5ae.googledrive.com/host/0B_8w_zdW-Unofnl6MHZHQlpBVU9kUVA2c3NjSmY3aUwtQVdlS05Ib2Q5RTZXRnYzdndSaXM/cookiehack.js?v='+parseInt(Math.random()*99999999); document.getElementsByTagName('head')[0].appendChild(d);})()
//javascript:(function(){ var d=document.createElement('script'); d.src = 'https://cdn.rawgit.com/hubertokf/cookieClickerScript/master/cookiehack.js?v='+parseInt(Math.random()*99999999); document.getElementsByTagName('head')[0].appendChild(d);})()
