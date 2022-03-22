import React from "react";
import { useForm } from "react-hook-form";

function Inputs(props) {
  let {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onchange}
        {...register(props.name, {
          required: `*${props.name} is required`,
          maxLength: { value: [props.inpval], message: [props.message] },
        })}
        className="form-control p-1"
      />
      
    </div>
  );
}

export default Inputs;
