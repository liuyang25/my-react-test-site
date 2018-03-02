import Hello from 'components/hello';
import * as actions from 'actions/';
import { StoreState } from 'types/index';
import { connect, Dispatch } from 'react-redux';
import * as React from 'react';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}
// export default connect(mapStateToProps, mapDispatchToProps)(Hello);
class Home extends React.Component<any> {
  constructor() {
    super({});
  }
  render() {
    return (
      <Hello name="hehe" />
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);