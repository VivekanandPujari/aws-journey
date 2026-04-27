exports.handler = async (event) => {
  const answers = ["Yes", "No", "Maybe", "Definitely", "Ask again later"];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
    },
    body: JSON.stringify({
      answer: randomAnswer
    })
  };
};