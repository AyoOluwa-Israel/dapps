import PrimaryButton from "@/components/PrimaryButton";
import Logo from "@/assets/images/logo.png";
import PrimaryInput from "@/components/PrimaryInput";
import { TRegister } from "@/types";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  first_name: Yup.string().required("This is a required field"),
  last_name: Yup.string().required("This is a required field"),
});

const Rsvp = () => {
  const initialValues: TRegister = {
    first_name: "",
    last_name: "",
  };

  const onSubmit = async (data: TRegister) => {
    console.log(data);
  };

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } = useFormik({
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
    <div className="h-[100vh] w-[100vw] bg-heroDesktop2Bg bg-no-repeat bg-cover text-white flex justify-center items-center space-y-4">
      <div className="w-[75%] mx-auto">
        <div className="w-[40%]">
          <img src={Logo} alt="Logo" className="w-[200px] mx-auto" />

          <p className="text-xl text-center mt-[3em]">
            Reserve a seat for the <span className="font-semibold ">9th of March. 0:05 PM. WAT.</span>
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
          </form>

          <div className="w-[100%]">
            <PrimaryButton text="Keep My Seat" type="button" />
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Rsvp;
