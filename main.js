
window.now = window.dayjs().format('YYYY-MM-DD mm:ss')
let h2 = document.createElement("h2");
h2.text = window.now;
document.append(h2);
