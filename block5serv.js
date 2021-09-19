export function block5serv() {
    let block5 = document.querySelector(".block5serv")
    let link = "https://reqres.in/api/users?page=2";
    let a = new XMLHttpRequest();
    a.open("GET", link);
    a.onload = function () {
        if (a.readyState === 4 && a.status === 200) {
            let json = JSON.parse(a.response)
            let jsdata = json.data
            console.log(jsdata);
            for (let item of jsdata) {

                let x = document.createElement("div")
                x.classList.add("imgserv")
                x.innerHTML = ` <img src=${item.avatar} /> <h2>${item.first_name}</h2> <h3>${item.last_name}</h3> <span>${item.email}</span>   <p>${item.id}</p>`;
                block5.append(x);
                let add = document.querySelector(".add")
                add.addEventListener("click", () => {
                    block5.style.display = "flex";
                })
            }
            let clear = document.querySelector(".clear")
                clear.addEventListener("click", () => {
                    block5.style.display = "none";
                })

        } else {
            console.error(a.response);
        }
    };
    a.send();
}