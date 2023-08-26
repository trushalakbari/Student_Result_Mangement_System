import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function StudentMarks(props) {
    let { openmarks, setopenmarks, subject } = props
    const [student, setstudent] = useState({
        name: "",
        std: "",
    })
    const [error, seterror] = useState([])
    const handleClose = () => {
        setopenmarks(false);
        seterror([])
    };


    const HandleValue = (name, e) => {
        student[name] = e.target.value
        setstudent(student)
    }
    console.log(subject);
    return (
        <div>
            <Dialog open={openmarks} onClose={handleClose} >
                <center>
                    <DialogTitle>Add Marks : - {" Pratik"}</DialogTitle>
                </center>
                <hr className='mb-0' />
                <DialogContent>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Subjects</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Subject"
                        // onChange={handleChange}
                        >
                            {subject.map((x) => (
                                <MenuItem key={x.id} value={x.subject}>
                                    {x.subject}
                                </MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Marks"
                        type="email"
                        fullWidth
                        name='std'
                        variant="outlined"
                        error={error.length > 0}
                        helperText={error}
                        onChange={(e) => { HandleValue(e.target.name, e) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant='outlined' onClick={""}>ADD</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}