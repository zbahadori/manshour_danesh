import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonToggle,
} from "reactstrap";
import { InputGroup, FormControl, Container, Col, Row } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./studentprofile.scss";
import Header from "../../Header";
import Menu from "../../Menu";
import Footer from "../../Footer";
import Button from "@material-ui/core/Button";
import Alert from "../../../components/Alert/Alert";
import FormInput from "../../../components/FormInput/FormInput";
import CustomButton from "../../../components/CustomButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  button: {
    margin: theme.spacing(1),
  },
}));

export default function StudentProfile(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const [variant, setVariant] = useState("none");
  function handleClose(e, reason) {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  }

  const handelChange = (event) => {
    const { value, name } = event.target;
    setData({ [name]: value });
  };

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
              <FormInput name="name" type="text" label="نام" required />
            </Col>

            <Col>
              <FormInput name="last name" type="text" label="نام خانوادگی" />
            </Col>

            <Col>
              <FormInput name="father name" type="text" label="نام پدر" />
            </Col>

            <Col>
              <FormInput name="city" type="text" label="شهر" />
            </Col>
          </Row>

          <Row style={{ margin: 10 }}>
            <Col>
              <FormInput name="natinaol id" type="text" label="شماره ملی" />
            </Col>

            <Col>
              <FormInput name="phone number" type="text" label="شماره تماس" />
            </Col>

            <Col>
              <FormInput name="grade" type="text" label="کلاس" />
            </Col>

            <Col>
              <FormInput name="refrance number" type="text" label="نام معرف" />
            </Col>
          </Row>

          <Row>
            <CustomButton> ثبت تغییرات </CustomButton>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
