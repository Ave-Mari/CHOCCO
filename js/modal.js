$('.form').submit (e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']"); 
    const phone = form.find("[name='phone']"); 
    const comment = form.find("[name='comment']"); 
    const to = form.find("[name='to']"); 

    const modal = $("#modal");
    const modalText = $("#modal__container");
    const content = modal.find(".modal__title");

    modal.removeClass("error-modal");

    [name, phone, comment, to].forEach(field => {
        field.removeClass("input-error");
        if (field.val().trim() === "") {
            field.addClass("input-error");
        }
    });
        
    const errorFields = form.find(".imput-error");



    const request = $.ajax({
       url: "https://webdev-api.loftschool.com/sendmail",
       method: "post",
       data: {
           name: name.val(),
           phone:  phone.val(),
           comment:  comment.val(),
           to: to.val()
       },

       success: data => {
           content.text(data.message);
        //    console.log(data);

        $.fancybox.open({
            src: "#modal",
            type: "inline"
    
        });


       },

       
       
    });

    request.done(data => {
        content.text(message);

        $.fancybox.open({
            src: "#modal",
            type: "inline"
    
        });
    });

    request.fail((data) => {    
        const message = data.responseJSON.message;
        content.text(message);
        modal.addClass("error-modal");
        modalText.addClass("error-modal-container");
     //    console.log(data);
 
     
    

    }); 

    request.always(() => {
        $.fancybox.open({
            src: "#modal",
            type: "inline"
       
        });
    })    
    
});

$(".app-close-btn").click(e => {
    e.preventDefault();

    $.fancybox.close();
});

