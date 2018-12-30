var ans = [];
sampleJson.forEach(function myfunc(obj) {
    var currency = obj.balance;
    var number = Number(currency.replace(/[$ ,]/g, ""));
    if (number > 2000) {
        var ob = {};
        ob.name = obj["name"];
        ob.age = obj["age"];
        ob.balance = obj["balance"];
        ans.push(ob);
    }
    document.getElementById("demo").innerHTML+=JSON.stringify(ans);
}
);



