class HelloWorld extends HTMLElement {
  connectedCallback() {
    //const shadow = this.attachShadow({ mode: 'closed' });
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
    <style>
    .test {
        background-color: green;
    }
    :host {
      background: green;
      padding: 2px 5px; 
    }
    </style>
    <div>before</div>
    <div id="hello1" part="label" class="test">Hello1</div>`;
  }
}
customElements.define("hello-world", HelloWorld);
