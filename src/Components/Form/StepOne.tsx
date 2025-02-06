import { useFormContext } from "@/src/Context/FormContext.";
import { ChangeEvent, useContext } from "react";

export default function StepOne() {
  const { formData, setFormData } = useFormContext();

  return (
    <>
      <div>
        <label htmlFor="fname">Name</label>
        <input
          className="w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2"
          type="text"
          id="fname"
          name="fname"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        ></input>
      </div>
      <div className="mt-4">
        <label htmlFor="femail">Email Address</label>
        <input
          className=" w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2"
          type="email"
          id="femail"
          name="fmail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></input>
      </div>
      <div className="mt-4">
        <label htmlFor="fnumber">Phone Number</label>
        <input
          className="w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2"
          type="string"
          id="fnumber"
          name="fnumber"
          value={formData.tel}
          onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
        ></input>
      </div>
    </>
  );
}
