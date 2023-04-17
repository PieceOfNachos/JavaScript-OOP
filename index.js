class List{
    constructor(text = []){
        this.text = text;
    }
    item = this.text;
    showAll(){
        return this.text;
    }
    render(){
        let elem = document.createElement("ul");
        for(let i = 0, ln = this.text.length; i < ln; i++){
            let a = document.createElement("li");
            a.innerHTML = this.text[i];
            elem.appendChild(a);
        }
        return elem;
    }
}
const article = new List(["Преимущество 1", "Преимущество 2", "Преимущество 3"]);
console.log(article.showAll());
console.log(article.render());
document.body.append(article.render());