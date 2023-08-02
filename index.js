const express = require('express')

const prisma = require('./prisma')
const app = express();

app.get('/' , async(req,res)=>{


  console.log("asjdad")
  try {
    const user = await prisma.user.create({
      data: {
              UserEmail : "MohitGarg@knaksd",
              UserPassword : "12u39182",
              UserName    : "aksdkmas",
              PhoneNumber  : 819283091,
              Token   : "3989ijaksdmakdaksmdasd"
      },
    })
    res.status(200).send(user);

  } catch (error) {
    console.log(error)
    res.status(400).send({"sucess" : false})
  }
    


})

app.get('/api' , async(req,res)=>{
  try {
    const result = await prisma.user.findUnique({
      where: {
        UserEmail : "MohitGarg@knaksd",
      },
    })
    res.status(200).send(result);

  } catch (error) {
    console.log(error)
    res.status(400).send({"sucess" : false})
  }
})
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})