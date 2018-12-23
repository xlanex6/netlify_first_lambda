exports.handler = function(event, context, callback) {
  const { name, age, nat } = JSON.parse(event.body);
  // const body = JSON.parse(event.body);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `hello ${name}, you're ${age} from ${nat}`
    })
  });
};
