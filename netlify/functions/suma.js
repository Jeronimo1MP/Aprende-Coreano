exports.handler = async (event) => {
  const params = new URLSearchParams(event.queryStringParameters);
  const num1 = parseFloat(params.get("a"));
  const num2 = parseFloat(params.get("b"));

  if (isNaN(num1) || isNaN(num2)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Valores inválidos." }) };
  }

  return { statusCode: 200, body: JSON.stringify({ resultado: num1 + num2 }) };
};
