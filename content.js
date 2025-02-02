document.addEventListener("DOMContentLoaded", function () {
  initVariationTracking();
});

function initVariationTracking() {
  // Update product and variation IDs
  function update_ids() {
    var pid = $("form.cart [type='hidden'][name='product_id']").val() || $("form.cart [name='add-to-cart']").val() || "N/A";
    var vid = $("form.cart [type='hidden'][name='variation_id']").val() || "N/A";
    var restAPI = $('link[rel="https://api.w.org/"]').first().attr("href") || "";

    var product_id = `ProductID: <copy>${pid}</copy>`;
    var variation = vid !== "N/A" ? `<br>Variation: <copy>${vid}</copy>` : "";
    var restAPI_res = restAPI ? `<br>REST API: <copy>${restAPI}</copy>` : "";

    $("#bsdev-pid").html($.trim(`${product_id}${variation}${restAPI_res}`) || "BlackSwanDev<br>No WC Product Found!");
  }

  // Event listeners for WooCommerce events
  $(document).on("found_variation reset_data woocommerce_update_variation_values", "form.cart", function () {
    update_ids();
  });

  $(document).on("change input", "form.cart", function () {
    update_ids();
  });

  // Initial call to update IDs
  update_ids();
}

(function () {
  update_ids();

  if (document.getElementById("bsdev-pid")) {
    $("#bsdev-pid").remove();
    $(document).off("change input found_variation reset_data woocommerce_update_variation_values");
    return;
  }

  var $success_color = "rgba(21, 139, 2, 0.8)";
  var $error_color = "rgba(139, 2, 2, 0.8)";
  var $info_color = "rgba(2, 133, 139, 0.8)";
  if (!$("bsdev-toast").length) { $(document.body).append($("<bsdev-toast>")); }

  // Inject the CSS file
  function injectStylesheet() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = chrome.runtime.getURL("styles.css");
    document.head.appendChild(link);
  }
  injectStylesheet();

  $("body").append(`<div id="bsdev-pid">BlackSwanDev<br>WooProductID</div>`);

  // Copy to clipboard function
  function copy_clipboard(productId) {
    navigator.clipboard.writeText(productId).then(() => {
      show_toast(`Copied "${productId}" to Clipboard 👻`, $success_color);
    }).catch(err => {
      show_toast("Failed to copy text", $error_color);
      console.error("Failed to copy text:", err);
    });
  }

  // Toast message function
  function show_toast(data = "Sample Toast!", bg = "", delay = 4500) {
    if (!$("bsdev-toast").length) {
      $(document.body).append($("<bsdev-toast>"));
    } else {
      $("bsdev-toast").removeClass("active");
    }

    setTimeout(function () {
      $("bsdev-toast")
        .css("--toast-bg", bg)
        .html(data)
        .stop()
        .addClass("active")
        .delay(delay)
        .queue(function () {
          $(this).removeClass("active").dequeue().off("click tap");
        })
        .on("click tap", function (e) {
          e.preventDefault();
          $(this).stop().removeClass("active");
        });
    }, 200);
  }

  // Update product and variation IDs
  function update_ids() {
    var pid = $("form.cart [type='hidden'][name='product_id']").val() || $("form.cart [name='add-to-cart']").val() || "N/A";
    var vid = $("form.cart [type='hidden'][name='variation_id']").val() || "N/A";
    var restAPI = $('link[rel="https://api.w.org/"]').first().attr("href") || "";

    var product_id = `ProductID: <copy>${pid}</copy>`;
    var variation = vid !== "N/A" ? `<br>Variation: <copy>${vid}</copy>` : "";
    var restAPI_res = restAPI ? `<br>REST API: <copy>${restAPI}</copy>` : "";

    $("#bsdev-pid").html($.trim(`${product_id}${variation}${restAPI_res}`) || "BlackSwanDev<br>No WC Product Found!");
  }

  // Attach copy event handler
  $(document).on("click tap", "#bsdev-pid copy", function (e) {
    e.preventDefault();
    copy_clipboard($(this).text());
  });

  // Event listeners for WooCommerce events
  $(document).on("found_variation reset_data woocommerce_update_variation_values", "form.cart", function () {
    update_ids();
  });

  $(document).on("change input", "form.cart", function () {
    update_ids();
  });

  // Initial update and refresh every second (as a fallback)
  update_ids();
  setTimeout(function () {
    update_ids();
  }, 1000);
})();