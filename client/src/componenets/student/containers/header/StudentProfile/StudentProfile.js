import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText, ButtonToggle } from 'reactstrap';
import { InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './studentprofile.scss'
import Header from '../../Header';
import Menu from '../../Menu';
import Footer from '../../Footer';
import Button from '@material-ui/core/Button';
import Alert from '../../../../admin/component/Alert';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  button: {
    margin: theme.spacing(1)
  }
}));





export default function StudentProfile(props) {
  const classes = useStyles();


  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [variant, setVariant] = useState("none");
  function handleClose(e, reason) {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  }


  return (

    <>
      <Header />
      <Menu />
      <main>


        <Alert
          open={open}
          onClose={handleClose}
          message={message}
          variant={variant}
        />

        <Container>
          <Row>
            <Col>
              <TextField
                required
                id="filled-required"
                label="اجباری"
                defaultValue=" نام کاربری"
                variant="filled"
              />

            </Col>


            <Col>

              <TextField
                id="filled-password-input"
                label=" نام خانوادگی"

                autoComplete="current-password"
                variant="filled"
              />

            </Col>

            <Col>

              <TextField
                id="filled-password-input"
                label=" محل سکونت "

                autoComplete="current-password"
                variant="filled"
              />

            </Col>

            <Col>

              <TextField
                id="filled-password-input"
                label=" نام پدر"

                autoComplete="current-password"
                variant="filled"
              />
            </Col>

          </Row>

          <Row style={{ margin: 10 }}>

            <Col>

              <TextField
                id="filled-password-input"
                label="  کلاس"

                autoComplete="current-password"
                variant="filled"
              />
            </Col>

            <Col>


              <TextField
                id="filled-password-input"
                label=" مدرسه"

                autoComplete="current-password"
                variant="filled"
              />


            </Col>


            <Col>

              <TextField
                id="filled-number"
                label="شماره ملی"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />

            </Col>


            <TextField
              id="filled-number"
              label="شماره تماس"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />


            <Col>


            </Col>

          </Row>

          <Row>
            <Button
              variant="contained"
              component="span"
              color="secondary"
              className={classes.button}
            >
              ثبت ویرایش
                  </Button>
          </Row>


        </Container>

      </main>
      <Footer />
    </>





  );
}
