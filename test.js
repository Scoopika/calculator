(async () => {

  const res = await fetch("http://127.0.0.1:8080/calculate", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      expression: "1 + 1"
    })
  });

  const data = await res.json();
  console.log(data);
})();
