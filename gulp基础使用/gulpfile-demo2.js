const fs = require('fs')

// gulp 处理异步流程的操作

// 1. callback
exports.callback = done => {
  console.log('callback task');
  done()
}
exports.callback_error = (done) => {
  console.log('callback task');
  done(new Error('task failed!'))
}

// 2. promise
exports.promise = () => {
  console.log('promise task');
  return Promise.resolve()
}
exports.promise_error = () => {
  console.log('promise task');
  return Promise.reject(new Error('task failed!'))
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

// 3. async / await
exports.async = async () => {
  await time(1000)
  console.log('async task');
}

// 4. stream ( 文件流 )
exports.stream = () => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('package-copy.json')
  readStream.pipe(writeStream)
  return readStream
}