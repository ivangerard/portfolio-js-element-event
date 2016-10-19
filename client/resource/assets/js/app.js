window.$ = window.jQuery = require("jquery")

// dah pake jquery
$(function() {
  refreshAllGallery()
    $("#isi-gallery").show()
    $("#listlisting").hide()

    $("#message").hide()
    $("#btn-show-gallery").click(function() {
    $("#isi-gallery").show()

    })
    $("#btn-hide-gallery").click(function() {
    $("#isi-gallery").hide()
    })
    $("#change-color").click(function() {
      var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      $("#isi-gallery").css("background-color",hue); //edit, body must be in quotes!
  });
    $("#search-box").keyup(function() {
        if ($("#search-box").val().length > 0) {
            searchGallery($("#search-box").val())
        } else {
            $("isi-gallery").html("")
        }
    })
})
let refreshAllGallery = function() {
    $.ajax({
        url: 'http://localhost:8080/api/listings',
        type: "GET",
        success: function(result) {
            let allGallery = ""
            for (let i in result) {
                let component = ""
                component = component +
        `



<div class="col-xs-6 col-md-2 margin20">
        <div class="hovereffect">
       <img alt="140x140" class="img-responsive img-rounded" src="${result[i].gallery}" alt="" style="width: 140px; height: 140px;">
       <div class="overlay">
          <h2>${result[i].title}</h2>

       </div>
   </div>
     </div>



        `
            allGallery = allGallery + component
            }
            $("#isi-gallery").html(allGallery)
        }
    })
}
//
let searchGallery = function(query) {
    $.ajax({
        url: `http://localhost:8080/api/search/${query}`,
        type: "GET",
        success: function(result) {
            let allGallery = ""
            for (let i in result) {
                let component = ""
                component = component +
                    `
                    <div class="col-xs-6 col-md-2 margin20">
                            <div class="hovereffect">
                           <img alt="140x140" class="img-responsive img-rounded" src="${result[i].gallery}" alt="" style="width: 140px; height: 140px;">
                           <div class="overlay">
                              <h2>${result[i].title}</h2>

                           </div>
                       </div>
                         </div>`
                    console.log(result);
                allGallery = allGallery + component
            }
            $("#isi-gallery").html(allGallery)
        }
    })
}
