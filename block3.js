export function block3(){
class Section {
    constructor(texth3, imgbike, textp,classList) {
        this.texth3 = texth3
        this.imgbike = imgbike
        this.textp = textp
        this.classList = classList
    }
    section() {
        let block3 = document.querySelector(".block3")
        let item3 = document.createElement("div")
        item3.classList.add(this.classList)
        item3.innerHTML =`<h3>${this.texth3}</h3> <img src="${this.imgbike}" /> <p>${this.textp}</p>` 
        block3.append(item3)

    }
}
class Section2 extends Section{
    constructor(texth3, imgbike, textp,classlist){
    super(texth3, imgbike, textp,classlist);
}
}

class Section3 extends Section{
    constructor(texth3, imgbike, textp,classList){
    super(texth3, imgbike, textp,classList);
}

}

const section = new Section ("Battery","./img/b1.png","Powered by a removable lithium battery that lasts approximately 55 km at full capacity.Recharge back to80% in two hours.","block3sec")
const section2 = new Section2 ("Belt drive","./img/b2.png","High-reliability carbon belt drive to provide the cleanest, most frictionless experience around. No grease, no rust, no worries!","block3sec2")
const section3 = new Section3 ("Power assist","./img/b3.png","Two modes of motor support for smooth cycling up to 25 km/h or no support to keep you going on a low battery.","block3sec3")


section.section()
section2.section()
section3.section()


}

