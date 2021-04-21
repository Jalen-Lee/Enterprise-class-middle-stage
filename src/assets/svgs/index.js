const context = require.context('./', false, /\.svg$/)
const svgMap = {}
context.keys().forEach((i) => {
  svgMap[i.split('/')[1]] = context(i)
});
// console.log(svgMap);
export default svgMap;
