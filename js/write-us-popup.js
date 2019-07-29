
            var writeUsButton = document.querySelector(".button-write-us");
            var modalWriteUs = document.querySelector(".modal-write-us");
            var modalCloseButton = modalWriteUs.querySelector(".modal-close");
            var modalUserName = modalWriteUs.querySelector(".write-us-form-user");


            writeUsButton.addEventListener("click", function (evt) {
                evt.preventDefault();
                modalWriteUs.classList.add("modal-write-us-show"); /* без точки, т.к. ожидается имя класса */
                modalUserName.focus(); /* фокус сразу в поле "Ваше имя" */
            });

            modalCloseButton.addEventListener("click", function (evt) {
                evt.preventDefault();
                modalWriteUs.classList.remove("modal-write-us-show");
            });

            window.addEventListener("keydown", function (evt) {
                if (evt.keyCode == 27) {
                    if (modalWriteUs.classList.contains("modal-write-us-show")) {
                        modalWriteUs.classList.remove("modal-write-us-show");
                    }
                }
            });
