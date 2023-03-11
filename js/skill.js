$(document).ready(function () {
    var scene01Num = 1;

    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 1800 && scene01Num == 1) {
            scene01Num = 0;
            $("#skill .in_box01")
                .stop()
                .delay(0)
                .css({ top: "300px" })
                .animate({ top: "150px" }, 1000);
            $("#skill .in_box02")
                .stop()
                .delay(300)
                .css({ top: "300px" })
                .animate({ top: "30px" }, 1000);
            $("#skill .in_box03")
                .stop()
                .delay(600)
                .css({ top: "300px" })
                .animate({ top: "120px" }, 1000);
            $("#skill .in_box04")
                .stop()
                .delay(900)
                .css({ top: "300px" })
                .animate({ top: "100px" }, 1000);
            $("#skill .in_box05")
                .stop()
                .delay(1200)
                .css({ top: "300px" })
                .animate({ top: "50px" }, 1000);
            $("#skill .in_box06")
                .stop()
                .delay(1500)
                .css({ top: "300px" })
                .animate({ top: "100px" }, 1000);
            $("#skill .in_box07")
                .stop()
                .delay(1800)
                .css({ top: "300px" })
                .animate({ top: "30px" }, 1000);
        } else if (scrollTop < 1500 && scene01Num == 0) {
            scene01Num = 1;
            $("#skill .in_box01")
                .stop()
                .css({ top: "150px" })
                .animate({ top: "300px" }, 1000);
            $("#skill .in_box02")
                .stop()
                .css({ top: "30px" })
                .animate({ top: "300px" }, 1000);
            $("#skill .in_box03")
                .stop()
                .css({ top: "120px" })
                .animate({ top: "300px" }, 1000);
            $("#skill .in_box04")
                .stop()
                .css({ top: "100px" })
                .animate({ top: "300px" }, 1000);
            $("#skill .in_box05")
                .stop()
                .css({ top: "90px" })
                .animate({ top: "300px" }, 1000);
            $("#skill .in_box06")
                .stop()
                .css({ top: "50px" })
                .animate({ top: "300px" }, 1000);
            $("#skill .in_box07")
                .stop()
                .css({ top: "70px" })
                .animate({ top: "300px" }, 1000);
        }
    });
});
