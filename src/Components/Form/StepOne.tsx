import { useFormContext } from "@/src/Context/FormContext.";
import { useContext } from "react";

export default function StepOne() {
  const { formData, setFormData } = useFormContext();
  return (
    <>
      <label htmlFor="fname">Name</label>
      <input
        className="w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2"
        type="text"
        id="fname"
        name="fname"
      ></input>
      <label htmlFor="femail">Email Address</label>
      <input
        className=" w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2"
        type="email"
        id="femail"
        name="fmail"
      ></input>
      <label htmlFor="fnumber">Phone Number</label>
      <input
        className="w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2"
        type="text"
        id="fnumber"
        name="fnumber"
      ></input>
    </>
  );
}
