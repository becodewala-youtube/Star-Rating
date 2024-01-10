// Add event listener to the radio buttons
var rating = document.getElementsByName('rating');
for (var i = 0; i < rating.length; i++) {
  rating[i].addEventListener('change', function() {
    var stars = document.getElementsByName('rating');
    for (var j = 0; j < stars.length; j++) {
      if (stars[j].checked) {
        for (var k = 0; k <= j; k++) {
          stars[k].nextElementSibling.style.color = '#ffcc00';
        }
        for (var l = j + 1; l < stars.length; l++) {
          stars[l].nextElementSibling.style.color = '#ccc';
        }
        break;
      }
    }
  });
}
