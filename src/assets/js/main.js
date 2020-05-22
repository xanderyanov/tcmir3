$(function () {
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
          $(".swiper-slide").children(".swiper__cadr").removeClass("bounceInRight").fadeOut(500);
          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("bounceInRight");
          }, 500);
        },
        slideChange: function () {
          $(".swiper-slide").children(".swiper__cadr").removeClass("bounceInRight").fadeOut(500);
          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("bounceInRight");
          }, 500);
        },
      },
    });
  }

  //Слайдер на странице товара
  if ($(".slider__new").length) {
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
        321: {
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
        321: {
          autoHeight: false,
        },
      },
      setWrapperSize: true,
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
    $(".xcheckbox").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).children("input").removeAttr("checked");
      } else {
        $(this).addClass("checked");
        $(this).children("input").attr("checked", "checked");
      }
    });
    //Кнопка сброса обычных чекбоксов (не цвета) внутри одного блока фильта
    $(".filter__checkboxReset").click(function () {
      console.log("сброс фильтров");
      $(this).closest(".filterBox").find("input[type=checkbox]").removeAttr("checked");
      $(this).closest(".filterBox").find(".xcheckbox").removeClass("checked");
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
});
