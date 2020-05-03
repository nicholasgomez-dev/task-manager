require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e9f8ba30cf93e1458a6f464').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e9f8b66a6bf853960f59603').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})