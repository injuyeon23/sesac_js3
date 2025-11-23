  // function changeBGColor() {
  //   let currentcolor = document.body.style.backgroundColor;
  //   if(currentcolor === "red") {
  //     document.body.style.backgroundColor = "blue";
  //   }   
  //   if(currentcolor === "blue") {
  //   document.body.style.backgroundColor = "green";
  //   }     
  //   if(currentcolor === "green") {
  //   document.body.style.backgroundColor = "red";
  //   }      
  // }

  function changeColor_cycle {
    const colors = ["red", "blue", "green"];
    console.log("색상목록:", colors);

    console.log(colors[0]);
    console.log(colors[1]);
    console.log(colors[2]);

    if (document.body.style.backgroundColor == colors) {
      document.body.style.backgroundColor = color[1];
    } else if (document.body.style.backgroundColor == color[1]) {
            document.body.style.backgroundColor = color[2];
    } else if (document.body.style.backgroundColor == color[2]) {
            document.body.style.backgroundColor = color[0];
    } else {
      document.body.style.backgroundColor = color[0];
    }
  }

    function changeColor_cycle {
    const colors = ["red", "blue", "green"];
    console.log("색상목록:", colors);

    console.log(colors[0]);
    console.log(colors[1]);
    console.log(colors[2]);

    if (document.body.style.backgroundColor == colors) {
      document.body.style.backgroundColor = color[1];
    } else if (document.body.style.backgroundColor == color[1]) {
            document.body.style.backgroundColor = color[2];
    } else if (document.body.style.backgroundColor == color[2]) {
            document.body.style.backgroundColor = color[0];
    } else {
      document.body.style.backgroundColor = color[0];
    }
  }

function changeBGColor. 