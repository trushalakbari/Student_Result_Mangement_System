import { Button, Divider, TextField } from "@mui/material";

export default function ShowResult() {
    return <>
        <div className="container">

            <h2 className="pb-3">Student Result</h2>
            <Divider />
            <div className="row shadow justify-content-center align-items-center p-4 mt-5 rounded gap-2">
                <div className="col-12 col-md-6">
                    <TextField className="w-100" id="outlined-basic" label="Student" variant="outlined" />
                </div>
                <div className="col-12 col-md-6">
                    <TextField className="w-100" id="outlined-basic" label="Subjects" variant="outlined" />
                </div>
                <div className="col-12  col-md-12 gap-2 d-flex text-center justify-content-center">
                    <Button variant="outlined">Show Result</Button>
                </div>
            </div>
        </div>
    </>
}