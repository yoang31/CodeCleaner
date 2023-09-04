window.addEventListener("load", () => {
    const indexSwiper = new Swiper("#index", {
        direction: "vertical",
        speed: 1000,
        mousewheel: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: "#notice-scroll"
        },
        pagination: {
            el: "#index-pagination",
            clickable: true
        }
    });

    const campaignSwiper = new Swiper("#index-campaign .swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            prevEl: "#index-campaign .swiper-prev",
            nextEl: "#index-campaign .swiper-next"
        },
        breakpoints: {
            691: {
                slidesPerView: 2
            },
            941: {
                slidesPerView: 3
            }
        }
    })

    function AnimateTarget(item) {
        this.item = item;
    }

    AnimateTarget.prototype.animateOn = function () {
        this.item.classList.add("animateOn");
    };

    AnimateTarget.prototype.animateZoomOut = function () {
        this.item.classList.add("zoomOut");
    };

    AnimateTarget.prototype.animateOff = function () {
        if (this.item.classList.contains("animateOn") === true) {
            this.item.classList.remove("animateOn");
        } else {
            this.item.classList.remove("zoomOut");
        }
    };

    const banner = document.querySelector("#index-banner"),
        slogan = document.querySelector("#index-slogan"),
        pollutions = document.querySelector("#index-pollutions"),
        campaign = document.querySelector("#index-campaign");

    const bannerLogo = new AnimateTarget(banner.querySelector(".logo")),
        bannerText = new AnimateTarget(banner.querySelector("h5")),
        sloganBackground = new AnimateTarget(slogan.querySelector(".section-background")),
        sloganText1 = new AnimateTarget(slogan.querySelector("h2:first-of-type")),
        sloganText2 = new AnimateTarget(slogan.querySelector("h2:last-of-type")),
        pollutionsTitle = new AnimateTarget(pollutions.querySelector(".title")),
        pollutionsBtn1 = new AnimateTarget(pollutions.querySelector(".air")),
        pollutionsBtn2 = new AnimateTarget(pollutions.querySelector(".marine")),
        campaignTitle = new AnimateTarget(campaign.querySelector(".title")),
        campaignBtn1 = new AnimateTarget(campaign.querySelector(".swiper-slide:nth-of-type(1)")),
        campaignBtn2 = new AnimateTarget(campaign.querySelector(".swiper-slide:nth-of-type(2)")),
        campaignBtn3 = new AnimateTarget(campaign.querySelector(".swiper-slide:nth-of-type(3)")),
        header = new AnimateTarget(document.querySelector("header"));

    bannerLogo.animateOn();

    setTimeout(() => {
        bannerText.animateOn();
    }, 1000);

    indexSwiper.on("activeIndexChange", (e) => {
        if (e.realIndex === 0) {
            setTimeout(() => {
                bannerLogo.animateOn();
                setTimeout(() => {
                    bannerText.animateOn();
                }, 1000);
            }, 500);
        } else {
            bannerLogo.animateOff();
            bannerText.animateOff();
        }

        if (e.realIndex === 1) {
            sloganBackground.animateZoomOut();
            setTimeout(() => {
                sloganText1.animateOn();
                setTimeout(() => {
                    sloganText2.animateOn();
                }, 1000);
            }, 500)
        } else {
            sloganBackground.animateOff();
            sloganText1.animateOff();
            sloganText2.animateOff();
        }

        if (e.realIndex === 2) {
            setTimeout(() => {
                header.animateOn();
                pollutionsTitle.animateOn();
                setTimeout(() => {
                    pollutionsBtn1.animateOn();
                    setTimeout(() => {
                        pollutionsBtn2.animateOn();
                    }, 500);
                }, 500);
            }, 500);
        } else {
            header.animateOff();
            pollutionsTitle.animateOff();
            pollutionsBtn1.animateOff();
            pollutionsBtn2.animateOff();
        }

        if (e.realIndex === 3) {
            setTimeout(() => {
                campaignTitle.animateOn();
                setTimeout(() => {
                    campaignBtn1.animateOn();
                    setTimeout(() => {
                        campaignBtn2.animateOn();
                        setTimeout(() => {
                            campaignBtn3.animateOn();
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        } else {
            campaignTitle.animateOff();
            campaignBtn1.animateOff();
            campaignBtn2.animateOff();
            campaignBtn3.animateOff();
        }
    })
})
