$(document).ready(function() {
    $("img").mouseenter(
        function() {
            $(this).css("opacity", "0.3")
            $(this).next().css("bottom", this.height / 2 - 20)
            if ($(this).next().hasClass("except") == true) {
                $(this).next().css("left", $(this).parent().width() / 2 - 30);
            }
            else {
                $(this).next().css("left", $(this).parent().width() / 2 - 68);
            }
            $(this).next().show()
        });
    $(".container").mouseleave(
        function() {
            $("img").css("opacity", "1");
            $("img").next().hide()
        }
    );
}); 
