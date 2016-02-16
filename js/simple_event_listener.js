 var items = document.querySelectorAll(".item");

        for (var i = 0; i < items.length; i++) {
            var el = items[i];

            //capturing phase
            el.addEventListener("click", doSomething, true);

            //bubbling phase
            el.addEventListener("click", doSomething, false);
        }

        function doSomething(e) {
            /*console.log(e.currentTarget.id);*/
            alert(e.currentTarget.id);
        }