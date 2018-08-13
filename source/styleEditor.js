$(document).ready(function(){

  editStyle = (selector, property, value) => {
    $(selector).css(property, value);
  }

  $("input[type=submit]").on("click", () => {

    const selector = $(style_editor[name = "selector"]).val();
    const property = $(style_editor[name = "property"]).val();
    const value = $(style_editor[name = "value"]).val();

    editStyle(selector, property, value);
    event.preventDefault();
  });
});
