// The hand length of Shaq's is based on the information found here:
// http://www.insidehoops.com/forum/showthread.php?t=261350
var // Get the PPI of the display
    lifesized = require('../../src/lifesized'),
    // Image dimensions
    imageWidth = 3200,
    imageHeight = 2400,
    // Shaq's hand length in inches
    shaqsHandLength = 11,
    // Length in pixels from the zero mark to the 11inch marker in the image
    rulerImageLength = 1351;

// Scale image so that the ruler is displayed life sized and therefore shaq's hands
// will also be at scale also
var imageElement = document.getElementById('hands'),
    // Use lifesized's convenience function for figuring out how much you need to
    // to scale an image in order to make an object appear lifesized
    imageScale = lifesized.scale(shaqsHandLength, rulerImageLength);

imageElement.style.width = Math.floor(imageWidth*imageScale) + 'px';
imageElement.style.height = Math.floor(imageHeight*imageScale) + 'px';
