import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validclass = (val) => /^[A-Z0-9 _]*[A-Z0-9][A-Z0-9 _]*$/i.test(val);
const validyear = (val) => (val >= 2017);

class Form extends Component {

  constructor(props) {
      super(props);

      this.state={
          firstname: '',
          lastname: '',
          yop: '',
          class: '',
          percentage: '',

      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange =this.handleInputChange.bind(this);
  }

handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
      [name]: value
  })

}

handleSubmit(event){
  console.log("Current State is:" + JSON.stringify(this.state));
  alert("Current State is:" + JSON.stringify(this.state));
  event.peventDefault();
}
  render( ){
      return(
              <div className="row row-content">
              <h3>FORM</h3>
                  <div className="col-12 col-md-9">
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{ required, maxLength: maxLength(20)}}
                                    />
                                    <Errors 
                                    className="text-danger"model=".firstname" show="touched"
                                    messages={{ required: 'Required', maxLength: 'Must be 20 characters or less' }}
                                    />
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                    className="form-control"
                                    placeholder="Last Name"
                                    validators={{
                                        required, maxLength: maxLength(20)
                                    }}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        maxLength: 'Must be 20 characters or less'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yop" md={2}>Year Of Passing </Label>
                                <Col md={10}>
                                    <Control.text model=".yop" id="percentage" name="yop"
                                        placeholder="Year of Passing"
                                        className="form-control"
                                        validators={{
                                            required, isNumber, validyear
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yop"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: ' Must be a number',
                                            validyear: 'Must be 2017 or greater'
                                        }}
                                     />
                                </Col>
                            </Row>     
                            <Row className="form-group">
                                <Label htmlFor="class" md={2}>Class </Label>
                                <Col md={10}>
                                    <Control.text model=".class" id="class" name="class"
                                        placeholder="Class"
                                        className="class"
                                        validators={{
                                            required, validclass
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".class"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validclass: ' Not a Valid Class'
                                        }}
                                     />
                                </Col>
                            </Row>
                          <Row className="form-group">
                                <Label htmlFor="percentage" md={2}>Percentage</Label>
                                <Col md={10}>
                                    <Control.text model=".percentage" id="percentage" name="percentage"
                                        placeholder="Percentage"
                                        className="form-control"
                                        validators={{
                                            required, isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".percentage"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            isNumber: ' Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{sixe:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                      </LocalForm>
                  </div>
               </div>
  
      );
  }

}

export default  Form; 
