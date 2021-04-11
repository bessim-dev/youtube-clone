import React from "react";

const withDataFetching = (props) => (WrappedComponent) => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        error: "",
        loading: true,
      };
    }
    async componentDidMount() {
      try {
        const data = await fetch(props.dataSource);
        const dataJSON = await data.json();
        if (dataJSON) {
          this.setState({
            data: dataJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }
    render() {
      const { loading, data, error } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }
  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;
  return WithDataFetching;
};
export default withDataFetching;
