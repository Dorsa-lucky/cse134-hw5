class count_btn extends HTMLElement {
    constructor(){
        super();

        //make a button
        let btn = document.createElement("button");
        btn.innerHTML = "Times Clicked: ";

        //make a output i can save number
        let count = document.createElement("output");
        count.innerHTML = 0;
        //add number in the button
        btn.append(count);

        // add the slot in
        let slot = document.createElement('slot');
        btn.append(slot);

        //bind event
        btn.addEventListener("click",()=>{
            let curr_num = Number(count.textContent);
            count.textContent = curr_num + 1;
        });
        //attach and open th shadow tree
        this.attachShadow({mode:"open"});
        //add button in the shadow tree
        this.shadowRoot.append(btn);
    }
}

// define a custom element i can use in html
customElements.define("button-count",count_btn);