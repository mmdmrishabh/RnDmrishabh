self.onmessage = function(event) {
  console.log('Main thread said: ' + event.data);
  self.postMessage('Hello, main thread!');
};
