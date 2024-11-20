import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
      await customFetch.delete(`/bookings/${params.id}`, data);
      toast.success("Deleted booking successfully!");
  } catch (error) {
      toast.error(error?.response?.data?.message);
  }
  return redirect('/dashboard/all-bookings');
};

const DeleteJob = () => {
  return (
    <div>DeleteJob</div>
  )
}
export default DeleteJob