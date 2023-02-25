import {SvgIcon} from "@mui/material";

export default (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
                  fill="none"
                  stroke={props.color}
                  strokeMiterlimit={10}
                  strokeWidth={32}/>
                  {/*style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"/>*/}
        </SvgIcon>
    );
}