const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

document.addEventListener("keyup", event => {
	// TODO: get Enter code
	if(event.code ==="Enter"){
	// TODO: get value from input 
		const inPutValue = INPUT_HTML.value;
		// TODO: check condition if not null and console value
		if(inPutValue !=""){
			console.log(inPutValue);
			// TODO: clear  input 
			clearInput();
		}
	}
});

function clearInput() {
	// TODO: clear input
	INPUT_HTML.value = "";
}