# qf.js
QFramework ActionKit for JavaScript


``` javascript
    const repeat = qf.repeat()
      .delay(30,()=>{
        console.log("log per 30s");
      })
      .start();

    // stop
    repeat.stop();

    // destroy
    repeat.dispose();
    
    
    qf.sequence()
      .delay(5,()=>{
        console.log("leg after 5s")
      })
      .promise(()=>new Promise(()=>null).then().catch())
      .start();
    
    
    qf.delay(10,()=>{
      console.log("simple delay after 10s")
    });
```
