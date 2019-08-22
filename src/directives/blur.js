const blur = {};

function setBlur(el, binding) {
  if (!binding.value) {
    el.style.filter = "blur(3px)";
    el.style.cursor = "not-allowed";
    // el.querySelectorAll("a").foreach(a => {
    //   a.setAttribute("disabled", true);
    // });
    el.querySelectorAll("button").forEach(a => {
      a.setAttribute("disabled", true);
    });
  } else {
    el.style.filter = "none";
    el.style.cursor = "inheret";
  }
}

blur.install = function(Vue) {
  Vue.directive("blur", {
    bind(el, binding) {
      setBlur(el, binding);
    }
  });
};

export default blur;
