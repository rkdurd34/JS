import { useState, useCallback } from 'react'
function useInputs(initialForm){
const [form,setForm] = useState(initialForm)
const onChange = useCallback(e=>{
    const{name,value} = e.tartget;
    setForm(form=>({...form,[name]:value}), [])
    const reset = useCallbackI(()=> setForm(initialForm),[initialForm])
    return [form, onChange,reset]
})
}
export default useInputs;
