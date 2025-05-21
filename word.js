          let wordFind = prompt("Enter the Paragraph").toLowerCase();
          
                    let word = prompt("Enter word").toLowerCase();
          let count = 0;
          
           let flag =false;
          
                    
          for (let i=0; i< wordFind.length;i++){
                                                  
                              
                              if(wordFind.slice(i,i+word.length ) === word)
                                        { ++count;
                                        flag=true;
                                        }   
                                        
                                                  }                    
                              if(flag===true){
                                        console.log(`${word} ${count} times`);
                              
                              }


                              

                    
          