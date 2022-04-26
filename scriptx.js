// Shows loading screen till the webpage is loading //
{
  setTimeout(window.onload = function loader() {
    document.getElementById('loading').style = "display:none"
  }, 1569)
}


// NAV-BAR HIDE ON SCROLL DOWN //
{
  var Scrollpos = window.pageYOffset;
  window.onscroll = function() {
    var newScrollPos = window.pageYOffset;
    if (Scrollpos > newScrollPos) {
      document.getElementById("navx").style.top = "0";
    } else {
      document.getElementById("navx").style.top = "-60px";
    }
    Scrollpos = newScrollPos;
  }
}


// Menubar toggle in small screen//
{
  $("#barbar").click(() => $("#menu-list").slideToggle(500))

  // Menubar re-sets to default style when resized.
  $(window).resize(() => {
    if ($(window).innerWidth() > 768) {
      $("#menu-list").removeAttr("style");
    }
  })

  // Menubar dissappear when scrolling the page.
  $(window).scroll(() => {
    if ($(window).innerWidth() < 769) {
      $("#menu-list").slideUp(500);
    }
  })

  // Hide Menu when clicked anywhere outside the menu-block
  // var mCon = $("#menu-list")
  // $(window).mouseup((e) => {
  //   if ($(window).innerWidth() < 769 && !mCon.is(e.target) && mCon.has(e.target).length === 0) {
  //     mCon.slideUp(500);
  //   }
  // })
  //Contradicts with Menubar toggle button
}


// Scroll to Top button //
{
  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $("#srl-up").fadeIn()
    } else {
      $("#srl-up").fadeOut()
    }
  })
  $("#srl-up").click(() => $(window).scrollTop(0))
}


// IMAGE SLIDER ABOUT PAGE //
{
  var arr_image = ['a-i0', 'a-i1', 'a-i2', 'a-i3']
  var i = 0;

  function nextImage() {
    i++;
    if (i >= arr_image.length) {
      i = 0;
      document.getElementById('box').innerHTML = `<img src="images/${arr_image[i]}.jpg" alt="Team Kosmos eSports">`
    } else {
      document.getElementById('box').innerHTML = `<img src="images/${arr_image[i]}.jpg" alt="Team Kosmos eSports">`
    }
  }

  function prevImage() {
    i--;
    if (i < 0) {
      i = arr_image.length - 1;
      document.getElementById('box').innerHTML = `<img src="images/${arr_image[i]}.jpg" alt="">`
    } else {
      document.getElementById('box').innerHTML = `<img src="images/${arr_image[i]}.jpg" alt="">`
    }
  }

  setInterval(nextImage, 3690);
}


// FORM VALIDATION //
{
  var nameExp = /^[a-zA-Z\s]+$/;
  var numExp = /^[0-9]*$/;
  var emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var passExp = /^[a-zA-Z]\w{3,14}$/;
  // var alphaNumExp = /^[a-zA-Z0-9]+$/;
  // var alphaNumSpaceExp = /^[a-zA-Z0-9\s]+$/;
  var dateExp = /((0?[13578]|10|12)(-|\/)((0[0-9])|([12])([0-9]?)|(3[01]?))(-|\/)((\d{4})|(\d{2}))|(0?[2469]|11)(-|\/)((0[0-9])|([12])([0-9]?)|(3[0]?))(-|\/)((\d{4}|\d{2})))/;
  var addressExp = /^[a-zA-Z0-9\s,.'-]{3,}$/;


  function validate() {

    // First name verification
    var x = document.getElementById('f-name').value;
    if (x == "") {
      document.getElementById('error-fname').innerHTML = "* Required";
      document.getElementById('f-name').focus();
      return false;
    } else if (!x.match(nameExp)) {
      document.getElementById('error-fname').innerHTML = "Enter Correct Name";
      document.getElementById('f-name').focus();
      return false;
    } else {
      document.getElementById('error-fname').innerHTML = "";
    }

    // Last Name verification USING JQUERY
    var x = $('#l-name').val();
    if (x == "") {
      $('#error-lname').html("* Required");
      $('#l-name').focus();
      return false;
    } else if (!x.match(nameExp)) {
      $('#error-lname').html("Name in correct format");
      $('#l-name').focus();
      return false;
    } else {
      $('#error-lname').html("");
    }

    // Email verification
    var x = document.getElementById('email').value;
    if (x == "") {
      document.getElementById('error-email').innerHTML = "* Required";
      document.getElementById('email').focus();
      return false;
    } else if (!x.match(emailExp)) {
      document.getElementById('error-email').innerHTML = "Enter Correct Mail";
      document.getElementById('email').focus();
      return false;
    } else {
      document.getElementById('error-email').innerHTML = "";
    }

    // Phone no verification
    var x = document.getElementById('phone').value;
    if (x == "") {
      document.getElementById('error-phone').innerHTML = "* Required";
      document.getElementById('phone').focus();
      return false;
    } else if (!x.match(numExp)) {
      document.getElementById('error-phone').innerHTML = "Enter Correct Number";
      document.getElementById('phone').focus();
      return false;
    }
    if (x.length < 10 || x.length > 13) {
      document.getElementById('error-phone').innerHTML = "Contact No. should be between 10 & 13 digits";
      document.getElementById('phone').focus();
      return false;
    } else {
      document.getElementById('error-phone').innerHTML = "";
    }

    // Date entry validation
    var x = document.getElementById('dob').value;
    if (x == "") {
      document.getElementById('error-dob').innerHTML = "* Required";
      document.getElementById('dob').focus();
      return false;
    } else if (!x.match(dateExp)) {
      document.getElementById('error-dob').innerHTML = "Select a date";
      document.getElementById('dob').focus();
      return false;
    } else {
      document.getElementById('error-dob').innerHTML = "";
    }

    // Gender verification
    var x = document.getElementsByName('gen');
    if (!(x[0].checked || x[1].checked || x[2].checked)) {
      document.getElementById('error-gender').innerHTML = "Select Gender";
      document.getElementById('error-gender').focus();
      return false;
    } else {
      document.getElementById('error-gender').innerHTML = "";
    }

    //Selection box (select country) USING JQUERY
    var x = $('#country').val();
    if (x == "") {
      $('#error-country').html("* Select your country");
      $('#error-country').focus();
      return false;
    } else {
      $('#error-country').html("");
    }

    // Address verification
    var x = document.getElementById('user-address').value;
    if (x == "") {
      document.getElementById('error-address').innerHTML = "* Required";
      document.getElementById('user-address').focus();
      return false;
    } else if (!x.match(addressExp)) {
      document.getElementById('error-address').innerHTML = "Type Address in correct format";
      document.getElementById('user-address').focus();
      return false;
    } else {
      document.getElementById('error-address').innerHTML = "";
    }

    // Checkbox checked or not for terms & conditions

    // var x = $("#toc");
    // if (!x.checked) {
    //   $("#error-toc").html(" * Required");
    //   $("#toc").focus();
    //   return false;
    // } else {
    //   $("#error-toc").html(" ");
    //   return true;
    // }

    var x = document.getElementById("toc");
    if (!x.checked) {
      document.getElementById("error-toc").innerHTML = " * Required";
      document.getElementById("toc").focus();
      return false;
    } else {
      document.getElementById("error-toc").innerHTML = "";
    }

  }
}
