var triangle = {

  check: function() {
    if (this.side1 >= this.side2 + this.side3 ||
        this.side2 >= this.side3 + this.side1 ||
        this.side3 >= this.side1 + this.side2) {
      return false;
    } else {
      return true;
    }
  },

  type: function() {
    if (this.side1 === this.side2 && this.side1 === this.side3) {
      return "equilateral";
    } else if (this.side1 === this.side2 || this.side1 === this.side3) {
      return "isoceles";
    } else {
      return "scalene";
    }
  }
};


$(document).ready(function () {
  var triangleInput = [];

  $("form#new-triangle").submit(function(event) {
    event.preventDefault();


      triangle.side1 = $("input#side1").val();
      triangle.side2 = $("input#side2").val();
      triangle.side3 = $("input#side3").val();

      if (triangle.check() === false) {
        alert("Not a triangle!");
      } else if (triangle.check() === true) {
        triangle.type(side1, side2, side3);

        triangleInput.push(triangle.side1);
        triangleInput.push(triangle.side2);
        triangleInput.push(triangle.side3);

      }

      if (triangle.type === "equilateral") {
        $("ul#equilateral").append("<li>" + triangleInput + "</li>");
      }

      $("input#side1").val("");
      $("input#side2").val("");
      $("input#side3").val("");

  });
});
