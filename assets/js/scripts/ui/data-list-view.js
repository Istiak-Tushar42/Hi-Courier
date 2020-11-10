$(document).ready(function() {
  "use strict"
  // Pacage Data Table
  var packageView = $(".package").DataTable({
    responsive: false,
    dom: '<"top"<"actions action-btns"B><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: ""
    },
    aLengthMenu: [[30, 50, 100], [30, 50, 100]],
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 30,
    buttons: [
      {
        text: "<i class='feather icon-plus'></i> Add New",
        action: function() {
          $(this).removeClass("btn-secondary")
          $(".button1 .add-new-data").addClass("show")
          $(".overlay-bg").addClass("show")
          $("#data-name, #data-price").val("")
          $("#data-category, #data-status").prop("selectedIndex", 0)
        },
        className: "btn btn-outline-info rounded"
      },
      {
        text: "<i class='feather icon-plus'></i> Import CSV",
        className: "btn btn-outline-info rounded mx-1 import_csv"
      },
      {
        text: "Pickup <i class='feather icon-phone'></i>",
        attr: {
          id: 'pick_up'
        },
        action: function() {
          $('.toast').toast({delay: 3000, animation: true, autohide: true});
          $('.toast').toast('show');
        },
        className: "btn btn-outline-info rounded"
      },
      {
        text: "Change Destination <i class='feather icon-phone'></i>",
        className: "btn btn-outline-info rounded ml-1 change_des"
      }
    ],
    initComplete: function(settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary")
    }
  });

  packageView.buttons('.import_csv').nodes().attr("data-target", "#csvmodal").attr("data-toggle", "modal");
  packageView.buttons('.change_des').nodes().attr("data-target", "#change_desModal").attr("data-toggle", "modal");

  packageView.on('draw.dt', function(){
    setTimeout(function(){
      if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
      }
    }, 50);
  });


  // Billing Data Table
  var billingView = $(".billing").DataTable({
    responsive: false,
    dom: '<"top"<><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: ""
    },
    aLengthMenu: [[30, 50, 100], [30, 50, 100]],
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 30,
    initComplete: function(settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary")
    }
  });

  billingView.on('draw.dt', function(){
    setTimeout(function(){
      if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
      }
    }, 50);
  });

  
  // Print Data Table
  var printView = $(".printing-table").DataTable({
    responsive: false,
    dom: '<"top"<><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: ""
    },
    aLengthMenu: [[30, 50, 100], [30, 50, 100]],
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 30,
    initComplete: function(settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary")
    }
  });

  printView.on('draw.dt', function(){
    setTimeout(function(){
      if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
      }
    }, 50);
  });
  
  
  
  // Inventory Data Table
  var inventoryView = $(".inventory-table").DataTable({
    responsive: false,
    dom: '<"top"<"actions action-btns"B><"action-filters"lf>><"clear">rt<"bottom"<"actions">p>',
    oLanguage: {
      sLengthMenu: "_MENU_",
      sSearch: ""
    },
    aLengthMenu: [[30, 50, 100], [30, 50, 100]],
    order: [[1, "asc"]],
    bInfo: false,
    pageLength: 30,
    buttons: [
      {
        text: "<i class='feather icon-plus'></i> Add New",
        action: function() {
          $(this).removeClass("btn-secondary")
          $(".add-new-data").addClass("show")
          $(".overlay-bg").addClass("show")
          $("#data-name, #data-price").val("")
          $("#data-category, #data-status").prop("selectedIndex", 0)
        },
        className: "btn btn-info rounded"
      }
    ],
    initComplete: function(settings, json) {
      $(".dt-buttons .btn").removeClass("btn-secondary")
    }
  });

  inventoryView.on('draw.dt', function(){
    setTimeout(function(){
      if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        $(".dt-checkboxes-cell input, .dt-checkboxes").addClass("mac-checkbox")
      }
    }, 50);
  });

  

  // Scrollbar
  if ($(".button1 .data-items").length > 0) {
    new PerfectScrollbar(".button1 .data-items", { wheelPropagation: false })
  }

  if ($(".button2 .data-items").length > 0) {
    new PerfectScrollbar(".button2 .data-items", { wheelPropagation: false })
  }


   // On Edit
   $('.action-edit').on("click",function(e){
    e.stopPropagation();
    $(".add-new-data").addClass("show");
    $(".overlay-bg").addClass("show");
  });

  // Close sidebar
  $(".hide-data-sidebar, .cancel-data-btn, .overlay-bg").on("click", function() {
    $(".add-new-data").removeClass("show")
    $(".overlay-bg").removeClass("show")
    $("#data-name, #data-price").val("")
    $("#data-category, #data-status").prop("selectedIndex", 0)
  });

  // On Delete
  $('.action-delete').on("click", function(e){
    e.stopPropagation();
    $(this).closest('td').parent('tr').fadeOut();
  });

  // Table Row Details
  $(document).on('click', '.table.package tbody tr .showdetails', function(){
    if($(this).hasClass('expend')){
      $(this).closest('tr').next('tr').remove();
      $(this).removeClass('expend');
    } else{
      $(this).addClass('expend');
      $(this).closest('tr').after(`<tr>
                                    <td colspan="8">
                                      <div class="table-details">
                                        <div class="card bg-transparent m-0">
                                          <div class="card-body">

                                            <h6 class="card-title mb-2">Amina Ghazi</h6>

                                            <div class="d-flex justify-content-between align-items-center mb-2 underline">
                                              <div class="mb-1 w-75">
                                                <b>0679751594</b>
                                                <p class="mb-1">Casablanca</p>
                                                <p class="note">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat porro perferendis iste. Dolorem officia exercitationem, recusandae repudiandae delectus possimus esse corrupti, est laudantium incidunt id dolores corporis reiciendis nihil.</p>
                                              </div>
                                              
                                              <div class="box">
                                                <i class="feather icon-package"></i>
                                                <small>5D193AA751020</small>
                                              </div>
                                            </div>
                                            
                                            <p>
                                              MAD <span>230</span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="d-none"></td>
                                    <td class="d-none"></td>
                                    <td class="d-none"></td>
                                    <td class="d-none"></td>
                                    <td class="d-none"></td>
                                    <td class="d-none"></td>
                                </tr>`);
    }
    
  });

  // $(document).on('click', '.table.package tbody tr .expend', function(){
  //   $(this).closest('tr').next('tr').remove();
  // });

});


