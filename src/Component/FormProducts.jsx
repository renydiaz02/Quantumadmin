import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'



const FormProducts = () =>{

    const [value, setValue] = React.useState(new Date('2022-06-15T11:38:00'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return(


            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

            <div>
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                />
            
                
                <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                />
                <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                />
                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />


                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />

                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />

                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />

                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    variant="filled"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </div>
        </Box>

    )
}

export default FormProducts