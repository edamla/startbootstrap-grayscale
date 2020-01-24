    // elementler:
    var frame = document.getElementById("iframe");
    var button = document.getElementById("button");
    var sidebar = document.querySelector(".sidebar");
    var ilk = 1;

    // document click eventleri
    document.addEventListener('click', function (e) {
      console.log(e.target);
    }

    document.addEventListener('click', function (e) {
      if (e.target.matches('li')) {
        //console.log(e); // mouse click event
        //console.log(e.toElement); // element
        //console.log(e.toElement.id); // element id
        frame.src = "books/" + e.toElement.id + "/index.html";
        if (sidebar.classList.contains("mobile")) {
          sidebar.style.display = "none";
        }

      }

      if (e.target.matches('#button')) {
        //console.log(e); // mouse click event
        //console.log(e.toElement); // element
        //console.log(e.toElement.id); // element id

        var sidebardurum = getComputedStyle(sidebar, null).display;
        if (sidebardurum == "none") {
          sidebar.style.display = "block";
          sidebar.classList.add('mobile');
        } else {
          sidebar.style.display = "none";
          sidebar.classList.remove('mobile');
        }
      }

    }, false);


    function simulateClick(id) {
      var evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0,
        false, false, false, false, 0, null);

      var cb = document.getElementById(id);
      cb.dispatchEvent(evt);
    }

    setInterval(
      function () {
        if (ilk == 1) {
          simulateClick('button');
          ilk = ilk + 1;
        }
      },
      1000);

    /*JS FOR SCROLLING THE ROW OF THUMBNAILS*/
    $(document).ready(function () {
      $('.vid-item').each(function (index) {
        $(this).on('click', function () {
          var current_index = index + 1;
          $('.vid-item .thumb').removeClass('active');
          $('.vid-item:nth-child(' + current_index + ') .thumb').addClass('active');
        });
      });
    });