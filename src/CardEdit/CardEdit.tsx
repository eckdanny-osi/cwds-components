import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import Card from '../Card';
import Button from '../Button';
import { Children } from 'react';

export interface CardEditProps { }
export interface CardEditState {
  mode: 'view' | 'edit';
}

interface ICardEditHeader {
  mode?: 'view' | 'edit';
  onClick?: Function;
}

const CardEditHeader: React.SFC<ICardEditHeader> = ({
  mode,
  onClick,
}) => (
  <div className="card-actions">
    <Button
      className="pull-right"
      type="link"
      onClick={()=>{alert('hi')}}
      size="sm"
      disabled={'edit' === mode}
    >
      Edit
    </Button>
  </div>
);

CardEditHeader.defaultProps = {
  mode: 'view',
};

const CardEditFooter: React.SFC = () => (
  <div className="card-actions">
    <Button type="link" size="sm">Cancel</Button>
    <Button type="primary" size="sm">Save</Button>
  </div>
);

class CardEdit extends React.Component<CardEditProps, CardEditState> {

  constructor(props: CardEditProps) {
    super(props);
    this.setState({
      mode: 'view'
    });
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Card
        header={<CardEditHeader mode={this.state.mode} />}
        footer={<CardEditFooter />}
      >
        {this.props.children}
      </Card>
    );
  }

}

export default CardEdit;
