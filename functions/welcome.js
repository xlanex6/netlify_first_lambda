exports.handler = (event, context, callback) => {
  const { name, age, nat } = JSON.parse(event.body);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: `hello ${name}, you're ${age} from ${nat}`
    })
  });
};
