import countapi from 'countapi-js';

// Visitors counter

countapi.visits().then(result => {
  console.log(result.value);
});
