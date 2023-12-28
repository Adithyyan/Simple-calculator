function display(num){
    res.value+=num
    }
    function Result(){
       try{ res.value=eval(res.value)}
       catch{
        res.value="error"
        setTimeout(()=>{res.value=""},1000)
       }

    }
    function Clear(){
        res.value=""
    }
    function Back(){
        res.value=res.value.slice(0,-1)
    }