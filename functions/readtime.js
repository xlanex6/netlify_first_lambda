import readingTime from 'reading-time';

exports.handler = (event, context, callback) => {
  const { text } = JSON.parse(event.body);
  const stat = readingTime(text);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        clean_round_min: `${Math.round(stat.minutes)} min.`,
        full_stats: stat
      }
    })
  });
};
