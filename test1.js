const express = require('express')
const app = express()
var cors = require('cors') 
const port = 3000

app.use(cors()) //html의 모든 응답에 답 한다.

app.get('/', (req, res) => {
    // // const p =req.params
    // // console.log(p.id)
    //const q =req.query
    // console.log(q.name)
 
    res.send('hellow world')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
     console.log(name)
    // if(name=="dog"){
    //     res.json({'sound':'멍멍'})
    // }else if(name=="cat"){
    //     res.json({'sound':'야옹'})
    // }else if(name=="pig"){
    //     res.json({'sound':'꿀꿀'})
    // }else{
    //     res.json({'sound':'알수없음'})
    // }

    switch (name) {
        case 'dog':
            res.json({'sound':'멍멍'});
          break;
        case 'cat':
            res.json({'sound':'야옹'});
          break;
        case 'pig':
            res.json({'sound':'꿀꿀'});
          break;
        case 'null':
        res.json({'sound':'???'});
        break;
        default:
            res.json('Sorry, we are out of ' + name + '.');
      } 
  })

  app.get('/cat', (req, res) => {
    res.send('고양이')
  })
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})