window.onload = function () {
    var select = new Up_opacity();
    var moveup_eles = this.document.getElementsByName("move_up");
    var moveup_eles1 = this.document.getElementsByName("move_up1");
    for (var i = 0; i < moveup_eles.length; i++) {
        console.log(moveup_eles[i].getElementsByClassName);
        select.change_query(moveup_eles[i]);
    }
    setTimeout(() => select.change_query(moveup_eles1[0]), 500);
    setTimeout(() => select.change_query(moveup_eles1[1]), 500);
    setTimeout(() => select.change_query(moveup_eles1[2]), 400);
    setTimeout(() => select.change_query(moveup_eles1[3]), 800);
    setTimeout(() => select.change_query(moveup_eles1[4]), 500);
    setTimeout(() => select.change_query(moveup_eles1[5]), 100);
    setTimeout(() => select.change_query(moveup_eles1[6]), 200);
    setTimeout(() => select.change_query(moveup_eles1[7]), 300);
    if (window.innerWidth > 690) {
        select.height_query(".graph_con:nth-of-type(1) .graph", "80px", "number", 0);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(2) .graph", "100px", "number2", 0), 200);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(3) .graph", "140px", "number3", 0), 300);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(4) .graph", "430px", "number4", 450), 400);
    } else if (window.innerWidth > 470) {
        select.height_query(".graph_con:nth-of-type(1) .graph", "50px", "number", 0);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(2) .graph", "70px", "number2", 0), 200);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(3) .graph", "110px", "number3", 0), 300);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(4) .graph", "400px", "number4", 450), 400);
    } else {
        select.height_query(".graph_con:nth-of-type(1) .graph", "50px", "number", 0);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(2) .graph", "70px", "number2", 0), 200);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(3) .graph", "110px", "number3", 0), 300);
        setTimeout(() => select.height_query(".graph_con:nth-of-type(4) .graph", "320px", "number4", 450), 400);
    }
    window.addEventListener('scroll', function () {
        var select = new Up_opacity();
        var moveup_eles = this.document.getElementsByName("move_up");
        var moveup_eles1 = this.document.getElementsByName("move_up1");
        for (var i = 0; i < moveup_eles.length; i++) {
            console.log(moveup_eles[i].getElementsByClassName);
            select.change_query(moveup_eles[i]);
        }
        setTimeout(() => select.change_query(moveup_eles1[0]), 500);
        setTimeout(() => select.change_query(moveup_eles1[1]), 500);
        setTimeout(() => select.change_query(moveup_eles1[2]), 400);
        setTimeout(() => select.change_query(moveup_eles1[3]), 800);
        setTimeout(() => select.change_query(moveup_eles1[4]), 500);
        setTimeout(() => select.change_query(moveup_eles1[5]), 100);
        setTimeout(() => select.change_query(moveup_eles1[6]), 200);
        setTimeout(() => select.change_query(moveup_eles1[7]), 300);
        if (window.innerWidth > 690) {
            select.height_query(".graph_con:nth-of-type(1) .graph", "80px", "number", 0);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(2) .graph", "100px", "number2", 0), 200);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(3) .graph", "140px", "number3", 0), 300);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(4) .graph", "430px", "number4", 450), 400);
        } else if (window.innerWidth > 470) {
            select.height_query(".graph_con:nth-of-type(1) .graph", "50px", "number", 0);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(2) .graph", "70px", "number2", 0), 200);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(3) .graph", "110px", "number3", 0), 300);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(4) .graph", "400px", "number4", 450), 400);
        } else {
            select.height_query(".graph_con:nth-of-type(1) .graph", "50px", "number", 0);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(2) .graph", "70px", "number2", 0), 200);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(3) .graph", "110px", "number3", 0), 300);
            setTimeout(() => select.height_query(".graph_con:nth-of-type(4) .graph", "320px", "number4", 450), 400);
        }
    });

    //content3 이미지에 마우스 올리면
    var content3_imgs = document.getElementsByClassName('art_cont3_img');
    for (var i = 0; i < content3_imgs.length; i++) {
        content3_imgs[i].addEventListener('mouseenter', (event) => {
            event.target.children[0].style.cssText = "opacity:1;transform:translateY(0px);transition: 0.3s all linear;";
            event.target.style.transition = "0.3s all linear";
        });
        content3_imgs[i].addEventListener('mouseleave', (event) => {
            event.target.children[0].style.cssText = "opacity:0;transform: translateY(20px);transition: 0.0s all linear;";
            event.target.style.transition = "1s all linear";
        });
    }
    //section title 시작
    var section = new Up_opacity();
    section.Up(".sec_cont h1");
    setTimeout(() => section.Up(".sec_cont p"), 500);

}

// 요소 스르륵 애니메이션
function Up_opacity() {
    this.scrollY = window.scrollY;
}

Up_opacity.prototype.change_query = function (ele) {
    this.selector = ele;
    this.scroll = this.selector.offsetTop - window.innerHeight + this.selector.clientHeight;
    if (this.scrollY > this.scroll) {
        this.selector.style.cssText = "opacity:1;transform: translateY(0px);";
    }
}
Up_opacity.prototype.height_query = function (ele, height, id, str) {
    this.selector = document.querySelector(ele);
    this.scroll = this.selector.offsetTop - window.innerHeight + this.selector.clientHeight;
    if (this.scrollY > this.scroll && this.scrollY > this.scroll) {
        this.selector.style.cssText = "height:" + height;

        const target = document.getElementById(id).getAttribute('data-target');

        animateValue(id, str, parseInt(target), 1000);
    }
}
//요소 up시키기
Up_opacity.prototype.Up = function (ele) {
    this.selector = document.querySelector(ele);
    this.selector.style.cssText = "opacity:1;transform:translateY(0px);";
}

// 숫자 증감 애니메이션
function animateValue(id, start, end, duration) {

    const obj = document.getElementById(id);
    if (obj.innerHTML == 0) {
        const stepTime = Math.abs(Math.floor(duration / (end - start)));

        let current = start;
        const step = end > start ? 1 : -1;

        const timer = setInterval(function () {
            current += step;
            obj.innerHTML = current + "만명";

            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

}

window.addEventListener("load", () => {
    const header = document.querySelector("header");

    let headerAnimation = () => {
        if (window.scrollY >= window.innerHeight) {
            header.style.background = "#000000";
        } else {
            header.style.background = "transparent";
        }
    };

    headerAnimation();

    window.addEventListener("scroll", () => {
        headerAnimation();
    })
})
