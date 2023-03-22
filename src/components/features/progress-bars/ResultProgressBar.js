import {styled} from "@mui/material/styles";
import {colors, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default ({value, left, right, type}) => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{width: "100%", height: 36, backgroundColor: theme.palette.grey.A400, borderRadius: 2}}
                 display="flex"
                 justifyContent={type === "left" ? "start" : "end"}
                 position="relative"
            >
                <Box sx={{
                    width: `${value}%`,
                    height: "100%",
                    backgroundColor: type === "left" ? theme.palette.primary.main : theme.palette.secondary.main,
                    borderRadius: 2
                }}/>
                <Typography position="absolute" variant="h6" left={10} top="50%" color="white"
                            sx={{transform: "translate(0%, -50%)"}}>
                    {left}
                </Typography>
                <Typography position="absolute" variant="h6" right={10} top="50%" color="white"
                            sx={{transform: "translate(0%, -50%)"}}>
                    {right}
                </Typography>
            </Box>
        </>
    );


}