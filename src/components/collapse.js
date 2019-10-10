import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <a color="primary" onClick={this.toggle} style={{ marginBottom: '1rem', color:`blue` }}>What is your warranty?</a><br/>
        <a color="primary" onClick={this.toggle} style={{ marginBottom: '1rem', color:`blue` }}>Do you offer under counter lighting?</a><br/>
        <a color="primary" onClick={this.toggle} style={{ marginBottom: '1rem', color:`blue` }}>How do I get setup for Contractor or Designer Services?</a><br/>
        <a color="primary" onClick={this.toggle} style={{ marginBottom: '1rem', color:`blue` }}>Can you ship to my job site?</a>

        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Warranty: Showplace Wood Products (“Showplace”) provides a Limited Lifetime Warranty to the original owners of the installed cabinetry (the “Product”) and warrants its Product when purchased through Mtn. Kitchens LLC. to be free from defects in material or workmanship under normal residential use for as long as they are owned by the original purchaser in the Product’s originally installed location. This warranty is not transferable to subsequent owners. Mitered joints may tend to open and close with changes of season or humidity levels. Opening joints are not a sign of joint failure and no warranty applies. We do warrant against joint failure such as complete weakening or joint breakage.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
