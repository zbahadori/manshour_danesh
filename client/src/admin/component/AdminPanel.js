import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Alert from "./Alert";

import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader';
import AdminMenue from './AdminMenu';



export default function AdminPanel() {
  const API_URL = "https://manshour.herokuapp.com/";
  const useStyles = makeStyles(theme => ({
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));

  const classes = useStyles();
  const [state, setState] = useState({
    data: []
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [variant, setVariant] = useState("none");

  useEffect(() => {
    axios
      .get(API_URL + '/api/admin/get-all-users')
      .then(response => setState({ data: response.data.result }))
      .catch(err => console.log(err));
  }, []);

  function handleClose(e, reason) {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  }





  return (
    <>

      <AdminHeader />
      <AdminMenue />
      <main>

        <Alert
          open={open}
          onClose={handleClose}
          message={message}
          variant={variant}
        />

        <MaterialTable
          title=" پنل مدیریت"
          columns={[
            { title: "Name", field: "Name" },
            {
              title: "Active",
              field: "Active",
              editComponent: props =>
                (
                  <Checkbox
                    checked={props.rowData.Active}
                    onChange={e => props.onChange(e.target.checked)}
                    value={props.value}
                    inputProps={{
                      "aria-label": "primary checkbox"
                    }}
                  />
                ),
              render: rowData => (
                <Checkbox
                  disabled
                  checked={rowData.Active}
                  // onChange={handleChange("checkedA")}
                  value=""
                  inputProps={{
                    "aria-label": "primary checkbox"
                  }}
                />
              )
            },
            {
              title: "Photos",
              field: "Photo",
              editComponent: props => (
                <>
                  <input
                    onChange={e => props.onChange(e.target.files[0])}
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    // multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      className={classes.button}
                    >
                      Upload
                  </Button>
                  </label>
                </>
              ),
              render: rowData => (
                <Avatar
                  alt={rowData.Name}
                  src={rowData.Photo}
                  className={classes.bigAvatar}
                />
              )
            }
          ]}
          data={state.data}
          editable={{

            //////
            ///////
            ////// for adding user

            onRowAdd: newData =>
              new Promise(resolve => {
                // console.log(newData)
                const formData = new FormData();
                // formData.append("name", newData.Name);
                // formData.append("phone_number", newData.phone_number);
                formData.append("title", newData.title);
                formData.append("message", newData.message);
                formData.append("status", newData.status);
                formData.append("Active", newData.Active);

                axios
                  .post(API_URL + "/api/admin/create-alert", formData)
                  .then(response => {
                    const data = state.data;
                    data.post(response.data.result);
                    setState({ data });
                    if (response.data.message.statusCode === 200) {
                      resolve();
                      setMessage("Thank You For Add");
                      setVariant("success");
                      setOpen(true);
                    } else {
                      resolve();
                      setOpen(true);
                      setMessage("You can not Add");
                      setVariant("error");
                    }
                  })
                  .catch(err => {
                    resolve();
                    setOpen(true);
                    setMessage("You can not Add");
                    setVariant("error");
                  });
              }),

            //////
            ///////
            ////// for updating and editing users

            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                const formData = new FormData();
                //formData.set("Name", newData.Name);
                formData.set("id", newData.id);
                formData.set("title", newData.title);
                formData.set("Active", newData.Active);
                formData.set("message", newData.message);
                formData.set("status", newData.status);
                //formData.append("Photo", newData.Photo);
                axios
                  .post(API_URL + `update-single-alert${oldData._id}`, formData)
                  .then(response => {
                    const data = [...state.data];
                    data[data.indexOf(oldData)] = response.data.result;
                    setState({ ...state, data });

                    if (response.data.message.statusCode === 200) {
                      resolve();
                      setMessage("Your Update is ok");
                      setVariant("success");
                      setOpen(true);
                    } else {
                      resolve();
                      setMessage("You Update was failed");
                      setVariant("error");
                      setOpen(true);
                    }
                  })
                  .catch(err => {
                    resolve();
                    setMessage("You cant update");
                    setVariant("error");
                    setOpen(true);;
                  });
              }),

            ///////
            ////// for deleting users

            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...state.data];
                  data.splice(data.indexOf(oldData), 1);
                  setState({ ...state, data });
                }, 600);
              })
          }}
        />
      </main>
      <AdminFooter />
    </>
  );
}
