const Board = ({array}) => {
    return(
        <div className="grow flex justify-center items-center mt-[10px]">
        <div className="grid grid-rows-5 relative gap-[5px] p-[10px] box-border max-w-[380px] max-h-[420px]">
          {array.map((filas, index) => (
            <div key={`grid${index}`} className={`grid grid-cols-5 gap-[5px] mt-[2px] w-full `}>
              {filas.map((cols, index2) => (
                (typeof cols === "string")
                ?   
                // ${cols ? "flip" : "flipper"}
                  <div key={`grid${index}-col${index2}`} className={`"flipper" inline-flex max-w-[60px] max-h-[60px] text-3xl uppercase font-bold select-none text-white bg-correct `}>
                    
                      <div className="front-card max-w-[60px] max-h-[60px] text-3xl uppercase font-bold select-none text-white bg-correct ">
                        <div className="border-stone-600 border rounded-sm w-[60px] h-[60px] inline-flex justify-center items-center">
                        {cols}
                        </div>
                      </div>
                    
                    
                      <div className="back-card max-w-[60px] max-h-[60px] text-3xl uppercase font-bold select-none text-white bg-correct ">
                        <div className="border-stone-600 border rounded-sm w-[60px] h-[60px] inline-flex justify-center items-center">
                        {/* {cols} */}
                        </div>
                      </div>
                    
                </div>
                :
                <div key={`grid${index}-col${index2}`} className={`flip inline-flex max-w-[60px] max-h-[60px] text-3xl uppercase font-bold select-none text-white bg-correct `}>
                    
                  <div className="front-card max-w-[60px] max-h-[60px] text-3xl uppercase font-bold select-none text-white bg-correct ">
                    <div className="border-stone-600 border rounded-sm w-[60px] h-[60px] inline-flex justify-center items-center">
                      
                    </div>
                  </div>
                
                
                  <div className={`back-card max-w-[60px] max-h-[60px] text-3xl uppercase font-bold select-none text-white ${cols.status}`}>
                    <div className="border-stone-600 border rounded-sm w-[60px] h-[60px] inline-flex justify-center items-center">
                    {cols.letter}
                    </div>
                  </div>
              
                </div>
              ))}
              
            </div>
            ))
          }
        </div>
      </div>
    )
}

export default Board;