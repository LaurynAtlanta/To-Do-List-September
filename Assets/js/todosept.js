const todosLength = () => {
    const num = $('.todos li').length;
    $('.numtodos').text(num);
    return num;
  }

$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})


$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        todosLength();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //get the new todo text from inut
        var todoText = $(this).val();
        $(this).val('');
        //create a new li and add it ul
        $('ul').append('<li><i class="far fa-circle"></i> '+ todoText + ' <span>X</span></li>')
        todosLength();
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});

