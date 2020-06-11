$(function () {
  // Открытие и закрытие адаптивного меню по кнопке
  $(".am__JS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton1").removeClass("open");
      $(".am__area").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton1").addClass("open");
      $(".am__area").slideDown(200);

      //подгружает контент активного меню в .am_active
      // и его родителя в .am_back
    }
  });
  // Закрытие адаптивного меню по кнопке Close
  $(".am__close").click(function () {
    $(".am__JS").removeClass("open");
    $(".menuButton1").removeClass("open");
    $(".am__area").slideUp(200);
  });

  $(".am__BackBtn").on("click", function (e) {
    e.preventDefault();
    console.log("клик назад ");

    var menuWrapper = $(this).closest(".am__area").find(".am_active");
    var menuWrapperBack = $(this).closest(".am__area").find(".am_active").prev();
    var menuWrapperNexn = $(this).closest(".am__area").find(".am_active").next();

    menuWrapperBack.animate({ left: 0 + "%" }, 300);
    menuWrapper.animate({ left: 100 + "%" }, 300);
    menuWrapperNexn.animate({ left: 200 + "%" }, 300);

    menuWrapper.removeClass("am_active");
    menuWrapperBack.addClass("am_active");

    var new_menuWrapper = $(this).closest(".am__area").find(".am_active");
    var new_menuWrapperBack = new_menuWrapper.prev();

    //подгружает контент родителя в new_menuWrapperBack
  });

  $(".am__more").on("click", function (e) {
    e.preventDefault();
    console.log("клик подробнее");

    //подгружает контент дочернего пункта в .am_next
    //дальше определяет блоки и анимирует

    var menuWrapper = $(this).closest(".am__area").find(".am_active");
    var menuWrapperBack = $(this).closest(".am__area").find(".am_active").prev();
    var menuWrapperNexn = $(this).closest(".am__area").find(".am_active").next();

    menuWrapperBack.animate({ left: -200 + "%" }, 300);
    menuWrapper.animate({ left: -100 + "%" }, 300);
    menuWrapperNexn.animate({ left: 0 + "%" }, 300);

    menuWrapper.removeClass("am_active");
    menuWrapperNexn.addClass("am_active");
  });

  /* Адаптивное меню для всей структуры - подойдет для modx - его код в чанке __adaptive-menu.pug
  
  // Открытие и закрытие адаптивного меню по кнопке
  $(".menuButton1__areaJS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton1").removeClass("open");
      $(".adaptiveMenu__areaJS").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton1").addClass("open");
      $(".adaptiveMenu__areaJS").slideDown(200);
      var adaptiveMenu__titleH = $(".adaptiveMenu__title").outerHeight();
      console.log("adaptiveMenu__titleH " + adaptiveMenu__titleH);
      $(".adaptiveMenu__wrapper").css({ paddingTop: adaptiveMenu__titleH });
    }
  });
  $(".adaptiveMenu__areaClose").click(function () {
    $(".menuButton1__areaJS").removeClass("open");
    $(".menuButton1").removeClass("open");
    $(".adaptiveMenu__areaJS").slideUp(200);
  });

  // создание блока заголовка дочернего меню и кнопки назад
  $(".adaptiveMenu li:has(ul)").addClass("hasInner");
  $(".adaptiveMenu li.hasInner").each(function () {
    // var liTitle = $(this).children("a").text();
    var liTitle1 = $(this).children("a").children("span:first-child").text();
    var liTitle2 = $(this).children("a").children("span:last-child").text();
    var liTitle = liTitle1 + " " + liTitle2;
    $(this)
      .children("ul")
      .prepend(
        "<div class='adaptiveMenuUlTitle'><span>" +
          liTitle +
          "</span><div class='adaptiveMenuUlTitleBack'>Назад</div></div>"
      );
    $(this).children("a").append('<span class="menuMoreLink">Подробнее</span>');
  });

  var x = 0;
  $(".adaptiveMenu li.hasInner > a > .menuMoreLink").click(function (e) {
    e.preventDefault();
    // $(this).addClass("active");
    console.log(x);
    x = x - 100;
    console.log(x);
    $(".adaptiveMenu").animate({ left: x + "%" }, 300);
  });

  $(".adaptiveMenuUlTitleBack").click(function (e) {
    e.preventDefault();
    console.log("клик назад ");
    x = x + 100;
    console.log(x);
    $(".adaptiveMenu").animate({ left: x + "%" }, 300);
  });

  $(".adaptiveMenuUlTitleBack").click(function () {
    var dataurl = this.attr("data-follow");
    $.ajax({
      type: "get",
      url: "some.php",
      data: "dataurl",
      success: function (x, y, z) {
        // в заголовок вставляем x
        // в новый адрес назад вставляем y
        // в список вставляем z и т.д.
      },
    });
  });
  */

  $(".adaptiveSearchOn__btn").click(function () {
    $(this).toggleClass("open");
    $(".adaptiveSearch__area").slideToggle(200);
  });

  $(".adaptiveSearch__areaClose").click(function () {
    $(".adaptiveSearchOn__btn").toggleClass("open");
    $(".adaptiveSearch__area").slideToggle(200);
  });

  // главный слайдер на главной
  if ($(".swiper-container1").length) {
    var mySwiper1 = new Swiper(".swiper-container1", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination1",
        type: "bullets",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
          $(".swiper-slide").children(".swiper__cadr").removeClass("animationfadeIn").fadeOut(500);
          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("animationfadeIn");
          }, 500);
        },
        slideChange: function () {
          $(".swiper-slide").children(".swiper__cadr").removeClass("animationfadeIn").fadeOut(500);
          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("animationfadeIn");
          }, 500);
        },
      },
    });
  }

  //Слайдер на странице товара
  if ($(".slider__new").length) {
    // if ($(".gallery-top-v .swiper-slide2").length == 1) {
    //   $(".swiper-pagination").addClass("disabled");
    //   $(".swiper-button-nextV").hide();
    //   $(".swiper-button-prevV").hide();
    //   $(".gallery-thumbs-v").hide();
    // }

    var galleryThumbs = new Swiper(".slider__newThumbs", {
      spaceBetween: 5,
      loop: false,
      direction: "vertical",
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        1: {
          direction: "horizontal",
          autoHeight: true,
        },
        // when window width is >= 480px
        481: {
          direction: "vertical",
          autoHeight: false,
        },
      },
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: false,
      autoHeight: false,
    });
    var galleryTop = new Swiper(".slider__newContent", {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: false,
      effect: "slide",
      autoHeight: false,
      navigation: {
        nextEl: ".sliderImgBtnNext",
        prevEl: ".sliderImgBtnPrev",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
      breakpoints: {
        // when window width is >= 320px
        1: {
          autoHeight: true,
        },
        // when window width is >= 480px
        481: {
          autoHeight: false,
        },
      },
      setWrapperSize: true,
    });
  }

  $("#my-slider").sliderPro({
    width: "100%",
    height: 600,
    arrows: true,
    buttons: false,
    waitForLayers: true,
    centerImage: true,
    autoSlideSize: false,
    loop: false,
    // smallSize: 500,
    // mediumSize: 1000,
    // largeSize: 3000,
    fade: false,
    autoplay: false,
    autoScaleLayers: false,
    imageScaleMode: "contain",
    // thumbnailsScaleMode: "exact",
    // fullScreen: true,
    thumbnailsPosition: "right",
    thumbnailPointer: false,
    thumbnailWidth: 66,
    thumbnailHeight: 100,
    breakpoints: {
      1280: {
        height: 500,
        thumbnailsPosition: "bottom",
        // thumbnailWidth: 270,
        // thumbnailHeight: 10,
      },
      768: {
        thumbnails: hide,
      },
      // 800: {

      // },
      // 800: {

      // },
      // 500: {

      // },
    },
  });

  // слайдер на странице магазина
  if ($(".swiper-container_shop").length) {
    var mySwiper1 = new Swiper(".swiper-container_shop", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      // pagination: {
      //   el: ".swiper-pagination_shop",
      //   type: "bullets",
      //   dynamicBullets: false,
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-nextShop",
        prevEl: ".swiper-button-prevShop",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
          $(".swiper-slide_shop").children(".swiper__cadr_shop").removeClass("animationfadeIn").fadeOut(500);
          // setTimeout(function () {
          //   $(".swiper-slide-active")
          //     .children(".swiper__cadr_shop")
          //     .fadeIn(500)
          //     .addClass("animated")
          //     .addClass("animationfadeIn");
          // }, 500);
          $(".swiper-container").on("mouseenter", function () {
            mySwiper1.autoplay.stop();
            console.log("swiper autoplay stop");
          });
          $(".swiper-container").on("mouseleave", function () {
            mySwiper1.autoplay.start();
            console.log("swiper autoplay start again");
          });
        },
        slideChange: function () {
          $(".swiper-slide_shop").children(".swiper__cadr_shop").removeClass("animationfadeIn").fadeOut(500);
          // setTimeout(function () {
          //   $(".swiper-slide-active")
          //     .children(".swiper__cadr_shop")
          //     .fadeIn(500)
          //     .addClass("animated")
          //     .addClass("animationfadeIn");
          // }, 500);
        },
      },
    });
  }
  // карусель брендов-
  if ($(".brandsCarousel-container1").length) {
    var carousel = new Swiper(".brandsCarousel-container1", {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: false,
      loopFillGroupWithBlank: false,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".brandsCarousel__btnPrev",
        nextEl: ".brandsCarousel__btnNext",
      },
      breakpoints: {
        1141: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        921: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        769: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        601: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        481: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        321: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
    });
  }

  //минус и плюс в количестве товара на одной карточке
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  //минус и плюс в количестве товара в таблице для одной строки
  $(".minus_tab").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus_tab").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // $(".catalogMenu li:has(ul)").addClass("fw600");

  //Обертывание всех таблиц в блоке .content для правильного их поведения на адаптиве -
  //дальше работает нужный стиль
  $(".content table").wrap('<div class="table_outer"></div>');

  // Скрипт добавления в избранное через localstorage
  var favorites = JSON.parse(localStorage.getItem("myFavorites")) || [];
  if (favorites.length) {
    console.log("есть записи");
    $(".topFavBtn_notFav").hide();
    $(".topFavBtn_yesFav").css("display", "flex");
    // console.log(favorites);
    favorites.forEach(function (entry) {
      // console.log(entry);
      $("#" + entry).addClass("inFav");
      $("#" + entry)
        .find(".tovarCard__fav")
        .addClass("inFav");
      $("#" + entry)
        .find(".tovarCard__fav")
        .children(".favOff")
        .hide();
      $("#" + entry)
        .find(".tovarCard__fav")
        .children(".favOn")
        .show();
      $(".topFavBtn").addClass("favLinkReady");
    });
  } else {
    console.log("нет записей");
  }
  $(".tovarCard__fav").on("click", function (e) {
    e.preventDefault();
    var value = $(this).closest(".tovarCard__area").attr("id");
    if ($(this).hasClass("inFav")) {
      $(this).removeClass("inFav");
      $(this).children(".favOff").show();
      $(this).children(".favOn").hide();
      // favorites = favorites.filter((val) => val !== "value");
      var index = favorites.indexOf(value);
      if (index >= 0) {
        favorites.splice(index, 1);
      }
    } else {
      $(this).addClass("inFav");
      $(this).children(".favOff").hide();
      $(this).children(".favOn").show();
      favorites.push(value);
    }
    console.log(value);
    console.log(favorites);
    var serialFavorites = JSON.stringify(favorites);
    localStorage.setItem("myFavorites", serialFavorites);
    if (favorites.length) {
      $(".topFavBtn_notFav").hide();
      $(".topFavBtn_yesFav").css("display", "flex");
    } else {
      $(".topFavBtn_notFav").css("display", "flex");
      $(".topFavBtn_yesFav").hide();
    }
  });

  $(".topFavBtn_yesFav").click(function () {
    console.log("переход на страницу избранного");
    var parameters = favorites.join();
    // console.log(favorites);
    console.log(parameters);
    $(location).attr("href", "http://mir.deltal.beget.tech/category.html/" + parameters);
  });

  //Раскрытие фильтра в каталоге по клику на его заголовке
  $(".catalogFilter1__itemTitle").on("click", function () {
    var fCont = $(this).closest(".catalogFilter1__item").find(".catalogFilter1__itemContent");
    var fAll = $(this).closest(".catalogFilter1");
    if ($(this).hasClass("open1")) {
      $(this).removeClass("open1");
      fAll.find(".catalogFilter1__itemContent").removeClass("visible");
    } else {
      fAll.find(".catalogFilter1__itemTitle").removeClass("open1");
      fAll.find(".catalogFilter1__itemContent").removeClass("visible");
      $(this).addClass("open1");
      fCont.addClass("visible");
    }
  });

  //Применение выбранного фильтра - эффект изменения заголовка фильтра на темный при наличии выбраных пунктов внутри
  // $(".filterEnterBtn").on("click", function () {
  //   var filtrItemParent = $(this).closest(".filterBox");

  //   if (filtrItemParent.find("input").is(":checked")) {
  //     console.log("Выбрано");
  //     filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
  //     $(".catalogFilter1__itemContent").removeClass("visible");
  //     $(".catalogFilter1__itemTitle").removeClass("open1");
  //   } else {
  //     console.log("не выбрано");
  //     filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
  //     $(".catalogFilter1__itemContent").removeClass("visible");
  //     $(".catalogFilter1__itemTitle").removeClass("open1");
  //   }
  // });
  // Работающий по старому - выше

  $(".filterEnterBtn").on("click", function () {
    var filtrItemParent = $(this).closest(".filterBox");

    if (filtrItemParent.find("input").is(":checked")) {
      console.log("Выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
    } else {
      console.log("не выбрано");
      filtrItemParent.closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").removeClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
    }
  });

  //скрипт визуального добавления атрибута checked для чекбокса обычного
  if ($(".filterBox__checkbox").length) {
    //сам выбор
    // $(".xcheckbox").click(function (e) {
    //   e.preventDefault();
    //   if ($(this).hasClass("checked")) {
    //     $(this).removeClass("checked");
    //     $(this).children("input").removeAttr("checked");
    //   } else {
    //     $(this).addClass("checked");
    //     $(this).children("input").attr("checked", "checked");
    //   }
    // });
    //Кнопка сброса обычных чекбоксов (не цвета) внутри одного блока фильта *найти  checked  false
    $(".filter__checkboxReset").click(function () {
      console.log("сброс фильтров");
      $(this)
        .closest(".filterBox")
        .find("input[type=checkbox]")
        .each(function (i) {
          this.checked = false;
        });
      // $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
    });
  }

  //Выбор чекбоксов с цветами - применение эффекта по клику на пункт
  if ($(".filter__checkboxColor").length) {
    //сам выбор
    $(".checkboxColor__item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).children(".checkboxColorBox").removeClass("checked");
        $(this).children(".checkboxColorTitle").removeClass("checkColor");
        $(this).children("input").removeAttr("checked");
      } else {
        $(this).addClass("checked");
        $(this).children(".checkboxColorBox").addClass("checked");
        $(this).children(".checkboxColorTitle").addClass("checkColor");
        $(this).children("input").attr("checked", "checked");
      }
    });
    //сброс выбора именно для чекбоксов с цветами
    $(".filter__checkboxColorReset").click(function (e) {
      console.log("сброс фильтров");
      e.preventDefault();
      $(this).closest(".filterBox").find("input[type=checkbox]").removeAttr("checked");
      $(this).closest(".filterBox").find(".checkboxColor__item").removeClass("checked");
      $(this).closest(".filterBox").find(".checkboxColorBox").removeClass("checked");
      $(this).closest(".filterBox").find(".checkboxColorTitle").removeClass("checkColor");
    });
  }

  //Скрипт блока сортировки в фильтах
  if ($(".filterBox__sort").length) {
    $(".filterSort__item").click(function (e) {
      e.preventDefault();
      $(this).closest(".filterBox__content").find(".filterSort__item").removeClass("filterSort__item_active");
      $(this).addClass("filterSort__item_active");
      var activeSortName = $(this).text();
      console.log(activeSortName);
      $(".catalogFilter1__itemTitle_sort span").html(activeSortName);
      $(this).closest(".catalogFilter1__item").find(".catalogFilter1__itemTitle").addClass("active");
      $(".catalogFilter1__itemContent").removeClass("visible");
      $(".catalogFilter1__itemTitle").removeClass("open1");
    });
  }

  //Кнопка очистки всех фильтров
  $(".resetAllFiltersBtn").click(function (e) {
    e.preventDefault();
    //сброс обычныч чекбоксов и закрытие раскрытых блоков
    $(this).closest(".catalogFilter1").find("input[type=checkbox]").removeAttr("checked");
    $(this).closest(".catalogFilter1").find(".xcheckbox").removeClass("checked");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemTitle").removeClass("active");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemContent").removeClass("visible");
    $(this).closest(".catalogFilter1").find(".catalogFilter1__itemTitle").removeClass("open1");
    //сброс чекбоксов с цветом
    $(this).closest(".catalogFilter1").find(".checkboxColorTitle").removeClass("checkColor");
    $(this).closest(".catalogFilter1").find(".checkboxColor__item").removeClass("checked");
    $(this).closest(".catalogFilter1").find(".checkboxColorBox").removeClass("checked");
    //сброс сортировки
    $(this).closest(".catalogFilter1").find(".filterSort__item").removeClass("filterSort__item_active");
    $(".catalogFilter1__itemTitle_sort span").html("Сортировка");
  });

  $("a[data-fancybox]").fancybox({
    closeBtn: false,
    arrows: true,
    keyboard: true,
    nextClick: true,
    infobar: true,
    protect: true,
    backFocus: false, // убирает рассинхрон с swiper
    nextEffect: "elastic",
    prevEffect: "elastic",
    padding: 0,
    loop: true,
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true, // Continue movement after releasing mouse/touch when panning
    },
  });

  // Adaptive filters js
  // Открытие фильтров
  $(".adaptiveFilterOnBtn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".overlay1").hide();
      $(".aFilters__wrapper").fadeOut(200);
    } else {
      $(this).addClass("open");
      $(".overlay1").show();
      $(".aFilters__wrapper").fadeIn(200);
    }
  });
  // Закрытие адаптивного меню по кнопке Close
  $(".aFilters__close").click(function () {
    $(".adaptiveFilterOnBtn").removeClass("open");
    $(".overlay1").hide();
    $(".aFilters__wrapper").fadeOut(200);
  });

  $(".aFilterBox__title").on("click", function () {
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".overlay2").hide();
      $(this).closest(".aFilterBox").children(".aFilterBox__inner").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".overlay2").show();
      $(this).closest(".aFilterBox").children(".aFilterBox__inner").slideDown(200);
    }
  });

  $(".aFilterBox__innerClose").on("click", function () {
    $(this).closest(".aFilterBox").find(".aFilterBox__inner").slideUp(200);
    $(this).closest(".aFilterBox").find(".aFilterBox__title").removeClass("open");
    $(".overlay2").hide();
  });

  $(".aFilterBoxEnterBtn").on("click", function () {
    var filtrItemParent = $(this).closest(".aFilterBox__inner");

    if (filtrItemParent.find("input").is(":checked")) {
      console.log("Выбрано");
      filtrItemParent.closest(".aFilterBox").find(".aFilterBox__title").addClass("choose").removeClass("open");
      filtrItemParent.slideUp(200);
      $(".overlay2").hide();
    } else {
      console.log("не выбрано");
      filtrItemParent.closest(".aFilterBox").find(".aFilterBox__title").removeClass("choose").removeClass("open");
      filtrItemParent.slideUp(200);
      $(".overlay2").hide();
    }
  });
  $(".aFilterBox__Reset").click(function () {
    console.log("сброс фильтров");
    $(this)
      .closest(".aFilterBox__innerContent")
      .find("input[type=checkbox]")
      .each(function (i) {
        this.checked = false;
      });
    // $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
  });

  $(".aFilter__footerReset").on("click", function () {
    $(this)
      .closest(".aFilters__area")
      .find("input[type=checkbox]")
      .each(function (i) {
        this.checked = false;
      });

    $(this).closest(".aFilters__area").find(".aFilterBox__title").removeClass("choose");
  });

  $(".aFilter__footerEnter").on("click", function () {
    // применить фильтры
  });

  if ($(".sizeSelector__area").length) {
    $(".sizeSelector__item").on("click", function () {
      if ($(this).hasClass("sizeSelector__item_selected")) {
        $(this).removeClass("sizeSelector__item_selected");
      } else {
        $(this).addClass("sizeSelector__item_selected");
      }
    });
  }

  if ($(".callActionBtn").length) {
    $(".callActionBtn").on("click", function () {
      // if ($(this).hasClass("callActionBtn_open")) {
      //   $(this).removeClass("callActionBtn_open");
      // } else {
      $(this).addClass("callActionBtn_open");
      // }
    });
  }
});
