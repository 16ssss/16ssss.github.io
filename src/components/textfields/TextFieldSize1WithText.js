import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";


export default ({title, name, onChange, value, placeholder, helperText}) => {
    return (
        <>
            <Typography variant="h6"
                        align={"center"}
            >
                {title}
            </Typography>
            <TextField fullWidth
                       label=""
                       name={name}
                       placeholder={placeholder}
                       onChange={onChange}
                       value={value}
                       helperText={helperText}
            ></TextField>
        </>
    );
};