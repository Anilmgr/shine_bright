import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ formBtn, labelText="Submit" }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <button
            type="submit"
            className={`btn btn-primary-custom ${formBtn && "form-btn"}`}
            disabled={isSubmitting}
        >
            {isSubmitting ? "Submitting..." : labelText}
        </button>
    );
};
export default SubmitBtn;
