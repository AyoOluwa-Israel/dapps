import PrimaryButton from "@/components/PrimaryButton";
import Logo from "@/assets/images/logo.png";
import PrimaryInput from "@/components/PrimaryInput";
import { TRegister } from "@/types";
import { useFormik } from "formik";
import * as Yup from "yup";
import RsvpModal from "./RsvpModal";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { bookUser } from "@/services/bookServices";

const validationSchema = Yup.object({
  first_name: Yup.string().required("This is a required field"),
  last_name: Yup.string().required("This is a required field"),
});

const initialValues: TRegister = {
  first_name: "",
  last_name: "",
};

const Rsvp = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: bookUser,
    onSuccess: () => {
      handleModal(1);
      resetForm();
    },
  });

  const handleModal = (id: number | null) => {
    setOpen(open === id ? null : id);
  };

  const onSubmit = async (data: TRegister) => {
    mutate(data);
  };

  const { handleChange, values, handleBlur, handleSubmit, errors, touched, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const getError = (key: keyof TRegister) => {
    return touched[key] && errors[key];
  };

  return (
    <div className="h-[100vh] w-[100vw] md:bg-heroDesktop2Bg bg-mobile2 bg-no-repeat bg-cover text-white flex md:flex-row flex-col justify-center items-center space-y-4">
      <div className="w-[75%] mx-auto">
        <div className="md:w-[40%] w-[100%]">
          <img src={Logo} alt="Logo" className="w-[200px] mx-auto" />

          <p className="md:text-xl text-base text-center mt-[3em]">
            Reserve a seat for the <span className="font-semibold ">9th of March. 5:00 PM. WAT.</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 my-[3em]">
            <PrimaryInput
              name="first_name"
              placeholder="Enter first name"
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("first_name")}
              type="text"
            />

            <PrimaryInput
              name="last_name"
              placeholder="Enter last name"
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("last_name")}
              type="text"
            />

            <div className="w-[100%] pt-[2em]">
              <PrimaryButton text="Confirm attendance" type="submit" isLoading={isPending} disabled={isPending} />
            </div>
          </form>
        </div>

        <div></div>
      </div>

      <RsvpModal handleModal={handleModal} /> 

      {open === 1 ? <RsvpModal handleModal={handleModal} /> : null}
    </div>
  );
};

export default Rsvp;
