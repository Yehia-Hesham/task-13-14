// alert("test");
// var tabs = document.querySelectorAll
$(".tabs .navbar-nav .nav-item .nav-link").click(function(){
    var selector = $(this).attr('data-location');
    $(".content").removeClass("is-active");
    // $("nav-item").removeClass("is-active");
    $("div [data-location="+selector+"]").addClass("is-active");
});








// var contents = document.querySelectorAll(".content");
var contents = document.getElementsByClassName("content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        var tabs = document.querySelectorAll(".tabs .navbar-nav .nav-item .nav-link");
        // var contents = document.querySelectorAll(".content");
        var contents = document.getElementsByClassName("content");

        console.log(index);
        // for(let i = 0; i<=contents.length; i++){
        //     // contents[i].classList.remove("is-active");

        //     console.log(contents[i]);
        // };
        [].forEach.call(contents, function (content) {
            content.classList.remove('is-active');
        });
        // el.classList.add(cN);
        // tabs.forEach((tab) => {
        //     tab.classList.remove("is-active");
        // });
        [].forEach.call(tabs, function (tab) {
            tab.classList.remove('is-active');
        });
        // el.classList.add(cN);

        // contents[index].classlist.add("is-active");
        [].forEach.call(contents, function (content) {
            content.classlist.add("is-active");
            console.log("test");
            //  contents[index].classlist.add("is-active");
        });
        console.log(contents[index]);
        // tabs[index].classList.add("is-active");
    });
});

// function showpanel(panelIndex, colorcode) {
//     tabs.forEach(function (node) {
//         node.style.backgroundcolor = "";
//         node.style.color = "";
//     })
// };

// tabs[panelIndex].style.backgroundcolor = colorcode;
// tabs[panelIndex].style.color = 'White';

// tabpanels.forEach(function (node) {
//     node.style.display = 'none';
// });

// tabpanels[panelIndex].style.display = 'block';
// tabpanels[panelIndex].style.backgroundcolor = colorcode

// function globalEventListener(type, element, callback) {
//     document.documentElement.addEventListener(type, function (e) {
//         if (e.target.matches(element)) {
//             callback(e);
//         };
//     });
// }

// globalEventListener('click', '.nav-item', function (element) {
//     var  content = document.getElementsByClassName('content');
//     content.classlist.add('d-none');
//     var selected =  this.getattribute('id');
//     alert(selected);/*selected item fromt event.target*/
//     /*dsiplay selected item*/
// });