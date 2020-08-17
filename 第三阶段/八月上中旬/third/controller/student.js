async function student(ctx.next){
  await ctx.render('student')
}

// async function addStudent(){

//   const data = ctx.request.body
//     //添加学生
//   await services.addStudent(data)
  
//   ctx.response.body = {}
// }

module.exports = {
  student
  // addStudent
}