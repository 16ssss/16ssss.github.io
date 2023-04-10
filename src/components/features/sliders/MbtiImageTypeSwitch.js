import {styled} from "@mui/material/styles";
import {FormControlLabel, Switch} from "@mui/material";
import {useDispatch} from "react-redux";
import {RESET_IMAGE_TYPE, TOGGLE_IMAGE_TYPE} from "../../../services/reduces/settingReducer";
import {useEffect} from "react";

const MaterialUISwitch = styled(Switch)(({theme}) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M11.75 6.406c-1.48 0-1.628.157-2.394.157C8.718 6.563 6.802 5 5.845 5c-.958 0-2.075.563-2.075 2.188v1.875c.002.492.18 2 .88 1.597c-.827.978-.91 2.119-.899 3.223c-.223.064-.45.137-.671.212c-.684.234-1.41.532-1.737.744a.75.75 0 0 0 .814 1.26c.156-.101.721-.35 1.408-.585l.228-.075c.046.433.161.83.332 1.19l-.024.013c-.41.216-.79.465-1.032.623l-.113.074a.75.75 0 1 0 .814 1.26l.131-.086c.245-.16.559-.365.901-.545c.08-.043.157-.081.231-.116C6.763 19.475 9.87 20 11.75 20s4.987-.525 6.717-2.148c.074.035.15.073.231.116c.342.18.656.385.901.545l.131.086a.75.75 0 0 0 .814-1.26l-.113-.074a13.008 13.008 0 0 0-1.032-.623l-.024-.013c.171-.36.286-.757.332-1.19l.228.075c.687.235 1.252.484 1.409.585a.75.75 0 0 0 .813-1.26c-.327-.212-1.053-.51-1.736-.744a16.343 16.343 0 0 0-.672-.213c.012-1.104-.072-2.244-.9-3.222c.7.403.88-1.105.881-1.598V7.188C19.73 5.563 18.613 5 17.655 5c-.957 0-2.873 1.563-3.51 1.563c-.767 0-.915-.157-2.395-.157Zm-.675 9.194c.202-.069.441-.1.675-.1c.234 0 .473.031.676.1c.1.034.22.088.328.174a.619.619 0 0 1 .246.476c0 .23-.139.39-.246.476c-.107.086-.229.14-.328.174a2.15 2.15 0 0 1-.676.1a2.14 2.14 0 0 1-.675-.1a1.078 1.078 0 0 1-.329-.174a.619.619 0 0 1-.246-.476c0-.23.139-.39.246-.476c.107-.086.23-.14.329-.174Zm2.845-3.1c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813c0 .285-.068.573-.21.811c-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.596 1.596 0 0 1-.21-.813c0-.285.068-.573.21-.811Zm-5.96 0c.137-.228.406-.5.81-.5s.674.272.81.5c.142.239.21.527.21.813c0 .285-.068.573-.21.811c-.136.229-.406.501-.81.501s-.673-.272-.81-.5a1.596 1.596 0 0 1-.21-.813c0-.285.068-.573.21-.811Z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M18 4c-1.71 0-2.75.33-3.35.61C13.88 4.23 13 4 12 4s-1.88.23-2.65.61C8.75 4.33 7.71 4 6 4c-3 0-5 8-5 10c0 .83 1.32 1.59 3.14 1.9c.64 2.24 3.66 3.95 7.36 4.1v-4.28c-.59-.37-1.5-1.04-1.5-1.72c0-1 2-1 2-1s2 0 2 1c0 .68-.91 1.35-1.5 1.72V20c3.7-.15 6.72-1.86 7.36-4.1C21.68 15.59 23 14.83 23 14c0-2-2-10-5-10M4.15 13.87c-.5-.12-.89-.26-1.15-.37c.25-2.77 2.2-7.1 3.05-7.5c.54 0 .95.06 1.32.11c-2.1 2.31-2.93 5.93-3.22 7.76M9 12a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m6 0a1 1 0 0 1-1-1c0-.54.45-1 1-1a1 1 0 0 1 1 1c0 .56-.45 1-1 1m4.85 1.87c-.29-1.83-1.12-5.45-3.22-7.76c.37-.05.78-.11 1.32-.11c.85.4 2.8 4.73 3.05 7.5c-.25.11-.64.25-1.15.37Z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export default () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({type:RESET_IMAGE_TYPE});
    },[])
    return (
        <FormControlLabel
            control={<MaterialUISwitch sx={{m: 1}}/>}
            label="동물 바꾸기"
            onClick={(e) => dispatch({type:TOGGLE_IMAGE_TYPE})}
        />
    );
}