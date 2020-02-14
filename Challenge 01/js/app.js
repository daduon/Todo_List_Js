const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector('input').value;
const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const TODY = new Date();
DATE_HTML.innerHTML = TODY.toLocaleString('en-US',options);;
// TODO: to displa the date in HTML

