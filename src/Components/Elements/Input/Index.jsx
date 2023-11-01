import Label from "./Label";
import Input from "./Input.Jsx";

const InputForm = (props) => {
    const { label, name , type, placeholder} = props;
    return (
        <div className="mb-2">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    )
};

export default InputForm;