export function headerblock() {


    class Header {
        constructor(text1, text2, btn, class1) {
            this.text1 = text1
            this.text2 = text2
            this.btn = btn
            this.class1 = class1
        }
        create() {
            let block = document.querySelector(".header-block1")
            let item = document.createElement("div")
            item.classList.add("blockh")
            item.innerHTML = `<h2 class = "colshow">${this.text1}</h2> <p>${this.text2}</p> <button class = "headerbtn" >${this.btn}</button>`;
            block.append(item)
            let btn1 = document.querySelector(".headerbtn")
            btn1.addEventListener("click", function () {
                let h2text = document.querySelector(".colshow")
                h2text.classList.add("show")
                let show = document.querySelector(".show")
                console.log(show);
                show.style.display = "block"
                console.log();
            })

        }
    }

    const header = new Header("Subscribe to change", "Dance is currently invite-only. Sign up to the waitlist and become one of the first to join our movement for livable cities. We’ll carefully be opening up to more members as our global community takes shape.", "Request an invite", ".show")


    header.create()
}
