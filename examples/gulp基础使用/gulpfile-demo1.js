const { series, parallel } = require('gulp')

const task1 = done => {
  setTimeout(() => {
    console.log('task1');
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2');
    done()
  }, 1000)
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3');
    done()
  }, 1000)
}

// 顺序执行
exports.series = series(task1, task2, task3)
// 并行执行
exports.parallel = parallel(task1, task2, task3)