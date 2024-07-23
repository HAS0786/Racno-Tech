import React, { useState } from 'react'

const Option = () => {
   const[optionvalue,setoptionvalue]= useState("")
   const[Suboptionvalue,setSuboptionvalue]= useState("")

   const selections = {
    Website: ['Development', 'Design', 'SEO'],
    Graphic: ['Logo Design', 'Banner Design', 'Flyer Design'],
    Marketing: ['Social Media', 'Email Marketing', 'Content Marketing']
  };
   const handleEvent=(e)=>{
    const selection=e.target.value;
    setoptionvalue(selection)
    setSuboptionvalue(selections[selection]||[])
   }
  return (
    <div>
        <form >
         
            <select onChange={handleEvent} name="" id="">
                <option value="">select</option>
                {Object.keys(selections).map((selection)=>(
                <option key={selection} value={selection}>{selection}</option>))}
               
            </select>

            {
                optionvalue && (
                    <>
                <label htmlFor="">Select Sub</label>
                <select name="" id="">
                        {Suboptionvalue.map((option,index)=>(
                            <option value="" key={index}>{option}</option>
                        ))}
                </select>
                    </>
                    )
            }
        </form>
    </div>
  )
}

export default Option