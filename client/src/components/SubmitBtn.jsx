import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ formBtn }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <button
            type="submit"
            className={`btn btn-primary-custom ${formBtn && "form-btn"}`}
            disabled={isSubmitting}
        >
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
    );
};
export default SubmitBtn;
