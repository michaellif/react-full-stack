var MyComponent = React.createClass({
  render: function() {
    return <div>Hello World 5</div>;
  }
});

ReactDOM.render(<MyComponent />,
        document.getElementById('example')
      );