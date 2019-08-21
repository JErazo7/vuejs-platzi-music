const msToMm = {};

function convertMsToMm(ms) {
  const min = Math.floor(ms / 60000);
  const seg = ((ms % 60000) / 1000).toFixed(0);
  return `${min}:${seg}`;
}

msToMm.install = Vue => {
  Vue.filter("ms-to-mm", val => {
    return convertMsToMm(val);
  });
};

export default msToMm;
