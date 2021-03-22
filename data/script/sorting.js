filterSelection("all")
function filterSelection(c) {
    var x;
    x = document.getElementsByClassName("column");
    if (c === "all") c = "";
    for (let i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
    const btns = document.getElementsByClassName("sort-button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", mySwitch);
        function mySwitch() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        }
    }
}

function addClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
