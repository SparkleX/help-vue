import { attachBoot } from "@ui5/webcomponents-base/dist/Boot.js";

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/Assets.js";
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

attachBoot(() => {
	console.log("Framework booted");
});
setTheme("sap_fiori_3");
/*
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
	<ui5-input value="123"></ui5-input>
	<ui5-input value="123"></ui5-input>
	<ui5-button>Hello UI5 Web Components</ui5-button>
  </div>
`

//setupCounter(document.querySelector('#counter'))
*/

export function on_click(event) {
	alert('on_click')
}
//btn.addEventListener("click", on_click);