// 单选按钮样式控制
$('input[type="radio"]').click(function(){
	var isSelected = $(this).hasClass("selected");
	$('input[type="radio"]').removeClass("selected");
	if(isSelected){
		$(this).removeClass("selected");
	}else{
		$(this).addClass("selected");
	}
});


// 模拟input的状态   错误
setErrorState($(".j_input_group"),"身高不能超过210");
$(".j_input_group .placeholder").focus(function(){
  $(this).hide();
  $(".j_input_group .value").show();
  $(".j_input_group .value").focus();
  $(".j_input_group").removeClass("error");
});

function setErrorState(target,errMsg){
  target.addClass("error");
  target.find(".placeholder").val(errMsg);
}