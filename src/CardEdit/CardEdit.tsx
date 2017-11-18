import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import { Button, Card, CardHeader, CardBody, CardFooter } from '../';

export interface CardEditProps { }
export interface CardEditState {
  mode: 'read' | 'edit';
}

class CardEdit extends React.Component<CardEditProps, CardEditState> {

  static propTypes = {};

  static defaultProps = {};

  handleSave = () => {
    this.setState({ mode: 'read' });
  };

  handleCancel = () => {
    this.setState({ mode: 'read' });
  };

  constructor(props: CardEditProps) {
    super(props);
    this.state = {
      mode: 'read'
    };
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h3
            className="mb-0"
            style={{display: "inline-block"}}
            >Title of the Card</h3>
          {'edit' !== this.state.mode && (
          <div className="card-actions">
            <Button
              type="light"
              size="sm"
              onClick={() => this.setState({ mode: 'edit' })}
              >Edit</Button>
          </div>
          )}
        </CardHeader>
        <CardBody>{this.props.children}</CardBody>
        <CardFooter>
          {'edit' === this.state.mode && (
          <div className="card-actions">
            <Button
              type="light"
              size="sm"
              onClick={this.handleCancel}
              >Cancel</Button>
            {' '}
            <Button
              type="primary"
              size="sm"
              onClick={this.handleSave}
              >Save</Button>
          </div>
          )}
        </CardFooter>
      </Card>
    );
  }

}

export default CardEdit;
