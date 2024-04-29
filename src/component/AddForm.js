import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { addPerson } from '../tasksSlice';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


const AddForm = () => {
    const [inputs, setInputs] = useState({
        // fullName: '',
        fullName: {
            value: '',
            error: false,
            errorMessage: 'This field accept only string'
        },
        address: {
            value: '',
            error: false,
            errorMessage: 'Accept only string, number, hyphen (-) and comma (,)'
        },
        pinCode: {
            value: '',
            error: false,
            errorMessage: 'Accept only string and number'
        },
        phone: {
            value: '',
            error: false,
            errorMessage: 'Accept only number'
        },
        highestEducation: {
            value: '',
            error: false,
            errorMessage: 'Accept only string'
        },
        passingYear: {
            value: '',
            error: false,
            errorMessage: 'This field is // required'
        },
    });
  

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        let isErrorPresent = false;
        e.preventDefault();

        const formFields = Object.keys(inputs);
        const strRegex = /^[a-zA-Z\s]+$/;
        let newFormValues = { ...inputs }
        // console.log('values', newFormValues);
        for (let index = 0; index < formFields.length; index++) {
            const currentField = formFields[index];
            const currentValue = newFormValues[currentField];

            console.log(currentField, currentValue);

            if(currentValue?.value === ""){
                newFormValues = {
                  ...newFormValues,
                  [currentField]:{
                    ...newFormValues[currentField],
                    error:true,
                    errorMessage: 'This field Required'
                  }
                }
              }
              else {
                switch (currentField) {
                    case "fullName":
                    case "highestEducation":
                        if (!currentValue?.match(/^[a-zA-Z\s]+$/)) {
                            newFormValues = {
                                ...newFormValues,
                                [currentField]: {
                                    ...newFormValues[currentField],
                                    error: true
                                }
                            }
                        }
                        break;
                    case "address":
                        if (!currentValue?.match(/^[a-zA-Z0-9,-\s]+$/)) {
                            newFormValues = {
                                ...newFormValues,
                                [currentField]: {
                                    ...newFormValues[currentField],
                                    error: true
                                }
                            }
                        }
                        break;
                    case "pinCode":
                        if (!currentValue?.match(/^[a-zA-Z0-9]+$/)) {
                            newFormValues = {
                                ...newFormValues,
                                [currentField]: {
                                    ...newFormValues[currentField],
                                    error: true
                                }
                            }
                        }
                        break;
                    case "phone":
                        if (!currentValue?.match(/^[0-9]+$/)) {
                            newFormValues = {
                                ...newFormValues,
                                [currentField]: {
                                    ...newFormValues[currentField],
                                    error: true
                                }
                            }
                        }
                        break;
                    default:
    
                        newFormValues = {
                            ...newFormValues,
                            [currentField]: {
                                ...newFormValues[currentField],
                                error: false
                            }
                        }
    
                }
              }

           

        }

        setInputs(newFormValues)

        if (isErrorPresent) {
            return;
        }


        dispatch(
            addPerson({
                task: inputs
            })
        );

        // alert('All values submitted to store');
        setInputs({ ...inputs,
            fullName: {
                ...inputs.fullName,
                value: '',
            },
            address: {
                ...inputs.address,
                value: '',
            },
            pinCode: {
                ...inputs.pinCode,
                value: '',
            },
            phone: {
                ...inputs.phone,
                value: '',
            },
            highestEducation: {
                ...inputs.highestEducation,
                value: '',
            },
            passingYear: {
                ...inputs.passingYear,
                value: '',
            },
        });
    };

    return (
        <center>
            <form
                className="container d-flex justify-content-center mt-5"
                onSubmit={handleSubmit}
            >
                <Box
                    display="flex"
                    flexDirection={"column"}
                    height={800}
                    width={600}
                    my={4}
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}>
                    <Typography variant='h4' padding={3} textAlign={'center'}>Add New Person</Typography>
                    <TextField
                        id="standard-helperText"
                        label="Full name"
                        variant="standard"
                        name="fullName"
                        onChange={handleChange}
                        // // required
                        // value={inputs?.fullName?.value}
                        error={inputs.fullName?.error}
                        helperText={inputs.fullName?.error && inputs.fullName?.errorMessage}
                    />
                    <TextField
                        id="standard-helperText"
                        label="Address"
                        variant="standard"
                        name="address"
                        onChange={handleChange}
                        // required
                        value={inputs?.address?.value}
                        error={inputs.address?.error}
                        helperText={inputs.address?.error && inputs.address?.errorMessage}
                    />
                    <TextField
                        id="standard-helperText"
                        label="PinCode"
                        variant="standard"
                        name="pinCode"
                        onChange={handleChange}
                        // required
                        value={inputs?.pinCode?.value}
                        error={inputs.pinCode?.error}
                        helperText={inputs.pinCode?.error && inputs.pinCode?.errorMessage}
                    />
                    <TextField
                        id="standard-helperText"
                        label="Phone Number"
                        variant="standard"
                        name="phone"
                        onChange={handleChange}
                        // required
                        value={inputs?.phone?.value}
                        error={inputs.phone?.error}
                        helperText={inputs.phone?.error && inputs.phone?.errorMessage}
                    />
                    <TextField
                        id="standard-helperText"
                        label="Highest Education"
                        variant="standard"
                        name="highestEducation"
                        onChange={handleChange}
                        // required
                        value={inputs?.highestEducation?.value}
                        error={inputs.highestEducation?.error}
                        helperText={inputs.highestEducation?.error && inputs.highestEducation?.errorMessage}
                    />
                    <FormControl style={{ width: 220 }}>
                        <InputLabel id="demo-simple-select-label"> Passing Year </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="passingYear"
                            name="passingYear"
                            onChange={handleChange}
                            // required
                            value={inputs?.passingYear || inputs?.passingYear?.value}
                            error={inputs.passingYear?.error}
                            helperText={inputs.passingYear?.error && inputs.passingYear?.errorMessage}
                        >
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                            <MenuItem value={2022}>2022</MenuItem>
                            <MenuItem value={2023}>2023</MenuItem>
                        </Select>
                    </FormControl>
                    

                    <Button sx={{ marginTop: 3, borderRadius: 3 }} variant='contained' color='warning' type='submit'>
                        Add
                    </Button>
                </Box>

            </form>
        </center>


    );
};

export default AddForm;