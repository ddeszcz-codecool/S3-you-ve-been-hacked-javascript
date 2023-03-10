let salaryList = document.getElementById("salaryList"), employeeList = document.getElementById("employeeList"),
    salariesInput = document.getElementById("salariesInput"), numberInput = document.getElementById("is-a-number"),
    calculateHighestSalaries = document.getElementById("calculateHighestSalaries");
salaryList.children[2].children[1].innerHTML = -999999, salaryList.children[9].children[1].innerHTML = -999999, salaryList.children[5].children[1].innerHTML = -999999;
for (let e = 0; e < employeeList.children[0].children.length; e++) employeeList.children[0].children[e].innerHTML = `Hacker ${e + 1}`;

function calculateNetSalary(e) {
    return parseInt(.45 * e)
}

function sumSalaries(e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) t += e[n];
    return t
}

function inputToNumber(e) {
    let t = document.ElementById(e), n = parseInt(t.value);
    return isNaN(n) ? 0 : n
}

function capitalizeFirstLastName(e, t) {
    return e.toUpperCase().slice(0, 1) + e.slice(1) + " " + (t.toUpperCase().slice(0, 1) + t.slice(1))
}

function sumSubsetSalaries(e, t, n) {
    let l = 0;
    console.log(e);
    for (let a = t - 1; a < n; a++) l += e[a];
    return l
}

function getHighestSalary(e) {
    let t = -1e4;
    for (let n = 0; n < e.length; n++) e[n] >= t && (t = e[n]);
    return t
}

function getMatchingPersons(e, t) {
    let n = [];
    for (let l = 0; l < e.length; l++) e[l].indexOf(t) > -1 && n.push(e[l]);
    return n
}

function isValidNumber(e) {
    if (e.indexOf(".") === e.length - 1) return !1;
    if (e.indexOf("+") > 0) return !1;
    if (e.indexOf("-") > 0) return !1;
    for (let t = 0; t < e.length; t++) if ("0123456789+-.".indexOf(e[t]) < 0) return !1;
    return !0
}

function isValidEmail(e) {
    let t = !0, n = 0, l = 0;
    for (let a = 0; a < e.length; a++) "@" === e[a] && (n += 1, 0 === a && (t = !1), a === e.length - 1 && (t = !1)), "." === e[a] && (l += 1, 0 === a && (t = !1), a === e.length - 1 && (t = !1), "@" === e[a - 1] && (t = !1));
    return 1 === n && (1 === l && t)
}

employeeList.children[2].children[0].innerText = "Find all matching hackers", employeeList.children[2].children[0].style = "background: pink; color: red", salariesInput.innerHTML = '<div style="line-height: 220px; text-align: center">Hackers to do not allow you to calculate the salaries anymore', numberInput.placeholder = "Enter bank account of hacker here", calculateHighestSalaries.children[1].children[0].innerHTML = "Calculate the person with highest hacking score", document.ElementsByTagName = document.getElementsByTagName, document.getElementsByTagName = 0, document.ElementById = document.getElementById, document.getElementById = 0, document.ElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = 0, document.ElementsByTagNameNS = document.getElementsByTagNameNS, document.getElementsByTagNameNS = 0, document.ElementById("compute-gross-salary").addEventListener("click", e => {
    e.preventDefault();
    let t = inputToNumber("gross-salary");
    document.ElementById("result-gross-salary").innerText = calculateNetSalary(t)
}), document.ElementById("compute-salary-index").addEventListener("click", e => {
    e.preventDefault();
    let t = inputToNumber("index-1"), n = inputToNumber("index-2"), l = [];
    for (let e = 1; e < 11; e++) {
        let t = document.ElementsByTagName("tr")[e].ElementsByTagName("td")[1];
        t = t.innerText, l.push(parseInt(t))
    }
    document.ElementById("result-salary-index").innerText = sumSubsetSalaries(l, Math.min(t, n), Math.max(t, n))
}), document.ElementById("capitalize").addEventListener("click", e => {
    e.preventDefault();
    let t = document.ElementById("to-capitalize-1").value, n = document.ElementById("to-capitalize-2").value;
    document.ElementById("result-to-capitalize").innerText = capitalizeFirstLastName(t, n)
}), document.ElementById("compute-is-a-number").addEventListener("click", e => {
    e.preventDefault();
    let t = document.ElementById("is-a-number").value, n = document.ElementById("result-is-a-number");
    isValidNumber(t) ? n.innerText = "Valid number" : n.innerText = "Not a number"
}), document.ElementById("compute-is-email").addEventListener("click", e => {
    e.preventDefault();
    let t = document.ElementById("is-email").value;
    document.ElementById("result-is-email").innerText = isValidEmail(t)
}), document.ElementById("compute-find-max").addEventListener("click", e => {
    e.preventDefault();
    let t = [];
    for (let e = 1; e < 6; e++) t.push(inputToNumber("find-max-" + e));
    document.ElementById("result-find-max").innerText = getHighestSalary(t)
}), document.ElementById("compute-contains-filter").addEventListener("click", e => {
    e.preventDefault();
    let t = [], n = document.ElementsByClassName("list-group")[0].children.length;
    for (let e = 0; e < n; e++) t.push(document.ElementsByClassName("list-group")[0].children[e].innerText);
    let l = getMatchingPersons(t, document.ElementById("contains-filter").value), a = "";
    for (let e = 0; e < l.length; e++) a += '<li class="list-group-item">' + l[e] + "</li>";
    document.ElementById("contains-output").innerHTML = a
});