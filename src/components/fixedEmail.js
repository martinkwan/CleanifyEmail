import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from '../app.css';


export default class FixedEmail extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
      copied: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className={styles.inputEmail}>
        <div>
          <h2>Highlighed Email</h2>
          <textarea value={this.state.value} className={styles.fixedEmail}
          onChange={({target: {value}}) => this.setState({value, copied: false})} />
        </div>
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <Button>Copy to clipboard</Button>
        </CopyToClipboard>
        <Button>Send</Button>
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    )
  }
};