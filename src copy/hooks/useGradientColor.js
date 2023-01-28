export default function useGradientColor(color01HEX, color02HEX, steps) {  
  // Variables
  const color01RGB = processHEX(color01HEX);
  const color02RGB = processHEX(color02HEX);
  const colors = [];
  const stepsInt = parseInt(steps, 10);
  const stepsPerc = 100 / (stepsInt+1);
  const colorClampRGB = [
    color02RGB[0] - color01RGB[0],
    color02RGB[1] - color01RGB[1],
    color02RGB[2] - color01RGB[2]
  ];
  for (let i = 0; i < stepsInt; i++) {
    const clampedR = (colorClampRGB[0] > 0) 
    ? pad((Math.round(colorClampRGB[0] / 100 * (stepsPerc * (i + 1)))).toString(16), 2) 
    : pad((Math.round((color01RGB[0] + (colorClampRGB[0]) / 100 * (stepsPerc * (i + 1))))).toString(16), 2);
    
    const clampedG = (colorClampRGB[1] > 0) 
    ? pad((Math.round(colorClampRGB[1] / 100 * (stepsPerc * (i + 1)))).toString(16), 2) 
    : pad((Math.round((color01RGB[1] + (colorClampRGB[1]) / 100 * (stepsPerc * (i + 1))))).toString(16), 2);
    
    const clampedB = (colorClampRGB[2] > 0) 
    ? pad((Math.round(colorClampRGB[2] / 100 * (stepsPerc * (i + 1)))).toString(16), 2) 
    : pad((Math.round((color01RGB[2] + (colorClampRGB[2]) / 100 * (stepsPerc * (i + 1))))).toString(16), 2);
    colors[i] = [
      '#',
      clampedR,
      clampedG,
      clampedB
    ].join('');
  }
  
  // Function
  function processHEX(val) {
    var hex = (val.length >6)?val.substr(1, val.length - 1):val;
    if (hex.length > 3) {
      var r = hex.substr(0, 2);
      var g = hex.substr(2, 2);
      var b = hex.substr(4, 2);
    } else {
      var r = hex.substr(0, 1) + hex.substr(0, 1);
      var g = hex.substr(1, 1) + hex.substr(1, 1);
      var b = hex.substr(2, 1) + hex.substr(2, 1);

    }
    return [
      parseInt(r, 16),
      parseInt(g, 16),
      parseInt(b, 16)
    ]
  }
  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  return colors
}