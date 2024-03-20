import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const color1 = '#ffffff'
const color2 = '#ffffff'
// const color1 = '#2562be'
// const color2 = '#4578c4'

export default function InputControl({ onSubmit, onFocus }) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue)
        setInputValue('');
    };

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isMobileDevice =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return (
        <div className="input-container">
            <Grid container justifyContent={"flex-start"} spacing={1} alignItems="flex-end" marginLeft={0}>
                <Grid item>
                    <TextField
                        value={inputValue}
                        id="outlined-size-small"
                        label={
                            (inputValue != "" || isFocused) ?
                                null :
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: color1,
                                        marginLeft: '2px',
                                        userSelect: 'none'
                                    }}>
                                    {!isMobile ? 'Press any key or type something here.' : 'Please type something here.'}
                                </Typography>
                        }
                        InputLabelProps={{ shrink: false }}
                        variant="standard"
                        size="small"
                        onChange={handleChange}
                        onFocus={() => { setIsFocused(true); onFocus(true) }}
                        onBlur={() => { setIsFocused(false); onFocus(false) }}
                        sx={{
                            '& input': {
                                width: !isMobile ? '220px' : '160px',
                                color: color1,
                                fontSize: "12px",
                            },
                            '& .MuiInput-underline:before': {
                                borderBottomColor: color1,
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: color2,
                            },
                            '& .MuiInput-underline:hover:before': {
                                borderBottomColor: color1,
                            },
                            '& .MuiInput-underline:hover:after': {
                                borderBottomColor: color2,
                            },
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            'minWidth': '32px',
                            'color': color1,
                            'borderColor': color1, // Set the border color of the button
                            '&:hover': {
                                color: color2, // Set the text color of the button on hover
                                borderColor: color2, // Set the border color of the button on hover
                            },
                        }}
                        onClick={handleSubmit}
                    >
                        GO
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}