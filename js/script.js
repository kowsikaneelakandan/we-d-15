const Timer = () =>{
    console.log(10)
    setTimeout(() =>{
        console.log(9);
        setTimeout(() =>{
            console.log(8);
            setTimeout(() =>{
                console.log(7);
                setTimeout(() => {
                    console.log(6);
                    setTimeout(() =>{ 
                        console.log(5);
                        setTimeout(()=>{ 
                            console.log(4);
                            setTimeout(()=>{
                                console.log(3);
                                setTimeout(()=>{
                                    console.log(2);
                                    setTimeout(()=>{
                                        console.log(1);
                                        setTimeout(()=>{
                                            console.log("Happy Independence Day");
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)

            },1000)
        },1000)


    },1000)
}
Timer()  