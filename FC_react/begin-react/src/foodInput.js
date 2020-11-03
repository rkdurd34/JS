import React, { useState, useCallback, useRef } from 'react';

function FoodInput() {
  const [inputs, setInputs] = useState({ food: '', face: '' });
  const { food, face } = inputs;
  const [foods, setFood] = useState([
    {
      id: 1,
      food: 'kimchi',
    },
    {
      id: 2,
      food: 'gogi',
    },
  ]);
  console.log(foods);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const nextId = useRef(3);
  const onCreate = () => {
    const temp = {
      id: nextId.current,
      food,
    };
    setFood(foods.concat(temp));
    setInputs({
      food: '',
    });
    nextId.current += 1;
  };
  return (
    <>
      <div>
        <input
          name="food"
          value={food}
          placeholder="음식"
          onChange={onChange}
        />
        {/* <input name = "face"
            value = {face}
            onChange = {onChange}
            placeholder='얼굴'  
            /> */}

        <button onClick={onCreate}>등록</button>
      </div>
      <div>
        {foods.map(index => (
          <div>{index.food}</div>
          
        ))}
      </div>
    </>
  );
}
export default React.memo(FoodInput);
