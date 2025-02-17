import { useFormContext } from "@/src/Context/FormContext.";
import clsx from "clsx";
import classes from "./error.module.scss";

export default function StepOne() {
  const { formData, setFormData, errors } = useFormContext();

  return (
    <>
      <div>
        <div className="flex justify-between">
          <label htmlFor="fname">Name</label>
          {errors.name && <p className="text-strawberryRed">{errors.name}</p>}
        </div>
        <input
          className={`${clsx({
            [classes.error]: errors.name,
          })} w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2`}
          type="text"
          id="fname"
          name="fname"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Stephen King"
        ></input>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label htmlFor="femail">Email Address</label>
          {errors.email && <p className="text-strawberryRed">{errors.email}</p>}
        </div>
        <input
          className={`${clsx({
            [classes.error]: errors.email,
          })} w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2`}
          type="email"
          id="femail"
          name="fmail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="e.g. stephenking@lorem.com"
        ></input>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label htmlFor="fnumber">Phone Number</label>
          {errors.tel && <p className="text-strawberryRed">{errors.tel}</p>}
        </div>
        <input
          className={`${clsx({
            [classes.error]: errors.tel,
          })} w-full h-10 outline outline-1 rounded-lg p-2 outline-lightGray mt-2`}
          type="string"
          id="fnumber"
          name="fnumber"
          value={formData.tel}
          onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
          placeholder="e.g. +1 234 567 890"
        ></input>
      </div>
    </>
  );
}
